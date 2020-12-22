const request = require('request')

const forecast = (latitude, longitude, callback) => {
const url ='http://api.weatherstack.com/current?access_key=f34782415596a919b5cd186041e3c1c0&query='+ latitude + ',' + longitude + '&units=m'
request({ url, json: true }, (error, { body }) => {
        if (error) {
        callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
        callback('Unable to find location! Try a different search.', undefined)
        } else  {
        callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees celsius out. It feels like " + body.current.feelslike + " degrees out.")
        }
    })
}

module.exports = forecast