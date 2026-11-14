import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { paginate, partitionEvents, publishedEntries } from '../src/lib/content.js';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('the public entry point mounts the Tyrannosatan app', async () => {
  const html = await read('index.html');
  assert.match(html, /<title>Tyrannosatan<\/title>/);
  assert.match(html, /<div id="app"><\/div>/);
});

test('content helpers sort, partition, and paginate without timezone drift', () => {
  const entries = [
    { date: '2026-09-24', heading: 'future' },
    { date: '2026-09-22', heading: 'older' },
    { date: '2026-09-23', heading: 'today' },
  ];
  const today = new Date(2026, 8, 23, 23, 30);

  assert.deepEqual(publishedEntries(entries, today).map(({ heading }) => heading), ['today', 'older']);
  assert.deepEqual(partitionEvents(entries, today).upcoming.map(({ heading }) => heading), ['today', 'future']);
  assert.deepEqual(paginate(entries, 99, 2), { items: [entries[2]], page: 1, pageCount: 2 });
});

test('the core pages remain registered', async () => {
  const routes = await read('src/router.js');
  for (const path of ['/', '/discography', '/discography/:slug', '/about', '/tour', '/merch']) {
    assert.match(routes, new RegExp(`path:\\s*['"]${path}['"]`), `missing route ${path}`);
  }
  assert.match(routes, /path:\s*['"]\/news['"],\s*redirect:\s*['"]\/discography['"]/);
  assert.match(routes, /:\s*pathMatch\(\.\*\)\*/);
});

test('the rituals page includes the recent festival history', async () => {
  const tour = await read('src/tour/Tour.vue');
  const header = await read('src/components/Header.vue');

  assert.match(tour, /Upcoming Rituals/);
  assert.match(tour, /Past Rituals/);
  assert.match(header, />Rituals<\/v-link>/);
  for (const [date, festival] of [
    ['2026-05-28', 'Muskelrock'],
    ['2025-11-28', 'The Abyss Festival'],
    ['2025-07-11', 'Metal Magic Festival'],
  ]) {
    assert.match(tour, new RegExp(`date: ['"]${date}['"][\\s\\S]*?comment: ['"]${festival}['"]`));
  }
  assert.doesNotMatch(tour, /Dronningepladsen/);
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

test('the homepage and about page divide the cemetery band photos', async () => {
  const home = await read('src/home/Home.vue');
  const about = await read('src/pages/About.vue');
  assert.match(home, /tyrannosatan-cemetery-portrait\.jpg/);
  assert.doesNotMatch(about, /tyrannosatan-cemetery-portrait\.jpg/);
  assert.match(about, /tyrannosatan-cemetery-band\.jpg/);
  assert.doesNotMatch(about, /Tyrannosatan_Band\.jpg/);
});

test('the discography exposes all three release pages', async () => {
  const header = await read('src/components/Header.vue');
  const data = await read('src/discography/releases.js');
  const index = await read('src/discography/Discography.vue');
  const detail = await read('src/discography/Release.vue');

  assert.match(header, />Discography<\/v-link>/);
  assert.doesNotMatch(header, />News<\/v-link>/);
  for (const slug of ['babylons-skrack', 'katakombernas-kakofoni', 'triumvirat']) {
    assert.match(data, new RegExp(`slug: ['"]${slug}['"]`));
  }
  assert.match(index, /release-grid/);
  assert.match(detail, /Tracklist/);
  assert.match(detail, /Lineup/);
});
