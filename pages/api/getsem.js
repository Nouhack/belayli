import { ObjectId } from "mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

export default async function handler(req, res) {
  if (req.method === "GET") {
    await client.connect();

    const semesters = await client
      .db("mehdi")

      .collection("semester")

      .find({
        _id: {
          $in: req.query["semarray[]"].map((item) => ObjectId(item)),
        },
      })

      .toArray();
    res.status(200).json(semesters);
  }
  res.status(200).json({
    empty: "there is nothing",
  });
}
