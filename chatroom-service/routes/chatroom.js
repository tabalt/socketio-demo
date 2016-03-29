var express = require('express');
var router = express.Router();

var users = {};

router.get('/', function(req, res, next) {
    var Chatroom = require('../models/chatroom');
    var chatroom = new Chatroom();

    chatroom.select(function(err, result){
        if(err){
            result = []
        }
        console.log(result)
        res.render('chatroom/index', { infoList : result});
    });
});

router.get('/detail', function(req, res, next) {
    var Chatroom = require('../models/chatroom');
    var chatroom = new Chatroom();

    var roomid = req.query.id;

    chatroom.findById(roomid, function(err, result){
        if(err){
            result = {}
        }
        console.log(result)
        res.render('chatroom/detail', { info : result});
    });
});

module.exports = router;
