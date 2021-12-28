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

        .aggregate([
          {
            $lookup: {
              from: "semester",
              localField: "semesters",
              foreignField: "_id",
              as: "test",
            },
          },
        ])
        .toArray();

      res.status(200).json({
        sp: specialties.map((item) => {
          return {
            specialty: item.name,
            semesters: item.test.map((item) => item.name),
            groups: item.groups,
          };
        }),
      });
      /* 
      
      const semesters = await client
        .db("mehdi")

        .collection("semester")

        .find({})

        .toArray();

      result = semesters.map((item) => {
        var sp = specialties.map((item2) => {
          item2.semesters.filter((item3) => {
            return item3.toString() == item._id.toString();
          });
        });

        return {
          id: item._id,
          name: item.name,
          specialty: sp,
        };
      });

      res.status(200).json(result);
      */
    } catch (error) {
      console.log(error);
    }
  }
  res.status(200).json({
    empty: "there is nothing",
  });
}
