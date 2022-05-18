const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDb..."))
    .catch((err) => {
      console.log(process.env.MONGODB_CONNECTION_STRING);
      console.log(`Could not connect to MongoDb. Error: ${err}`);
      process.exit(1);
    });
};

module.exports = connectDb;