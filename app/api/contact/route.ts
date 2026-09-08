import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { validateContactMessage, type ContactMessage } from "@/lib/contact-message";
import { createZohoLead, splitName } from "@/lib/zoho";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const result = validateContactMessage(body);
  if ("error" in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const contactMessage: ContactMessage = {
    ...result.data,
    status: "new",
    createdAt: new Date(),
  };

  try {
    const db = await getDb();
    await db.collection<ContactMessage>("contactMessages").insertOne(contactMessage);
  } catch (err) {
    console.error("Failed to save contact message", err);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 500 },
    );
  }

  try {
    const { firstName, lastName } = splitName(contactMessage.name);
    await createZohoLead({
      Last_Name: lastName,
      First_Name: firstName,
      // Contact form doesn't collect a company name; Company is required by Zoho's Leads module.
      Company: `${contactMessage.name} (via contact form)`,
      Email: contactMessage.email,
      Description: contactMessage.message,
      Lead_Source: "Website",
    });
  } catch (err) {
    console.error("Failed to push contact message to Zoho CRM", err);
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
