const fs = require('fs')

const FROM = `${__dirname}/src/js/electron.js`
const TO = `${__dirname}/dist/electron.js`

const distExists = fs.existsSync(`${__dirname}/dist`)

if (distExists) {
  fs.copyFile(FROM, TO, (err) => {
    if (err) throw err
    console.log('electron.js was copied to /dist/electron.js')
  })
} else {
  fs.mkdir(`${__dirname}/dist`, {}, err => {
    if (err) throw err
    fs.copyFile(FROM, TO, (err) => {
      if (err) throw err
      console.log('electron.js was copied to /dist/electron.js')
    })
  })
}

