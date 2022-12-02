const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setTimeout(120000, function () {
        console.log('Request has timed out.')
        res.send(408)
    })

    next()
})
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
        'Access-Control-Allow-Headers',
        'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
    )
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PATCH, PUT, DELETE'
    )
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next()
})
app.get("/api/cnip",async (req,res)=>{
    res.download("../cnip.rsc")
})
module.exports = app