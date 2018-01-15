const fs = require('fs')
const uuidv4 = require('uuid/v4')

let videoList = []
const videoExt = /\.(webm|mp4|ogg)$/

fs.readdir(__dirname, function(err, items) {
  if (err) throw err

  videoList = items
    .filter(item => videoExt.test(item))
    .map((v) => {
      // TODO: we hardcoded watched here,
      // we are gonna change it as soon as posible
      return { name: `/${v}`, id: uuidv4(), watched: false }
    })

  let data = {
    data: videoList
  }

  let stringifiedData = JSON.stringify(data, null, ' ')

  fs.writeFile('data.json', stringifiedData, (err) => {
    if (err) throw err
    console.log('Finished writing data.json')
  })
})

