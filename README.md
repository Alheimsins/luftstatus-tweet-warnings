# luftstatus-tweet-warnings

AWS lambda function for tweeting warnings from luftstatus.

It is triggered by an s3 event. Retrieves the file and tweets the warnings.

## Deployment

To create the function on aws first run

```sh
$ npx claudia create --region <your-region> --role <your-role> --no-optional-dependencies
```

### Updating deployment

```sh
$ npm run deploy
```

# License

[MIT](LICENSE)
