[![Build Status](https://travis-ci.com/Alheimsins/luftstatus-tweet-warnings.svg?branch=master)](https://travis-ci.com/Alheimsins/luftstatus-tweet-warnings)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# luftstatus-tweet-warnings

AWS lambda function for tweeting warnings from luftstatus.

It is triggered by an s3 event. Retrieves the file and tweets the warnings.

## Deployment

To create the function on aws first run

```sh
$ npx claudia create --region <your-region> --role <your-role> --no-optional-dependencies
```

Login to your AWS console and add the s3 trigger and setup environment variables

```sh
access_token=your-twitter-access-token
access_token_secret=your-twitter-access-token-secret
consumer_key=your-twitter-consumer-key
consumer_secret=your-twitter-consumer-secret
bucket=bucket-for-warnings-file
warningsFileName=warnings-file-name
```

### Updating deployment

```sh
$ npm run deploy
```

### CI/CD with Travis

Add `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to your Travis environment

# License

[MIT](LICENSE)

## About

Created by [zrrzzt](https://github.com/zrrrzzt) and [maccyber](https://github.com/maccyber) with ❤ for [Alheimsins](https://alheimsins.net)

<img src="https://image.ibb.co/dPH08G/logo_black.png" height="150px" width="150px" />