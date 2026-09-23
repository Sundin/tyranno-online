const { randomUUID } = require('node:crypto');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const {
  DynamoDBDocumentClient,
  PutCommand,
  QueryCommand,
} = require('@aws-sdk/lib-dynamodb');

const ddb = DynamoDBDocumentClient.from(new DynamoDBClient({}), {
  marshallOptions: {
    removeUndefinedValues: true,
  },
});

const corsHeaders = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
};

exports.postAnalytics = async function postAnalytics(request) {
  const body = JSON.parse(request.body ?? '{}');
  const events = Array.isArray(body.events)
    ? body.events.map((event) => ({ ...event }))
    : [];
  const { pageLoad } = body;
  const userAgent = request.headers?.['User-Agent']
    ?? request.headers?.['user-agent']
    ?? 'unknown';
  const sessionEnd = Date.now();

  for (let i = 0; i < events.length - 1; i += 1) {
    events[i].duration = events[i + 1].timestamp - events[i].timestamp;
  }

  if (events.length > 0) {
    events[events.length - 1].duration = sessionEnd - events[events.length - 1].timestamp;
  }

  for (const event of events) {
    event.timestamp = formatDateFull(event.timestamp);
  }

  await ddb.send(new PutCommand({
    TableName: process.env.DynamoTableName,
    Item: {
      monthkey: formatDateShort(sessionEnd),
      'timestamp-unique': `${sessionEnd}-${randomUUID()}`,
      events,
      pageLoad,
      browser: userAgent,
      sessionEnd: formatDateFull(sessionEnd),
    },
  }));

  return {
    statusCode: 200,
    headers: corsHeaders,
    body: '',
  };
};

exports.getAnalytics = async function getAnalytics() {
  const data = await ddb.send(new QueryCommand({
    TableName: process.env.DynamoTableName,
    KeyConditionExpression: 'monthkey = :dkey',
    ExpressionAttributeValues: {
      ':dkey': formatDateShort(Date.now()),
    },
  }));

  return {
    statusCode: 200,
    headers: corsHeaders,
    body: JSON.stringify((data.Items ?? []).map((item) => ({
      sessionEnd: item.sessionEnd,
      events: item.events,
      pageLoad: item.pageLoad,
      browser: item.browser,
    }))),
  };
};

function formatDateFull(timestamp) {
  return new Date(timestamp).toISOString();
}

function formatDateShort(timestamp) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}
