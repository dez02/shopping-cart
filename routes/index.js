const express = require('express');
const router = express.Router();
const csrf = require('csurf');
const passport = require('passport');

const Product = require('../models/product');


const csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
	Product.find(function(err, prods){
		let productChunks = [];
		let chunkSize = 3;
		for(let i = 0; i < prods.length; i += chunkSize){
			productChunks.push(prods.slice(i, i + chunkSize));
		}
	  	res.render('shop/index', { message: 'Shopping Cart', products: productChunks });

	});
});

router.get('/user/signin', function(req, res, next){
	let messages = req.flash('error');
	res.render('user/signin',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/user/signin', passport.authenticate('local.signin',{
	successRedirect: '/user/profile',
	failureRedirect: '/user/signin',
	failureFlash: true
}));

router.get('/user/signup', function(req, res, next){
	let messages = req.flash('error');
	res.render('user/signup',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

router.post('/user/signup', passport.authenticate('local.signup',{
	successRedirect: '/user/profile',
	failureRedirect: '/user/signup',
	failureFlash: true
}));

router.get('/user/profile', function(req, res, next){
	res.render('user/profile');
});

module.exports = router;
