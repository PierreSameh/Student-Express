import express from "express";
import mongoose from "mongoose";
import { Student } from "./Models/Student.js";
const app = express();
const port = 3000;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/studentslist")
  .then(console.log("DB Connected"));

app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

app.get("/students/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    res.status(404);
  }
  res.status(200).send(student);
});

app.post("/students", async (req, res) => {
  const student = await Student.create(req.body);
  student.save();
  res.status(201).send(student);
});

app.put("/students/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!student) {
    res.status(404);
  }
  res.status(200).send(student);
});

app.delete("/students/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) {
    res.status(404);
  }
  res.status(200).send("Student Deleted Successfully");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
