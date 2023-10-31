import { connectDB } from "@/util/database";
import React from "react";
import DetailLink from "./DetailLink";
import Link from "next/link";
import ListItem from "./ListItem";

export const revalidate = 15;

const page = async () => {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
};

export default page;
