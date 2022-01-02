import { ObjectId } from "mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

export default async function handler(req, res) {
  if (req.method === "GET") {
    await client.connect();

    const studentNotes = await client
      .db("mehdi")
      .collection("notes")
      .find({ studentID: ObjectId(req.query["studentID"]) })
      .toArray();

    console.log("=========================");

    console.log(studentNotes);
    console.log("=========================");
    res.status(200).json(studentNotes);
  }
  res.status(200).json({
    message: "added",
  });
}
