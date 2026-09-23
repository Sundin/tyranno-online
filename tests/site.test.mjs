import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('the public entry point mounts the Tyrannosatan app', async () => {
  const html = await read('public/index.html');
  assert.match(html, /<title>Tyrannosatan<\/title>/);
  assert.match(html, /<div id="app"><\/div>/);
});

test('the core pages remain registered', async () => {
  const routes = await read('src/routes.js');
  for (const path of ['/', '/news', '/about', '/tour', '/merch']) {
    assert.match(routes, new RegExp(`['"]${path}['"]\\s*:`), `missing route ${path}`);
  }
});

test('news entries have valid required fields and dates', async () => {
  const news = JSON.parse(await read('src/home/news.json'));
  assert.ok(news.length > 0);
  for (const [index, entry] of news.entries()) {
    assert.equal(typeof entry.heading, 'string', `entry ${index} heading`);
    assert.equal(typeof entry.body, 'string', `entry ${index} body`);
    assert.match(entry.date, /^\d{4}-\d{2}-\d{2}$/, `entry ${index} date`);
    assert.ok(!Number.isNaN(Date.parse(`${entry.date}T00:00:00Z`)), `entry ${index} date`);
  }
});
