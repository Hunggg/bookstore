const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors")
const morgan = require("morgan");
const authorRoute = require("./server/routes/author");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const bookRoute = require("./server/routes/book")
dotenv.config();

mongoose.connect((process.env.MONGODB_URL), () => {
    console.log("Connected to MongoDB");
})

app.use(bodyParser.json({limit:`${process.env.BODY_PARSER_LIMIT}`}));
app.use(cors());
app.use(morgan("common"));

app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);


app.listen(process.env.PORT, () => {
    console.log(`Server is running ${process.env.PORT}`);
});