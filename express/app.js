//importin all requirements 
const express = require('express')
const app = express()
const connectdb = require('./db/connectdb') //db connection fonction 
const products = require('./routes/routes') //products routes
const NotFound = require('./extra/notfound') //not found handler
const errhandler = require('./extra/errhandler') //err handler
const cors = require('cors')
require('dotenv').config()

// midddelwares 
app.use(express.json())
app.use(cors())
app.use('/api/v1/',products) // link the products routes
//handelers
    app.use(NotFound) //handle wrong route pathes
    app.use(errhandler) //handle server errs
//start the server 
const port = process.env.PORT || 8080
const start = async () => {
    try {
        await connectdb(process.env.MONGO) // connect to db
        app.listen(port , console.log('listenin on port ' + port ))

    }catch(err) {
        console.log(err)
    }
}
start()