const express = require('express'),
	app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	)
	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
	next()
})

require('../routes')(app)

module.exports = app
