const Model = require("./db.js");
const exampleData = require("../examples/exampleData.json");

Model.deleteMany({})
  .then(() => Promise.all(exampleData.map((item) => Model.create(item))))
  .then(() => console.log("The database has been reset!"))
  .catch((err) => console.error("Error resetting the database: ", err))
  .then(() => process.exit());
