const fs = require('fs')
const path = require('path')

// const Stock = require('../models/Stock')

// routes.post('/stock', async (req, res) => {
// 	try {
// 		const stock = await Stock.create(req.body)
// 		res.send({ stock })
// 	} catch (err) {
// 		return res.status(400).send({ err })
// 	}
// })

module.exports = app => {
	fs.readdirSync(__dirname)
		.filter(file => file.indexOf('.') !== 0 && file !== 'index.js')
		.forEach(file => require(path.resolve(__dirname, file))(app))
}
