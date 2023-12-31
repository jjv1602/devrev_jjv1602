const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Book=require('./libModels');
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        mob:{
            type: String,
            required: true,
        },
        rented:[{
            book:{type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
            rentalDate:{type:Date},
            expiryDate:{type:Date}}
        ],
        wishlist:[{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}],
    },
    {
        timestamps: true,
    }
);

// userSchema.pre it is mongodb function that is before doing save operation run async function 
userSchema.pre('save', async function (next) {
    //    we need to check whether password is modified egs- user is RAJ he first creates pwd - 1234 but then he changes the password to 4232 so if this is modified then again need to encrypt the password
    // else just pass to next( ) function
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

//Decrypting the password
// it would compare the password
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
    // enteredPassword password entered by user
    // this.password - password in the database stored with email
};
const User = mongoose.model('User', userSchema);
module.exports = User;