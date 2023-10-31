import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (req.body.title == "" || req.body.content == "") {
      return res.status(500).json("NNNNNNONONONO");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("post").insertOne(req.body);
      return res.status(200).redirect(302, "/list");
    } catch (err) {
      console.log(err);
    }
  }
}
