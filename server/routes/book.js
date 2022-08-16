const bookController = require("../controllers/bookController");

const router = require("express").Router();

//add book

router.post("/", bookController.addBook);
router.get("/",bookController.getAllBook);
router.get("/:id", bookController.getABook);
router.put("/:id", bookController.updateABook);
router.delete("/:id", bookController.deleteBook);

module.exports = router;
