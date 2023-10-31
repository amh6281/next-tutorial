import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const db = (await connectDB).db("forum");

  await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
  res.status(200).json("ok");
}