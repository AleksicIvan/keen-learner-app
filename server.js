const express = require('express')
const app = express()
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')
const R = require('ramda')

app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req, res) {
  fs.readFile('data.json', 'utf-8', function (err, data) {
    if (err) throw err
    res.send(data)
  })
})

app.put('/update', function (req, res) {
  const id = req.body.id
  const isWatched = req.body.watched

  fs.readFile('data.json', 'utf-8', function (err, videos) {
    if (err) throw err
    let parsedVideos = JSON.parse(videos)
    let idx = parsedVideos.data.findIndex(e => e.id === id)
    let foundElem = parsedVideos.data[idx]
    let newFoundElem = {...foundElem, watched: isWatched}
    let newData = R.update(idx, newFoundElem, parsedVideos.data)
    let strigifiedNewData = JSON.stringify({
      data: newData
    }, null, ' ')
    fs.writeFile('data.json', strigifiedNewData, (err) => {
      if (err) throw err
      console.log('Finished writing data.json')
    })
    res.send(strigifiedNewData)
  })
})

app.listen(4321, function () {
  console.log('App listening on port 4321!')
})
