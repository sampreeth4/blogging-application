const express = require('express');
const PORT = 8000;
const mongoose = require('mongoose');


const app = express();

app.set("view engine", "ejs");


app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`));