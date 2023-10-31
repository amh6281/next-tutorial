"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";

const ListItem = ({ result }) => {
  const handleClick = (id, e) => {
    fetch("/api/delete", {
      method: "DELETE",
      body: id,
    });
  };

  return (
    <>
      {result.map((item) => (
        <div className="list-item" key={item._id}>
          <h4>글제목 : {item.title}</h4>
          <p>1월 1일</p>
          <DetailLink url={item._id} />
          <Link href={`/edit/${item._id}`}>수정</Link>
          <button onClick={(e) => handleClick(item._id)}>삭제</button>
        </div>
      ))}
    </>
  );
};
export default ListItem;
