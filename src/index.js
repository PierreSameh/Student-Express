import express from "express";
import mongoose from "mongoose";
import StudentRouter from "./Routers/StudentRouter.js";
import cors from "cors";
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

mongoose
  .connect("mongodb://127.0.0.1:27017/studentslist")
  .then(console.log("DB Connected"));

app.use("/students", StudentRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
