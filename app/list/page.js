import { connectDB } from "@/util/database";
import React from "react";

const page = async () => {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((item) => (
        <div className="list-item" key={item._id}>
          <h4>글제목 : {item.title}</h4>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
};

export default page;
