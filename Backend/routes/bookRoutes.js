const express=require('express');
const { getBooks,getBooksbyindividual,addBook,rent,returns_book }=require('../Controllers/libController');
const { protect } = require('../middlewares/authMiddleware');
const router=express.Router()

// To get all the books
router.route('/').get(protect, getBooks);  

router.route('/ind').get(protect,getBooksbyindividual);

// Adding a new book
router.route('/add').post(protect,addBook);

// Renting a book
router.route('/rent').put(protect,rent);

// Returns a book 
router.route('/returns').put(protect,returns_book);

module.exports=router;