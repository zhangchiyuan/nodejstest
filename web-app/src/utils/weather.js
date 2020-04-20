const request = require('request')
const chalk = require('chalk')

const getWeather = (longtitude, latitude, callback) => {
    if (!longtitude || !latitude) {
        callback('coordinates is invalid')
        return
    }
    const url = 'http://api.weatherstack.com/current?access_key=6a20ead55ffe364ace8a2dfa243e7034&query=' + longtitude + ',' + latitude
    console.log(chalk.red.inverse(url))
    request(
        {
            url: url,
            json: true
        },
        (error, { body }) => {
            if (error) {
                callback('connection error', undefined)
            }
            else if (body.error) {
                callback(body.error.info, undefined)
            }
            else {
                data = body.current
                console.log(data)
                callback(undefined, 'Current Weather is ' + data.weather_descriptions.toString() + ' with temperature: ' + data.temperature.toString() + ' and wind speed: ' + data.wind_speed.toString())
                // callback(undefined, {
                //     temperature: data.temperature,
                //     rain: data.precip,
                //     wind_speed: data.wind_speed,
                //     weather: data.weather_descriptions
                // })
            }
        }
    )
}

module.exports = getWeather