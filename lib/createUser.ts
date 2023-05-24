import { MongoClient } from 'mongodb';

export async function createUser(userData) {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('buyerstore'); // Замініть на назву вашої бази даних
    const usersCollection = database.collection('users');

    const result = await usersCollection.insertOne(userData);

    return result.insertedId;
  } finally {
    await client.close();
  }
}