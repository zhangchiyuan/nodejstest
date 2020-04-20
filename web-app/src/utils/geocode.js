const request = require('request')
const chalk = require('chalk')


const getGeoCode = (address, callback) => {
    const map_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaGFyb2xkZmFyIiwiYSI6ImNrOHExdWpjdTAwcmszaG1peWpwcHAwbTYifQ.NZQen45iAX4dSk9ZIJRUcg&limit=1'
    console.log(chalk.red.inverse(map_url))
    request(
        {
            url: map_url,
            json: true
        },
        (error, {body:data}) => {
            if(error){
                callback('unable to connect', undefined)
            }
            else if (!data.features || data.features.length === 0){

                callback('Unable to find location. Try another one.', undefined)
            }
            else{
                callback(undefined, {
                    latitude: data.features[0].center[0],
                    longtitude: data.features[0].center[1],
                    location: data.features[0].place_name
                })
            }
            
        }
    )
}

module.exports = getGeoCode