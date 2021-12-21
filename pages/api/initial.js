// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

export default function handler(req, res) {
  if (req.method === "GET") {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mehdi");
      dbo
        .collection("module")
        .findOne({ name: "francais" }, function (err, result) {
          if (err) throw err;
          console.log(result);
          res.status(200).json(result._id);
          db.close();
        });
    });
  }
  if (req.method === "POST") {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("mehdi");
      dbo.collection("semester").insertMany(req.body.data, function (err, res) {
        if (err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        db.close();
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
