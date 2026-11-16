import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import test from 'node:test';
import { paginate, partitionEvents, publishedEntries } from '../src/lib/content.js';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('the public entry point mounts the Tyrannosatan app', async () => {
  const html = await read('index.html');
  const socialPreview = await stat(
    new URL('../public/tyrannosatan-social-preview.jpg', import.meta.url),
  );
  assert.match(html, /<title>Tyrannosatan<\/title>/);
  assert.match(html, /<div id="app"><\/div>/);
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.tyrannosatan\.se\/"/);
  assert.match(html, /property="og:title" content="Tyrannosatan — True Metal from Goatenburg"/);
  assert.match(html, /property="og:description"/);
  assert.match(html, /property="og:image"[\s\S]*?tyrannosatan-social-preview\.jpg/);
  assert.match(html, /property="og:image:width" content="4896"/);
  assert.match(html, /property="og:image:height" content="3264"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.match(html, /name="twitter:image"[\s\S]*?tyrannosatan-social-preview\.jpg/);
  assert.ok(socialPreview.size > 100_000);
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
  assert.match(tour, /class="section-kicker">No rituals announced\.<\/p>/);
  assert.doesNotMatch(tour, /Watch this space/);
  assert.match(header, />Rituals<\/v-link>/);
  for (const [date, festival] of [
    ['2026-05-28', 'Muskelrock'],
    ['2026-05-22', 'Muskelrock pre-party with Sandstorm and Tyranis'],
    ['2025-11-28', 'The Abyss Festival'],
    ['2025-07-11', 'Metal Magic Festival'],
  ]) {
    assert.match(tour, new RegExp(`date: ['"]${date}['"][\\s\\S]*?comment: ['"]${festival}['"]`));
  }
  assert.match(
    tour,
    /date: ['"]2026-05-22['"][\s\S]*?location: ['"]The Abyss, Goatenburg['"]/,
  );
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
  assert.match(about, /deadly power trio hailing from Goatenburg, Sweden/);
  assert.match(about, /ancient evil, forbidden magic, cosmic horror and war/);
  assert.match(about, /<h1>Members<\/h1>/);
  assert.match(about, /Nattsvart – Guitars & Hellish Howls/);
  assert.doesNotMatch(about, /G\.G\. Nattsvart/);
  assert.match(about, /Pestgam – Drums of Doom &amp; Gruesome Growls/);
  assert.doesNotMatch(about, /<h1>Lineup<\/h1>/);
  assert.doesNotMatch(about, /plague-ridden island of Hisingen/);
});

test('the discography exposes all three release pages', async () => {
  const header = await read('src/components/Header.vue');
  const data = await read('src/discography/releases.js');
  const index = await read('src/discography/Discography.vue');
  const detail = await read('src/discography/Release.vue');

  assert.match(header, />Releases<\/v-link>/);
  assert.doesNotMatch(header, />Discography<\/v-link>/);
  assert.doesNotMatch(header, />News<\/v-link>/);
  for (const slug of ['babylons-skrack', 'katakombernas-kakofoni', 'triumvirat']) {
    assert.match(data, new RegExp(`slug: ['"]${slug}['"]`));
  }
  assert.match(data, /slug: ['"]triumvirat['"][\s\S]*?formats: ['"]Cassette['"]/);
  assert.doesNotMatch(data, /formats: ['"]Digital['"]/);
  for (const member of [
    'Isfall – Thunder Bass & Sinister Snarling',
    'Nattsvart – Guitars & Hellish Howls',
    'Pestgam – Drums of Doom & Gruesome Growls',
    'Slirhammer – Drums of Doom',
  ]) {
    assert.match(data, new RegExp(member.replaceAll('.', '\\.')));
  }
  assert.doesNotMatch(data, /(?:bass|guitars|drums) & vocals|Slirhammer — drums/i);
  assert.doesNotMatch(data, /G\.G\. Nattsvart/);
  assert.match(data, /A lawless approach to mid-to-late 80’s underground extreme \(and traditional\) heavy metal spiritus\./);
  assert.match(data, /cite: ['"]Mystification Zine['"]/);
  for (const review of [
    ['The album has that feeling of urgency that is simply remarkable.', 'Metal Addicts', 'https://metaladdicts.com/tyrannosatan-babylons-skrack-review/'],
    ["[A] combination of aggressiveness, melodies and very good harmonic structures [...] If you're into Metal, you must be introduced to TYRANNOSATAN's music.", 'Metal Temple', 'https://metal-temple.com/review/tyrannosatan-babylons-skrack/'],
    ['It is not as bad as I originally thought.', 'VM-Underground', 'https://www.vm-underground.com/review/tyrannosatan-babylons-skrack-ep/'],
  ]) {
    for (const value of review) assert.ok(data.includes(value));
  }
  for (const kicker of [
    '2025 · 4 song cassette tape',
    "2022 · Tyrannosatan's ripping debut LP.",
    '2017 · Rehearsal demo',
  ]) {
    assert.match(data, new RegExp(`detailKicker: ['"]${kicker.replace('.', '\\.')}['"]`));
  }
  assert.match(index, /release-grid/);
  assert.match(index, /class="section-kicker">Recorded rituals · 2017–2025<\/p>/);
  assert.doesNotMatch(index, /Three transmissions of howling heavy metal fury/);
  assert.match(detail, /Tracklist/);
  assert.match(detail, /Lineup/);
  assert.match(detail, /class="section-kicker">\{\{ release\.detailKicker \}\}<\/p>/);
  assert.doesNotMatch(detail, /release\.year \}\} · \{\{ release\.kind/);
});

test('the merch page links the first seven Tyrannosatan shop results', async () => {
  const merch = await read('src/pages/Merch.vue');
  const products = await read('src/merch/products.js');
  const layout = await read('src/layouts/Main.vue');

  assert.match(merch, /merch-grid/);
  assert.match(merch, /Jawbreaker Records/);
  assert.match(
    merch,
    /class="section-kicker">Selected artifacts from Jawbreaker Records\.<\/p>/,
  );
  assert.match(layout, /\.section-kicker\s*\{[\s\S]*?color: #9a8f88;/);
  assert.match(layout, /\.section-kicker\s*\{[\s\S]*?text-transform: uppercase;/);

  const productPaths = [
    'tyrannosatan-babylons-skrack-t-shirt',
    'tyrannosatan-patch',
    'tyrannosatan-babylons-skrack-cassette',
    'tyrannosatan-pin',
    'tyrannosatan-logo-t-shirt',
    'tyrannosatan-katakombernas-kakofoni-lp',
    'tyrannosatan-katakombernas-kakofoni-tape',
  ];

  let previousIndex = -1;
  for (const path of productPaths) {
    const index = products.indexOf(path);
    assert.ok(index > previousIndex, `${path} should appear in shop-result order`);
    previousIndex = index;
  }
  assert.doesNotMatch(products, /jawbreaking-news/);
  assert.equal((products.match(/url: `\$\{shopBase\}/g) || []).length, 7);
});


test('build emits static, URL-specific metadata for discography and release pages', async () => {
  const { execFile } = await import('node:child_process');
  const { promisify } = await import('node:util');
  await promisify(execFile)('npm', ['run', 'build'], { cwd: new URL('..', import.meta.url) });

  for (const [path, title, description] of [
    ['/discography', 'Tyrannosatan — Discography', 'Recorded rituals from Tyrannosatan'],
    ['/discography/babylons-skrack', 'Babylons Skräck — Tyrannosatan', 'A venomous strike'],
    ['/discography/katakombernas-kakofoni', 'Katakombernas Kakofoni — Tyrannosatan', 'A furious attack'],
    ['/discography/triumvirat', 'Triumvirat — Tyrannosatan', 'The independent debut demo'],
  ]) {
    const html = await read(`dist${path}/index.html`);
    const url = `https://www.tyrannosatan.se${path}`;

    assert.ok(html.includes(`<title>${title}</title>`), path);
    assert.ok(html.includes(`<link rel="canonical" href="${url}"`), path);
    assert.ok(html.includes(`property="og:url" content="${url}"`), path);
    assert.ok(html.includes(`property="og:title" content="${title}"`), path);
    assert.ok(html.includes(`name="twitter:title" content="${title}"`), path);
    assert.ok(html.includes(description), path);
  }
});