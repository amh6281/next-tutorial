import { connectDB } from "@/util/database";
import React from "react";
import DetailLink from "./DetailLink";

const page = async () => {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item) => (
        <div className="list-item" key={item._id}>
          <h4>글제목 : {item.title}</h4>
          <p>1월 1일</p>
          <DetailLink url={item._id} />
        </div>
      ))}
    </div>
  );
};

export default page;
