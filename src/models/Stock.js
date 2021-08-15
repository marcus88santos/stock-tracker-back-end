const mongoose = require('../config/database')

const StockSchema = new mongoose.Schema(
	{
		type: {
			type: String,
		},
		code: {
			type: String,
			uppercase: true,
		},
		targetPriceTax: {
			type: Number,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Stock', StockSchema)
