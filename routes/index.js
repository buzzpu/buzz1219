var express = require('express');
var router = express.Router();

var db =[];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//Rest Api
router.post('/1/post', function(req, res, next) {
    var title = "";
    var message = "";
    
    
    if( typeof(req.query.title) === "string" && typeof(req.query.title) !== "undefined")
        title = req.query.title;
    
    if( typeof(req.query.message) === "string" && typeof(req.query.message) !== "undefined")
        message = req.query.message;
    
    console.log( "title :" + title + "\n");
    console.log( "message :" + message + "\n");
    
    var article = {
        title : title,
        message: message
    }
    
    db.push(article);
    res.end();
    
});

router.get('/1/post', function(req, res, next) {
    res.json(db)
});



module.exports = router;
