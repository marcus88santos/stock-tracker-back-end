const mongoose = require('../config/database')

const StockSchema = new mongoose.Schema(
  {
    type: {
      type: String,
    },
    code: {
      type: String,
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
