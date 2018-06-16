const getData = require('./lib/get-data')
const tweetWarning = require('./lib/tweet-warning')
const createMessage = require('./lib/create-message')
const gunzipData = require('./lib/gunzip-data')

module.exports.handler = async (event, context, callback) => {
  const response = await getData()
  const json = gunzipData(response.Body)
  const data = JSON.parse(json.toString('utf-8'))
  let jobs = []
  if (data.high.length > 0) {
    const msg = createMessage('høy', data.high)
    jobs.push(tweetWarning(msg))
  }
  if (data.veryHigh.length > 0) {
    const msg = createMessage('svært høy', data.veryHigh)
    jobs.push(tweetWarning(msg))
  }
  const tweets = await Promise.all(jobs)
  return tweets
}
