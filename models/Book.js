const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookScheme = new Schema({

    title : {
        type : String,
        unique : true
    },
    yazar : String,
    year : String

});

module.exports = mongoose.model('book', BookScheme);