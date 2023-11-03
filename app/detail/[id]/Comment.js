"use client";

import { useState } from "react";

const Comment = () => {
  const [comment, setComment] = useState("");
  console.log(comment);
  return (
    <div>
      <div>댓글 목록</div>
      <input onChange={(e) => setComment(e.target.value)} />
      <button
        onClick={() => {
          fetch("URL", { method: "POST", body: comment });
        }}
      >
        쓰기
      </button>
    </div>
  );
};

export default Comment;
