const getGeoCode = require('./utils/geocode')
const getWeather = require('./utils/weather')
const yargs = require('yargs')

// let argv = yargs.demandCommand(1).argv
// let city = argv._[0]

const get_weather = (city) => {
    getGeoCode(city, (error, {longtitude, latitude, location}) => {
        if(error){
            return console.log(error)
        }
        getWeather(longtitude, latitude, (error, data) => {
            if(error){
                return console.log(error)
            }
            console.log(location)
            return data
        })
    })
}


module.exports = get_weather