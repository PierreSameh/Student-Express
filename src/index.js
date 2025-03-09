import express from "express";
import mongoose from "mongoose";
import { Student } from "./Models/Student.js";
const app = express();
const port = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/studentslist")
  .then(console.log("DB Connected"));

app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
