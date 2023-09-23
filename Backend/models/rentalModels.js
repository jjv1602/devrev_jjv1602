const mongoose = require('mongoose')
const User=require('./userModels');

const rentbSchema=mongoose.Schema({
    book:{type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    rentalDate:{type:Date},
    expiryDate:{type:Date},
})

const Rentb = mongoose.model('User', rentbSchema);
module.exports = Rentb;