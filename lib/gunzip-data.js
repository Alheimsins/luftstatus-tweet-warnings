const { gunzip } = require('zlib')

module.exports = data => {
  return new Promise((resolve, reject) => {
    gunzip(data, (error, unzipped) => {
      if (error) {
        return reject(error)
      } else {
        return resolve(unzipped)
      }
    })
  })
}
