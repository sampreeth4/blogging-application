const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = 8000;
const app = express();
const userRoute = require("./routes/user");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017/blogify").then((e) => console.log("MongoDB connected"));

app.get("/", (req,res) => {
    res.render("home")
})

app.use("/user", userRoute);

// app.get("/signup", (req,res) => {
//     return res.render("signup");
// })

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));