import mongoose from "mongoose";

let isConnected = false; // Check connection status

export async function connectToDB() {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "vibely",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB is Connected");
  } catch (error) {
    console.log(error);
  }
}
