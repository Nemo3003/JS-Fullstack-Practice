let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/users/cool', function(req, res, next) {
  res.send('You are so cool');
});

module.exports = router;