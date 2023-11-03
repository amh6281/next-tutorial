import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const page = async ({ params }) => {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });
  console.log(result);
  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
};

export default page;
