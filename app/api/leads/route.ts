import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { validateLeadInput, type Lead } from "@/lib/lead";

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

  return NextResponse.json({ ok: true }, { status: 201 });
}
