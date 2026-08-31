import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

/**
 * Cached across hot reloads in dev (via globalThis) so each file change
 * doesn't open a fresh connection; a plain module-level cache is enough
 * in production, where the module only loads once per instance.
 */
function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }

  if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>;
    };
    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri);
      globalWithMongo._mongoClientPromise = client.connect();
    }
    return globalWithMongo._mongoClientPromise;
  }

  if (!clientPromise) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  return clientPromise;
}

export async function getDb() {
  const connectedClient = await getClientPromise();
  return connectedClient.db(process.env.MONGODB_DB || "chrps");
}
