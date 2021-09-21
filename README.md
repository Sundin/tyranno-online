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

### Add a news entry & updated RSS feed
Add to [news.json](./src/home/news.json) with the following fields:

* heading
* date
* body

Optional fields:

* image

To generate an updated RSS feed file, make sure you have `jq` installed:

    brew install jq

Then generate the feed:

    cd rss
    ./generate-rss-feed.sh

Make sure to commit the updated `public/feed.xml` file.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Backend

### Prerequisites
* Install [aws](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html) or [aws2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) CLI tool.
* Install [sam](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) CLI tool.
* Make sure the bucket `armory-online` exists.

### Deploy analytics backend

Package and deploy changes:

    cd backend/analytics

    ./deploy.sh

Base URL:

https://5swv4r5tl6.execute-api.eu-west-1.amazonaws.com/Prod/

### Deploy comments backend
Package and deploy changes:

    cd backend/comments

    ./deploy.sh
