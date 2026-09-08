import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { validateLeadInput, type Lead } from "@/lib/lead";
import { createZohoLead, splitName } from "@/lib/zoho";

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

  try {
    const { firstName, lastName } = splitName(lead.contactName);
    await createZohoLead({
      Last_Name: lastName,
      First_Name: firstName,
      Company: lead.companyName,
      Email: lead.email,
      Phone: lead.phone,
      Description: [`Type of business: ${lead.vertical}`, lead.notes].filter(Boolean).join("\n\n"),
      Lead_Source: "Website",
    });
  } catch (err) {
    console.error("Failed to push lead to Zoho CRM", err);
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
