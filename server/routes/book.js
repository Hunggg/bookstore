const bookController = require("../controllers/bookController");

const router = require("express").Router();

//add book

router.post("/", bookController.addBook);


module.exports = router;
