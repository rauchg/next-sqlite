import { db } from "./sqlite";

export default async function Home() {
  const table = "student";
  const { rows } = await db.execute(
    `SELECT * from ${table} ORDER BY random() LIMIT 10`,
  );
  return <pre>{JSON.stringify(rows, null, 2)}</pre>;
}
