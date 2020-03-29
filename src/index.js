const express = require('express')
const api = express()
const morgan = require('morgan')

//setinng
api.set('port', process.env.PORT || 3000)
api.set('json space', 2)

//middleware
api.use(morgan('dev'))
api.use(express.urlencoded({extended: false}))
api.use(express.json())

//routes
api.use(require('./routes/index'))
api.use('/api/movies', require('./routes/movies'))
api.use('/api/users', require('./routes/users'))

//starting the server
api.listen(api.get('port'), () => console.log(`Servidor na porta ${api.get('port')}`))