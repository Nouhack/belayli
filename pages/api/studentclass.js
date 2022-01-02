import { ObjectId } from "mongodb";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

const client = new MongoClient(url);

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log("-===========================");
    const criteria = req.query["criteria"];
    console.log(criteria);
    console.log(JSON.parse(criteria)["specialty"]);
    console.log(JSON.parse(criteria)["semester"]);
    console.log(JSON.parse(criteria)["group"]);
    console.log("-===========================");
    await client.connect();

    const students = await client
      .db("mehdi")

      .collection("student")

      .find({
        specialty: JSON.parse(criteria)["specialty"],
        semester: JSON.parse(criteria)["semester"],
        group: JSON.parse(criteria)["group"],
      })

      .toArray();

    const notes = await client
      .db("mehdi")

      .collection("notes")

      .find({})

      .toArray();

    console.log("================  =hhhh  =====");
    console.log(notes);
    console.log("======================");

    res.status(200).json({
      students: students,
      notes: notes,
    });
  }
  res.status(200).json({
    message: "added",
  });
}
