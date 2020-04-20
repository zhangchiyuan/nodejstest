const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const hbs = require('hbs')
const getGeocode = require('./src/utils/geocode')
const getWeather = require('./src/utils/weather')
const viewPath = path.join(__dirname, 'templates/views')
const partialPath = path.join(__dirname, 'templates/partial')
log = console.log
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

app.get('/weather', (req, res) => {
    if(!req.query.address){
        res.send({
            'error': 'please provide a address'
        })
    }
    log(req.query)  
    getGeocode(req.query.address, (error, {latitude, longtitude, location}={})=>{
        if(error){
            res.send({
                error: error
            })
        }
        else{
            getWeather(longtitude, latitude, (error, data)=>{
                if(error){
                    res.send({
                        error: error
                    })
                }
                else{
                    res.send({
                        location: location,
                        weather: data
                    })
                }
            })
        }
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