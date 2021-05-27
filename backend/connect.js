const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "HeroDota";

// ส่งการเชื่อมต่อฐานข้อมูลไปใช้งาน
module.exports = new Promise((resolve, reject) => {
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error, client) => {
      if (error) throw error;
      var db = client.db(dbName);
      console.log("Connected successfully to server");
      resolve(db);
    }
  );
});
