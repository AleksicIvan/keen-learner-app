const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')
const uuidv4 = require('uuid/v4')

var videoList = []
const videoExt = /\.(webm|mp4|ogg)$/

fs.readdir(__dirname, function(err, items) {
  if (err) {
    return
  }

  videoList = items
    .filter(item => videoExt.test(item))
    .map((v) => {
      return { name: `/${v}`, id: uuidv4(), watched: false }
    })
})

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
