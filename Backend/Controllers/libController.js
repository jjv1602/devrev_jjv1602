const expressAsyncHandler = require("express-async-handler");
// const res = require("express/lib/response");
const Book = require("../models/libModels");
const User = require("../models/userModels");

const getBooks = expressAsyncHandler(async (req, res) => {
  // this would display all the books irrespective of user  
  const book = await Book.find().populate('rentedby');
  res.json(book);
});

const getBooksbyindividual = expressAsyncHandler(async (req, res) => {
  try{
    // here in routes protect is there and protect would give user_id
  const book = await User.findById(req.user._id).populate('rented.book');
  res.status(201).json(book);
  }
  catch(error){
    res.status(400).json(error.message);
  }
});

// Add new book in library
const addBook = expressAsyncHandler(async (req, res) => {
  const { book_name, book_author, book_genre, publish_date, poster, total_copies, rating } = req.body;
  const book = new Book({ book_name, book_author, book_genre, publish_date, poster, total_copies, rating });

  await book.save(function (err, book) {
    if (err) { return next(err) }
    res.status(201).json(book);
  });

});

// USER RENTS A BOOK 
const rent = expressAsyncHandler(async (req, res) => {
  try {
    // Taking user_id from jwt token 

    const user_id = req.user._id;
    const { book_id, rentalDate, expiryDate } = req.body;

    // Adding book inside user database
    const user = await User.findById(user_id);
    console.log(user);
    if (!user.rented.find(rental => rental.book.toString() === book_id)) {
      const new_book = {
        book: book_id,
        rentalDate: rentalDate,
        expiryDate: expiryDate
      }
      user.rented.push(new_book);
      await user.save();
    } else {
      console.log("User has already rented");
    }
    // Adding user inside book database
    const book = await Book.findById(book_id);
    console.log(book);
    if (!book.rentedby.includes(user_id)) {
      book.rentedby.push(user_id);
      await book.save();
    } else {
      console.log("User has already rented");
    }
    res.status(201).json("Successful");
  } catch (error) {
    console.error(error.message);
    res.status(400).json(error.message);
  }
});

// USER RETURNS A BOOK 
const returns_book = expressAsyncHandler(async (req, res) => {
  try {
    // Taking user_id from jwt token 
    const user_id = req.user._id;
    const { book_id } = req.body;

    // Removing book from user database
    const user = await User.findById(user_id);
    console.log(user);
    const bookindx = user.rented.findIndex((rent) => rent.book.toString() === book_id);
    if (bookindx == -1) {
      console.log("User already removed");
    }
    else {
      user.rented.splice(bookindx, 1);
      await user.save();
    }

    // Removing user from book database
    const book = await Book.findById(book_id);
    console.log(book_id);
    const userindx = book.rentedby.indexOf(user_id);
    if (userindx !== -1) {
      book.rentedby.splice(userindx, 1);
      await book.save();
    }
    else {
      console.log("User removed from book db");
    }
    res.status(200).json("Successful");
  } catch (error) {
    console.log(error.message);
    res.status(404).json(error.message);
  }
});

module.exports = { getBooks, getBooksbyindividual, addBook, rent, returns_book };