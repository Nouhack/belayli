import { ObjectId } from "mongodb";

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

      .find({})

      .toArray();
    res.status(200).json(teacher);
  }
  if (req.method === "POST") {
    try {
      await client.connect();

      const teacher = await client
        .db("mehdi")

        .collection("teacher")

        .insertOne(req.body.teacher);

      res.status(200).json({ message: "added" });
    } catch (error) {
      res.status(200).json({ message: "not added" });
    }
  }
  res.status(200).json({
    message: "no post and get",
  });
}
