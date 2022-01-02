import { ObjectId } from "mongodb";
import { eq } from "react-big-calendar/lib/utils/dates";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

export default async function handler(req, res) {
  if (req.method === "GET") {
    await client.connect();

    const teacher = await client
      .db("mehdi")

      .collection("teacher")

      .findOne({ _id: ObjectId(req.query["id"]) });
    console.log("----------------------------");
    console.log(teacher);
    console.log("----------------------------");
    res.status(200).json(teacher);
  }

  if (req.method === "POST") {
    console.log("================================");
    console.log(req.body._id);
    console.log(req.body.data.module);
    console.log("================================");
    const query = {
      $and: [
        { studentID: { $eq: ObjectId(req.body._id) } },
        { module: { $eq: req.body.data.module } },
      ],
    };
    const update = { $set: req.body.data };
    const options = { upsert: true };

    await client.connect();

    const notes = await client
      .db("mehdi")

      .collection("notes")
      .updateMany(query, update, options);

    res.status(200).json(notes);
  }
  res.status(200).json({
    message: "no post and get",
  });
}
