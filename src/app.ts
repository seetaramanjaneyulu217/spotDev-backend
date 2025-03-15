import { Request, Response } from "express";

const express = require("express");
const connectToDatabase = require("./config/database");

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "Default route" });
});

connectToDatabase()
  .then(() => {
    console.log("Database connected successFully...");
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch(() => {
    console.error("Database connection failed!!!");
  });
