"use client";

import { useRouter } from "next/navigation";

const DetailLink = ({ url }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/detail/${url}`);
  };

  return <button onClick={handleClick}>보기</button>;
};

export default DetailLink;
