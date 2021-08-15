const mongoose = require('mongoose'),
	dbUrl = 'mongodb://localhost/stock-tracker-v-db'

mongoose
	.connect(dbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('> MongoDB connected...'))
	.catch(err => console.log(err))

module.exports = mongoose
