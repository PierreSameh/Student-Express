import express from "express";
import { Student } from "../Models/Student.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);

  if (!student) {
    return res.status(404);
  }
  res.status(200).send(student);
});

router.post("/", async (req, res) => {
  const student = await Student.create(req.body);
  student.save();
  res.status(201).send(student);
});

router.put("/:id", async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!student) {
    return res.status(404);
  }
  res.status(200).send(student);
});

router.delete("/:id", async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);
  if (!student) {
    res.status(404);
  }
  res.status(200).send("Student Deleted Successfully");
});

export default router;
