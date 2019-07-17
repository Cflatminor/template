// const MongoClient = require("mongodb").MongoClient;
// const url = `${process.env.DB_MODE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`;
// const mongodb = new MongoClient(url, { useNewUrlParser: true });
// let dbclient = null;
//
// mongodb.connect(function(err, client) {
//   if(err) return console.log(err);
//   // dbclient = client.db("Cluster0").collection("notes");
//   dbclient = client;
// });
//
// process.on("SIGINT", () => {
//   mongodb.close();
//   process.exit();
// });
//
// module.exports = dbclient;
module.exports = {
  url: `${process.env.DB_MODE}://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`
};
