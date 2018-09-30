var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
// MONGO
const User = require('../models/Users');

const app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/register' ,(req,res,next) => {
  const { username , password} = req.body;

  const user = new User({
      username,
      password
  });

  const promise = user.save();

  promise.then((data) => {
    res.json(data)
  })
      .catch((err) => {
        res.json(err)
      })
});

router.post('/login', (req,res,next) => {
    const {username, password} = req.body;

    User.findOne({username}, (err,user) => {
        if (err)
            throw err

        if(!user){
            res.json({
                status : false,
                message : 'User Not Found'
            })
        }else {
            const payload = {
                username
            };
            const token = jwt.sign(payload, req.app.get('api_secret'), {expiresIn : 999999999999999});

            res.json({
                status : true,
                token
            })
        }
    })
});



module.exports = router;
