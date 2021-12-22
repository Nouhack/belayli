import { ObjectId } from "mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

export default async function handler(req, res) {
  if (req.method === "GET") {
    await client.connect();

    const specialties = await client
      .db("mehdi")

      .collection("specialty")

      .find({})

      .toArray();
    console.log("==================================");
    console.log(specialties);
    console.log("==================================");
    res.status(200).json(specialties);
  }
  if (req.method === "POST") {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mehdi");
      dbo
        .collection("semester")
        .insertMany(req.body.semester, function (err, res) {
          if (err) throw err;
          console.log("Number of documents inserted: " + res.insertedCount);
          console.log(res.insertedIds);
          var specialty = {
            name: req.body.specialty.name,
            cycle: req.body.specialty.cycle,
            semesters: Object.values(res.insertedIds),
            groups: req.body.specialty.groups,
          };
          dbo.collection("specialty").insertOne(specialty, function (err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
          });
        });
    });
    res.status(200).json({
      message: "added",
    });
  }
  res.status(200).json({
    empty: "there is nothing",
  });
}
