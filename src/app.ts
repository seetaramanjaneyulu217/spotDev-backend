import { Request, Response } from "express";

const express = require("express");

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "Default route" });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
