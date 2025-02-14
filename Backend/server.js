// This is the statement using common js
// const express = require("express");
//====================================================================
// This import statement is using module
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server Is Ready");
});

// Get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "This is joke 1",
      content: "This is a 1 joke content",
    },
    {
      id: 2,
      title: "This is joke 2",
      content: "This is a 2 joke content",
    },
    {
      id: 3,
      title: "This is joke 3",
      content: "This is a 3 joke content",
    },
    {
      id: 4,
      title: "This is joke 4",
      content: "This is a 4 joke content",
    },
    {
      id: 5,
      title: "This is joke 5",
      content: "This is a 5 joke content",
    },
  ];
  res.send(jokes);
});
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
