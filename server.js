const express = require('express');
var cors = require('cors')

const app = express();
app.use(express.json()); 
app.use(cors())
const router = require('./routes')



app.use(router)

function start(port) {
    app.listen(port, ()=> console.log(`Running on Port ${port}`))
}


module.exports = {
    app: app,
    start: start
}
