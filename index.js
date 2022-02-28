const express = require('express');
//创建路由，监听以/开头的url
const router = express.Router();
const path = require('path');


router.get('/', (req, res, next) =>  res.render( 'page/home') );
router.get('/about', (req, res, next) =>  res.render( 'page/about') );
router.get('/contactMe', (req, res, next) =>  res.render( 'page/contactMe') );
router.get('/project', (req, res, next) =>  res.render( 'page/project') );
router.get('/service', (req, res, next) =>  res.render( 'page/service') );

router.post('/api/sub', (req, res, next) => {
	let data;
	req.on('data', e=> {
		console.log(e.toString('utf8'))
	});
	res.end()
} );

module.exports = router;