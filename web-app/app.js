const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const hbs = require('hbs')
const viewPath = path.join(__dirname, 'templates/views')
const partialPath = path.join(__dirname, 'templates/partial')

app.set('view engine', 'hbs')
app.set('views', viewPath)
app.use(express.static(path.join(__dirname, 'public')))
hbs.registerPartials(partialPath)

app.get('/', (req, res) => {
    res.render('index', {
        title: "Weather",
        name: "Haroldfar"
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Page",
        name: "Haroldfar"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help Page",
        help: "This is the help message"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: "404 Page",
        errorMessage: "Page was not found"
    })
})

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

app.listen(port, ()=>{console.log(`start to listening on port:${port}`)})