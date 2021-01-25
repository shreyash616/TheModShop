const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const requestLogger = require('./utilities/requestLogger')
const errorLogger = require('./utilities/errorLogger')

function getLocalIp() {

    const os = require('os');

    for(let addresses of Object.values(os.networkInterfaces())) {
        for(let add of addresses) {
            if(add.address.startsWith('192.168.')) {
                return add.address;
            }
        }
    }
}

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(requestLogger)
app.use(routes)
app.use(errorLogger)

app.listen(3001, getLocalIp().toString())

console.log('server started on port 3001')