const mongoose = require('mongoose')
const User=require('./userModels');
const bookSchema = mongoose.Schema(
    {
        book_name: {
            type: String,
            required: true,
        },
        book_author: {
            type: String,
            required: true,
        },
        book_genre: {
            type: String,
            required: true,
        },
        publish_date: {
            type: Date,
            required: true,
        },
        total_copies: {
            type:Number,
            required: true,
        },
        rating:{
            type:Number,
            required:true,
        },
        rentedby:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
    },
    {
        timestamps: true,
    }
);

const Book=mongoose.model('Book',bookSchema);
module.exports=Book;