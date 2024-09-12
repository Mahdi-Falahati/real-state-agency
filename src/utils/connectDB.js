import { connect, connections } from "mongoose";

export default connectDB = async () => {
  if (connections[0].readyState) return;

  mongoose.set("strictQuery", false);
  await connect(process.env.MONGO_URI);
};
