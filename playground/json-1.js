const fs = require('fs')
const book = {
    title: "book1",
    authoer: "shakspear"
}

log = console.log

let dataBuffer = fs.readFileSync('json-book1.json')
let data = dataBuffer.toString()
let data_json = JSON.parse(data)
data_json.name = 'harold'
data_json.planet = 'Mars'
data_json.age = 30

data = JSON.stringify(data_json)
fs.writeFileSync('json-book1.json', data)

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('json-book1.json', bookJSON)

// log(bookJSON)

// const parsedDATA = JSON.parse(bookJSON)

// // log(parsedDATA.title)
// const dataBuffer = fs.readFileSync('json-book1.json').toString()
// const data = JSON.parse(dataBuffer)
