import { MongoClient } from "mongodb";

const connection = process.env.MONGO_CONNECT;

if (!connection) {
  console.error("Failed communicating with database");
  throw new Error("connection failed, high probability env is not defined");
}

let client: MongoClient;

export const clientMongo = async () => {
  if (!client) {
    client = await MongoClient.connect(connection);
    await client.connect();
  }

  return client;
};
