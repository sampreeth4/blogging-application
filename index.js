const express = require('express');
const PORT = 8000;
const path = require('path');
const mongoose = require('mongoose');
const userRoute = require("./routers/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extended: false}));

mongoose
    .connect("mongodb://localhost:27017/blogify")
    .then((e) => console.log("MongoDB connected"));

app.get("/", (req,res) => {
    res.render("home");
});

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));