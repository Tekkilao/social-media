const express = require('express');
const app = express();


const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


//routes
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);




dotenv.config()

mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("Connected to MongoDB.");
});






const PORT = process.env.PORT


app.listen(PORT, () => {

    let date = new Date();

    console.log(`Server has been started on port ${PORT} at ${date}.`);

})