const {Book, Author} = require("../models/model");


const bookController = {
    addBook: async(req, res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if (req.body.author) {
                 const author = Author.findById(req.body.author);
                 await author.updateOne({$push: {books: savedBook._id}});
            }
            res.status(200).json(savedBook)
        } catch (error) {
            res.status(500).json(error)
        }
    }
};

module.exports = bookController;