const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = require("./connect");

app.get("/showdota", (req, res, next) => {
  db.then((db) => {
    // เมื่อมีการเชื่อมต่อไปยัง MongoDB server เรียบร้อยแล้ว
    db.collection("dota")
      .find()
      .toArray((error, results) => {
        // แสดงข้อมูลของ tbl_usrs ทั้งหมด
        if (error)
          return res.status(500).json({
            status: 500,
            message: "Internal Server Error",
          });
      
        return res.json(results);
      });
  });
});
app.listen("8000", () => {
  console.log("8000 redy");
});
