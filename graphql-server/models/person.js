import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
  },
  age: {
    type: String,
  },
});

export default mongoose.model("Person", schema);
