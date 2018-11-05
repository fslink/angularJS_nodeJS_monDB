var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var app = express()

app.set('view engine', 'ejs');
// link static files to client
app.use('/', express.static('app'))
app.use('/javascript', express.static(path.join(__dirname + '/app/javascript')))
app.use('/bower_component', express.static(path.join(__dirname + '/app/bower_components')))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.listen(9999, function(){
	console.log('server ok')
})

module.exports = app
