const express = require('express')
const bodyParser = require('body-parser')
const SERVER_PORT = 3000
const data = require("../data/data.json")


const app = express()

app.use(bodyParser.urlencoded())

app.get("/", (req, res) => {
    res.sendFile(data.body)
})


app.listen(SERVER_PORT, (err) => {
    if (err) {
        console.log(err);
    }

})
