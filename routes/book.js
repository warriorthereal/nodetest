var express = require('express');
var router = express.Router();

//MODEL

const Book = require('../models/Book');

/* GET users listing. */
router.get('/new', function(req, res, next) {

    const book = new Book({
        title : "YENIKITAP",
        yazar: "ADSD",
        year : '2000'
    })

    book.save((err,data) => {
        if (err) {
            throw err
        }else {
            res.json(data)
            console.log(data)
        }
    })
});


router.get('/allBooks', (req,res,next) => {

    Book.find((err,data) => {
        res.json(data)
    })
});

router.get('/get_yeni_kitap', (req,res,next) => {
    Book.find({ year : {$gt : 1995 }} , "title", (err,data) => {
        res.json(data)
    } );

});

router.get('/params/:id', (req,res) => {
    res.send(req.params)
})
module.exports = router;
