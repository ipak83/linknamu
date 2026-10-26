import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 없습니다. .env.local을 확인하세요.");
}

// 개발 중 핫 리로드로 연결이 계속 늘어나지 않도록 전역에 한 번만 만들어 둔다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise = (globalForMongo._mongoClientPromise ??= new MongoClient(uri).connect());

export type ClickDoc = {
  _id: string;
  count: number;
};

export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db().collection<ClickDoc>("clicks");
}
