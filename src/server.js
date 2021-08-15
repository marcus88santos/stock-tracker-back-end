var app = require('./config/express'),
	mongoose = require('./config/database')

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`> Server listen on port ${PORT}...`))
