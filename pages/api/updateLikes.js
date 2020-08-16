import { connectToDatabase } from "../../utils/mongodb"

export default async (req, res) => {
  try {
    const { db } = await connectToDatabase()
    const { origin } = req.query

    if (req.method === "POST") {
      await db.collection("likes").findOneAndUpdate({ page: origin }, { $inc: { likes: 1 } })
      res.status(200)
    }
  } catch (err) {
    res.status(500)
  }
}
