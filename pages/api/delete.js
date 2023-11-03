import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { useSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = useSession();
  const db = (await connectDB).db("forum");
  const find = await db
    .collection("post")
    .findOne({ _id: new ObjectId(req.body) });

  console.log(req.body);
  if (session.user.email === find.author) {
    await db.collection("post").deleteOne({ _id: new ObjectId(req.body) });
    res.status(200).json("ok");
  } else {
    console.log(error);
  }
}
