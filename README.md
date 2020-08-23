# armory-online

[![Netlify Status](https://api.netlify.com/api/v1/badges/d48ae8cf-6791-48d7-bace-c2cb06c06780/deploy-status)](https://app.netlify.com/sites/armory417/deploys)

The website of ARMORY.

Visit the page at [www.armory.se](https://www.armory.se).

Currently not compatible with prettier plugin.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint --fix
```

## Maintenance

### Add a new gig
Add to `Tour.vue` with the following fields:

* date
* venue
* location
* link (optional)
* tickets (optional)

### Add a news entry
Add to `Home.vue` with the following fields:

* heading
* date
* body

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Deploy analytics backend
Prerequisites:
* Install [aws](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html) or [aws2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) CLI tool.
* Install [sam](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) CLI tool.
* Make sure the bucket `armory-analytics` exists.

Package and deploy changes:

    cd backend

    sam package \
        --template-file template.yml \
        --output-template-file packaged.yml \
        --s3-bucket armory-analytics \
    && \
    sam deploy \
        --template-file packaged.yml \
        --stack-name armory-analytics \
        --capabilities CAPABILITY_IAM \
        --region eu-west-1

Get the base URL for the API:

    aws cloudformation describe-stacks \
        --stack-name armory-analytics \
        --region eu-west-1 \
        --query 'Stacks[].Outputs'


https://5swv4r5tl6.execute-api.eu-west-1.amazonaws.com/Prod/