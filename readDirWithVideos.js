const uuidv4 = require('uuid/v4')
const level = require('level')
const read = require('fs-readdir-recursive')

let videoList = []
const db = level('./videolistDb')
const videoExt = /\.(webm|mp4|ogg)$/


let filz = read(`${__dirname}/videos`) || []

videoList = filz.map((v) => {
  return { name: `/videos/${v}`, id: uuidv4(), watched: false }
}) || []

let data = {
  data: videoList.filter(f => videoExt.test(f.name))
}


let stringifiedData = JSON.stringify(data, null, ' ')

db.put('data', stringifiedData, err => {
  if (err) throw err
  console.log('DB update success')
})
