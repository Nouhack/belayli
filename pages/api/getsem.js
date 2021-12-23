import { ObjectId } from "mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await client.connect();
      console.log("--------------------------");
      console.log(typeof req.query["semarray[]"]);
      var vals =
        typeof req.query["semarray[]"] !== "object"
          ? req.query["semarray[]"].split()
          : req.query["semarray[]"];
      console.log("--------------------------");
      const semesters = await client
        .db("mehdi")

        .collection("semester")

        .find({
          _id: {
            $in: vals.map((item) => ObjectId(item)),
          },
        })

        .toArray();
      res.status(200).json(semesters);
    } catch (error) {
      console.log(error);
    }
  }
  res.status(200).json({
    empty: "there is nothing",
  });
}
