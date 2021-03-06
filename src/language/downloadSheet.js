const http = require('https')
const path = require('path')
const fs = require('fs')

const URL_SHEET = 'https://docs.google.com/spreadsheets/d/1vAiyOSz33__Z9p2PmjIfjUdUigVeW8UNq5nA-cumuuo/gviz/tq?tqx=out:csv&sheet=0'

module.exports = () => {
  console.log('started download....')
  return new Promise((resolve, reject) => {
    const csvFile = path.resolve(__dirname, 'data.csv')
    const file = fs.createWriteStream(csvFile)
    http.get(URL_SHEET, (response) => {
      response.pipe(file)
      file.on('finish', () => {
        file.close()
        resolve(csvFile)
      })
    })
  })
}