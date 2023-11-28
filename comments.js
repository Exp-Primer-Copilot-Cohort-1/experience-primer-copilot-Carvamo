//Create web server
var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');
var passport = require('passport');
var User = require('../models/user');

//Create a comment
router.post('/create', passport.authenticate('jwt', { session: false }), function(req, res, next) {
    var comment = new Comment({
        content: req.body.content});
    });