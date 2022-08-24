require("dotenv").config();
const express = require("express");
const spawn = require("child_process").spawn;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("build"));

app.listen(process.env.PORT || 3000);
