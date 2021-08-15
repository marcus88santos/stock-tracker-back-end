const express = require('express')
const routes = express.Router()

const Stock = require('../models/Stock')

//CREATE
routes.post('/', async (req, res) => {
	try {
		const newStock = await Stock.create(req.body)
		if (!newStock)
			return res.status(400).send({ error: "Can't insert the stock" })
		res.status(200).send({ newStock })
	} catch (err) {
		return res.status(400).send({ err })
	}
})

//UPDATE
routes.put('/:stockId', async (req, res) => {
	try {
		const updateStock = await Stock.findByIdAndUpdate(
			req.params.stockId,
			req.body,
			{ new: true }
		)
		res.send('Stock updated')
	} catch (err) {
		return res.status(400).send({ err })
	}
})

//LIST
routes.get('/', async (req, res) => {
	try {
		const stocks = await Stock.find()
		res.send({ stocks })
	} catch (err) {
		return res.status(400).send({ err })
	}
})

//SHOW
routes.get('/:stockId', async (req, res) => {
	try {
		const stock = await Stock.findById(req.params.stockId)
		res.send({ stocks })
	} catch (err) {
		return res.status(400).send({ error: 'Stock not found' })
	}
})

//DELETE
routes.delete('/:stockId', async (req, res) => {
	try {
		await Stock.findByIdAndRemove(req.params.stockId)
		res.send('Stock deleted')
	} catch (err) {
		return res.status(400).send({ error: 'Stock not deleted' })
	}
})

module.exports = app => app.use('/stock', routes)
