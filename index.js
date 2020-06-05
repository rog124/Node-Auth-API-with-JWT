const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//Importing routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//connecting to env file
dotenv.config();

//Lets connect to database

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });

//middleware
app.use(express.json());

//routes Middlewares
app.use("/api/user", authRoute);
app.use("api/posts", postRoute);

app.listen(3000, () => console.log(`Server running on port 3000`));
