import { connection } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";

export async function GET() {
  await connection();

  const clicks = await getClicksCollection();
  const docs = await clicks.find().toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc._id, doc.count]));

  return Response.json({ counts });
}
