import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const page = async ({ params }) => {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(params.id) });

  return (
    <div className="p-20">
      <h4>글수정</h4>
      <form action="/api/edit" method="POST">
        <input name="title" defaultValue={result.title} />
        <input name="content" defaultValue={result.content} />
        <input name="_id" defaultValue={result._id.toString()} />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
};

export default page;
