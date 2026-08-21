import sharp from "sharp";
import { mkdirSync, statSync, existsSync } from "fs";

const SRC = "photos/Products";
const OUT = "public/images/products";
mkdirSync(OUT, { recursive: true });

const categories = [
  {
    dir: "01 Soccer/SHIRT/SHIRT Color Change/Sublimatiom logo jpg",
    slug: "soccer",
    images: ["02 Front.jpg", "03 Front.jpg", "04 Front.jpg", "05 Front.jpg", "06 Front.jpg", "07 Front.jpg", "08 Front.jpg", "09 Front.jpg"],
  },
  {
    dir: "01 Soccer/Full/Full Color change/JPGE Files",
    slug: "soccer-full",
    images: ["01 Front.jpg", "02 Front.jpg", "03 Front.jpg", "04 Front.jpg", "05 Front.jpg", "06 Front.jpg"],
  },
  {
    dir: "Baskitball/Sublimation Logo Jpg",
    slug: "basketball",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"],
  },
  {
    dir: "front back B/Sublimation Logo JPG",
    slug: "baseball",
    images: ["01 Front.jpg", "02 Front.jpg", "03 Front.jpg", "04 Front.jpg", "05 Front.jpg", "06 Front.jpg", "07 Front.jpg", "08 Front.jpg"],
  },
  {
    dir: "Cricket Uniform/Sublimation Logo JPG",
    slug: "cricket",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"],
  },
  {
    dir: "Cricket Uniform/Cricket Uniform Color Change/Sublimation Logo JPG",
    slug: "cricket-alt",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"],
  },
  {
    dir: "duffel bag/Sublimation Logo Jpg",
    slug: "duffel",
    images: ["c 03.jpg", "c 04.jpg", "a-06.jpg", "a-07.jpg", "c 09.jpg"],
  },
  {
    dir: "duffel bag/Colors Change/Sublimation Logo JPG",
    slug: "duffel-alt",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg"],
  },
  {
    dir: "Hoodies/Sublimation Logo jpg",
    slug: "hoodies",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "010.jpg", "011.jpg", "012.jpg", "013.jpg", "014.jpg"],
  },
  {
    dir: "Hoodies/Hoodies Color Change/Sublimation Logo Jpg",
    slug: "hoodies-alt",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "010.jpg", "011.jpg", "012.jpg", "014.jpg", "016.jpg"],
  },
  {
    dir: "Ice Hocky/Sublimation Logo jpg",
    slug: "ice-hockey",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "010.jpg"],
  },
  {
    dir: "Ice Hocky/JPGE Sublimation Logo",
    slug: "ice-hockey-alt",
    images: ["01 Front.jpg", "02 Front.jpg", "03 Front.jpg", "VENCOVER JERSY Front.jpg", "VENCOVER-JERSY-Front-2.O.jpg"],
  },
  {
    dir: "kraty suit/Sublimatiobn Logo JPG",
    slug: "karate",
    images: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09 .jpg", "1st white.jpg", "2nd new white.jpg", "new black.jpg"],
  },
  {
    dir: "Track Suits/Jpg",
    slug: "track-suit",
    images: ["Front 01.jpg", "Back 01.jpg", "Front 02.jpg"],
  },
];

let count = 0;
for (const cat of categories) {
  for (let i = 0; i < cat.images.length; i++) {
    const srcFile = `${SRC}/${cat.dir}/${cat.images[i]}`;
    const outFile = `${OUT}/${cat.slug}-${i + 1}.webp`;
    if (!existsSync(srcFile)) {
      console.log(`SKIP: ${srcFile}`);
      continue;
    }
    try {
      await sharp(srcFile)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outFile);
      const { size } = statSync(outFile);
      console.log(`${cat.slug}-${i + 1}.webp: ${(size / 1024).toFixed(0)} KB`);
      count++;
    } catch (e) {
      console.error(`ERROR ${srcFile}: ${e.message}`);
    }
  }
}

console.log(`\nDone! ${count} product images created.`);
