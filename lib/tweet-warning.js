const Twit = require('twit')
const twitter = new Twit({
  consumer_key: process.env.consumer_key || 'consumer_key',
  consumer_secret: process.env.consumer_secret || 'consumer_secret',
  access_token: process.env.access_token || 'access_token',
  access_token_secret: process.env.access_token_secret || 'access_token_secret'
})

module.exports = message => {
  return new Promise((resolve, reject) => {
    twitter.post('statuses/update', { status: message }, (error, data, response) => {
      if (error) {
        console.error(error)
        return reject(error)
      } else {
        return resolve(response)
      }
    })
  })
}
