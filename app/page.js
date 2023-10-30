import Image from "next/image";
import styles from "./page.module.css";
import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return <>hello</>;
}
