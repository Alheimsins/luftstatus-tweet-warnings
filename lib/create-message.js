const moment = require('moment')
require('moment-timezone')

module.exports = (level, areas) => {
  const now = moment().tz('Europe/Oslo').format('kk:mm')
  const list = areas.map(area => area.area).map(name => `#${name}`)
  return `${now}: Det er målt ${level} luftforurensning i ${list.join(', ')}. https://luftstatus.no `
}
