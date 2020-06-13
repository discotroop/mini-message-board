var express = require('express');
var router = express.Router();

// sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard.', messages: messages });
});

router.post('/new', function (req, res, next){
  messages.push({
    text: req.body.author,
    user: req.body.message,
    added: new Date(),
  });
  res.redirect('/')
});

module.exports = router;
