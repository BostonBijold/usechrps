import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { validateLeadInput, CALL_WINDOWS, type Lead } from "@/lib/lead";
import { createZohoLead, createZohoLeadTask, splitName } from "@/lib/zoho";

/** Business closes for the day around 6pm; after that, push the follow-up task to tomorrow. */
function nextTaskDueDate(): string {
  const now = new Date();
  if (now.getHours() >= 18) {
    now.setDate(now.getDate() + 1);
  }
  return now.toISOString().slice(0, 10);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = validateLeadInput(body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const lead: Lead = {
    ...result.data,
    status: "new",
    createdAt: new Date(),
  };

  try {
    const db = await getDb();
    await db.collection<Lead>("leads").insertOne(lead);
  } catch (err) {
    console.error("Failed to save lead", err);
    return NextResponse.json(
      { error: "Something went wrong saving your info. Please try again." },
      { status: 500 },
    );
  }

  const callWindowLabel =
    CALL_WINDOWS.find((w) => w.value === lead.callWindow)?.label ?? lead.callWindow;

  try {
    const { firstName, lastName } = splitName(lead.contactName);
    const leadId = await createZohoLead({
      Last_Name: lastName,
      First_Name: firstName,
      Company: lead.companyName,
      Email: lead.email,
      Phone: lead.phone,
      Description: [`Type of business: ${lead.vertical}`, lead.notes].filter(Boolean).join("\n\n"),
      Lead_Source: "Website",
    });

    try {
      await createZohoLeadTask({
        Subject: `Call ${lead.contactName} — ${lead.companyName}`,
        Who_Id: leadId,
        Due_Date: nextTaskDueDate(),
        Priority: "High",
        Description: `Preferred call time: ${callWindowLabel}\nPhone: ${lead.phone}\nEmail: ${lead.email}`,
      });
    } catch (err) {
      console.error("Failed to create Zoho follow-up task", err);
    }
  } catch (err) {
    console.error("Failed to push lead to Zoho CRM", err);
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
