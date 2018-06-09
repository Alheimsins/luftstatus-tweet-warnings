const getData = require('./lib/get-data')
const tweetWarning = require('./lib/tweet-warning')
const zeroPadding = input => input.toString().length === 1 ? `0${input}` : `${input}`
function createMessage(level, areas) {
  const now = new Date()
  const list = areas.map(area => area.area)
  return `Det er målt ${level} luftforurensning, kl ${zeroPadding(now.getHours())}:${zeroPadding(now.getMinutes())}, i ${list.join(', ')}. https://luftstatus.no `
}

module.exports.handler = async (event, context, callback) => {
  const response = await getData()
  const data = JSON.parse(response.Body.toString('utf-8'))
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
