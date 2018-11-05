var express = require('express')
var router = express.Router()
var path = require('path')

router.get('/', function(req, res, next){
	res.sendFile(path.join(__dirname + '/../app/ex1.html'))
})

.get('/ex2', function(req, res, next){
	res.sendFile(path.join(__dirname + '/../app/ex2.html'))
})

.get('/ex3', function(req, res, next){
	res.sendFile(path.join(__dirname + '/../app/ex3.html'))
})

module.exports = router