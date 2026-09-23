# tyrannosatan-online


The website of [TYRANNOSATAN](https://www.tyrannosatan.se).


The site runs on Vue 3 and Vite 8. Use Node.js 24 LTS locally to match CI and Netlify.

## Project setup
```
npm ci
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run quality checks
```
npm test
npm run lint
npm run build
```

### Preview the production build
```
npm run preview
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

### Build pipelines

Pull requests and pushes to `master` run linting, a production build, and production
dependency audits on Node.js 24. Netlify uses the same Node.js version and publishes
the `dist` directory.

Ready pull requests are squash-merged into `master` automatically after all CI gates
succeed.

### Frontend architecture

Page components live under `src/home`, `src/pages`, and `src/tour`. Shared layout and
navigation components live under `src/layouts` and `src/components`. Date filtering,
event ordering, and pagination are pure functions in `src/lib/content.js` and are
covered by the Node test suite.

Analytics is initialized once from `src/services/analytics.js`, records client-side
route changes, and sends a non-blocking beacon when the page is left. Set
`VITE_ANALYTICS_URL` to use an endpoint other than the production default.


## Backend

### Prerequisites
* Install [aws](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv1.html) or [aws2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) CLI tool.
* Install [sam](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) CLI tool.
* Install Node.js 24.
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
