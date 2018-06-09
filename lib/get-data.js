const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports = () => {
    return new Promise((resolve, reject) => {
    const params = {
        Bucket : process.env.bucket,
        Key : 'warnings.json'
    }
    s3.getObject(params, function(error, response) {
      if (error) {
        return reject(error)
      } else {
        return resolve(response)
      }
    })
  })
}
