import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { prerenderedPages } from '../src/seo/pages.js';

const dist = 'dist';
const template = await readFile(join(dist, 'index.html'), 'utf8');

const escapeHtml = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;');

function replaceRequired(html, pattern, value, label) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find ${label} in ${dist}/index.html`);
  }
  return html.replace(pattern, `$1${escapeHtml(value)}$2`);
}

function renderPage(metadata) {
  let html = template.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(metadata.title)}</title>`,
  );

  html = replaceRequired(html, /(<link rel="canonical" href=")[^"]*(")/, metadata.canonical, 'canonical');
  html = replaceRequired(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, metadata.description, 'description');
  html = replaceRequired(html, /(<meta\s+property="og:title"\s+content=")[^"]*(")/, metadata.title, 'og:title');
  html = replaceRequired(html, /(<meta\s+property="og:description"\s+content=")[^"]*(")/, metadata.description, 'og:description');
  html = replaceRequired(html, /(<meta\s+property="og:url"\s+content=")[^"]*(")/, metadata.canonical, 'og:url');
  html = replaceRequired(html, /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, metadata.title, 'twitter:title');
  html = replaceRequired(html, /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, metadata.description, 'twitter:description');
  html = replaceRequired(html, /(<meta\s+property="og:image"\s+content=")[^"]*(")/, metadata.socialImage, 'og:image');
  html = replaceRequired(html, /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/, metadata.socialImage, 'twitter:image');
  return html;
}

for (const metadata of prerenderedPages) {
  const output = join(dist, metadata.path.slice(1), 'index.html');
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, renderPage(metadata));
}
