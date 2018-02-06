const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const update = require('ramda/src/update')
const level = require('level')
const db = level('./videolistDb')

app.use(cors())
app.use(bodyParser.json())

app.get('/', function (req, res) {
  db.get('data', (err, value) => {
    if (err) throw err
    res.send(value)
  })
})

app.put('/update', function (req, res) {
  const id = req.body.id
  const isWatched = req.body.watched

  db.get('data', (err, videos) => {
    if (err) {
      if (err.notFound) {
        console.log('Resource not found')
        return {data: []}
      }
      throw err
    }

    let parsedVideos = JSON.parse(videos)
    let idx = parsedVideos.data.findIndex(e => e.id === id)
    let foundElem = parsedVideos.data[idx]
    let newFoundElem = {...foundElem, watched: isWatched}
    let newData = update(idx, newFoundElem, parsedVideos.data)
    let strigifiedNewData = JSON.stringify({
      data: newData
    }, null, ' ')

    db.put('data', strigifiedNewData, err => {
      if (err) throw err
      console.log('DB update success')
      res.send(strigifiedNewData)
    })
  })
})

app.listen(4321, function () {
  console.log('App listening on port 4321!')
})
