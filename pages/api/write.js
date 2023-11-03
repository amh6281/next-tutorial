import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (req.method == "POST") {
    if (req.body.title == "" || req.body.content == "") {
      return res.status(500).json("NNNNNNONONONO");
    }
    try {
      const db = (await connectDB).db("forum");
      session &&
        (await db
          .collection("post")
          .insertOne(req.body, (req.body.author = session.user.email)));
      return res.status(200).redirect(302, "/list");
    } catch (err) {
      console.log(err);
    }
  }
}
