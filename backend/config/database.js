import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((c) => {
      console.log(`MonogDB Connected to ${c.connection.host} `);
    })
    .catch((e) => {
      console.log("Error connecting to database ${e} ");
    });
};
