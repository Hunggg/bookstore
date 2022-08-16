const { Book, Author } = require("../models/model");


const bookController = {
    addBook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            const savedBook = await newBook.save();
            if (req.body.author) {
                const author = Author.findById(req.body.author);
                await author.updateOne({ $push: { books: savedBook._id } });
            }
            res.status(200).json(savedBook)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllBook: async (req, res) => {
        try {
            const books = await Book.find();
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getABook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateABook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({ $set: req.body });
            res.status(200).json("Update sucessfully");
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteBook: async (req, res) => {
        try {
            await Author.updateMany({ books: req.params.id }, { $pull: { books: req.params.id } });
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted Successfully");
        } catch (error) {
            res.status(500).json(error)  
        }
    }
};

module.exports = bookController;