import { ObjectId } from "mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

export default async function handler(req, res) {
  if (req.method === "GET") {
    await client.connect();

    const students = await client
      .db("mehdi")

      .collection("student")

      .find({})

      .toArray();
    res.status(200).json(students);
  }
  if (req.method === "POST") {
    await client.connect();

    const student = await client
      .db("mehdi")

      .collection("student")

      .insertOne(req.body.student);

    res.status(200).json({ message: "added" });
  }
  res.status(200).json({
    message: "added",
  });
}
