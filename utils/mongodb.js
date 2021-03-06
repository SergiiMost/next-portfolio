import { MongoClient } from "mongodb"

let uri = process.env.MONGODB_URI
let dbName = process.env.MONGODB_DB
let cachedDb = null

export async function connectToDatabase() {
  if (cachedDb) {
    return { db: cachedDb }
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  const db = await client.db(dbName)

  cachedDb = db

  return { db }
}
