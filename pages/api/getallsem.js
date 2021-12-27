import { ObjectId } from "mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await client.connect();
      var nex = [];
      var result = [];

      const specialties = await client
        .db("mehdi")

        .collection("specialty")

        .find({})

        .toArray();

      const semesters = await client
        .db("mehdi")

        .collection("semester")

        .find({})

        .toArray();

      result = specialties.map((item) => {
        return item.semesters.map((ii) => {
          return semesters.filter((ll) => {
            return ll._id == ii;
          });
        });
      });

      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  }
  res.status(200).json({
    empty: "there is nothing",
  });
}
