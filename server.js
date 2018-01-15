const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')

app.use(cors())
app.get('/', function (req, res) {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err
    res.send(data)
  })
})

app.listen(4321, function () {
  console.log('Example app listening on port 4321!')
})
