const express = require("express");
const mongoose = require("mongoose");
const tasks = require("./routes/tasks");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3000;
app.listen(PORT, console.log(`server is running at port ${PORT}`));
