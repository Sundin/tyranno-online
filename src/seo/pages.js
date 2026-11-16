const siteUrl = 'https://www.tyrannosatan.se';
const socialImage = `${siteUrl}/tyrannosatan-social-preview.jpg`;

const page = (path, title, description) => ({
  path,
  title,
  description,
  canonical: `${siteUrl}${path}`,
  socialImage,
});

// Keep this module free from Vue and imported assets: Node reads it during build.
export const prerenderedPages = [
  page(
    '/discography',
    'Tyrannosatan — Discography',
    'Recorded rituals from Tyrannosatan: Babylons Skräck, Katakombernas Kakofoni and Triumvirat.',
  ),
  page(
    '/discography/babylons-skrack',
    'Babylons Skräck — Tyrannosatan',
    'A venomous strike of heavy, speed, death and black metal—the first Tyrannosatan release with Pestgam behind the drums.',
  ),
  page(
    '/discography/katakombernas-kakofoni',
    'Katakombernas Kakofoni — Tyrannosatan',
    'A furious attack of old-school metal that tears through heavy, black, speed, thrash and early death metal.',
  ),
  page(
    '/discography/triumvirat',
    'Triumvirat — Tyrannosatan',
    'The independent debut demo that introduced the original trio before the band returned to record Katakombernas Kakofoni.',
  ),
];
