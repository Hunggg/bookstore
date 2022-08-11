const { Author, Book } = require("../models/model")

const authorController = {
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(200).json(savedAuthor);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAllAuthor: async(req, res) => {
         try {
            const authors = await Author.find();
            res.status(200).json(authors);
         } catch (error) {
            res.status(500).json(error);
         }
    },
    
    getAnAuthor: async(req, res) => {
        try {
            const author = await Author.findById(req.params.id);
            res.status(200).json(author)
        } catch (error) {
            res.status(500).json(error)
        }
    }
};

module.exports = authorController;