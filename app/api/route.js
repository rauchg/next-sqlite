import { db } from "../sqlite";

export async function GET() {
  const table = "student";
  const { rows } = await db.execute(
    `SELECT * from ${table} ORDER BY random() LIMIT 10`,
  );
  return Response.json(rows, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
}
