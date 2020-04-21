const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
require("dotenv/config");

//Middleware
app.use(bodyParser.json());


//Import Routes
const postsRoute = require("./routes/post");

app.use("/posts", postsRoute);


//ROUTES
app.get("/", (req, res) => {
    res.send("We are on home")
})

//CONNECT TO DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
    console.log("Connected to DB");
});

app.listen(3000);