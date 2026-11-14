import babylonsCassette from '../assets/merch-babylons-skrack-cassette.avif';
import babylonsShirt from '../assets/merch-babylons-skrack-tshirt.avif';
import katakombernasLp from '../assets/merch-katakombernas-lp.avif';
import katakombernasTape from '../assets/merch-katakombernas-tape.avif';
import logoShirt from '../assets/merch-logo-tshirt.avif';
import patch from '../assets/merch-patch.avif';
import pin from '../assets/merch-pin.avif';

const shopBase = 'https://www.jawbreaker.se/product/';

export const products = [
  {
    name: 'Babylons Skräck T-Shirt',
    type: 'T-shirt',
    image: babylonsShirt,
    url: `${shopBase}tyrannosatan-babylons-skrack-t-shirt/`,
  },
  {
    name: 'Tyrannosatan Patch',
    type: 'Woven patch',
    image: patch,
    url: `${shopBase}tyrannosatan-patch/`,
  },
  {
    name: 'Babylons Skräck',
    type: 'Cassette',
    image: babylonsCassette,
    url: `${shopBase}tyrannosatan-babylons-skrack-cassette/`,
  },
  {
    name: 'Tyrannosatan Pin',
    type: '25 mm pin',
    image: pin,
    url: `${shopBase}tyrannosatan-pin/`,
  },
  {
    name: 'Tyrannosatan Logo T-Shirt',
    type: 'T-shirt',
    image: logoShirt,
    url: `${shopBase}tyrannosatan-logo-t-shirt/`,
  },
  {
    name: 'Katakombernas Kakofoni',
    type: 'LP',
    image: katakombernasLp,
    url: `${shopBase}tyrannosatan-katakombernas-kakofoni-lp/`,
  },
  {
    name: 'Katakombernas Kakofoni',
    type: 'Cassette',
    image: katakombernasTape,
    url: `${shopBase}tyrannosatan-katakombernas-kakofoni-tape/`,
  },
];
