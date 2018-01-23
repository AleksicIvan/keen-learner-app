const fs = require('fs')
const uuidv4 = require('uuid/v4')
const level = require('level')

let videoList = []
const db = level('./videolistDb')
const videoExt = /\.(webm|mp4|ogg)$/

fs.readdir(__dirname, function(err, items) {
  if (err) throw err

  videoList = items
    .filter(item => videoExt.test(item))
    .map((v) => {
      return { name: `/${v}`, id: uuidv4(), watched: false }
    })

  let data = {
    data: videoList
  }

  let stringifiedData = JSON.stringify(data, null, ' ')

  db.put('data', stringifiedData, err => {
    if (err) throw err
    console.log('DB update success')
  })
})

