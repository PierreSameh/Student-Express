import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  class: String,
});

export const Student = mongoose.model("Student", studentSchema);
