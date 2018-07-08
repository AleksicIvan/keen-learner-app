const fs = require('fs')

const FROM = `${__dirname}/src/js/electron.js`
const TO = `${__dirname}/dist/electron.js`

fs.copyFile(FROM, TO, (err) => {
  if (err) throw err
  console.log('electron.js was copied to /dist/electron.js')
})
