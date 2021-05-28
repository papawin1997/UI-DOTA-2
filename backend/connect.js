const MongoClient = require("mongodb").MongoClient;
const url = "mongodb+srv://papawin:root123456@papawin1st.1dulj.mongodb.net/HeroDota?retryWrites=true&w=majority";
const dbName = "HeroDota";

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