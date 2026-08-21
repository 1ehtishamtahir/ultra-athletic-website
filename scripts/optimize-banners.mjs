import sharp from "sharp";
import { mkdirSync, statSync } from "fs";

const SRC_DIR = "photos/Banners";
const OUT_DIR = "public/images/banners";

mkdirSync(OUT_DIR, { recursive: true });

for (let i = 1; i <= 5; i++) {
  const name = `banner-${i}.webp`;
  const src = `${SRC_DIR}/${i}.png`;
  const out = `${OUT_DIR}/${name}`;

  await sharp(src).resize({ width: 2000, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out);
  const { size } = statSync(out);
  console.log(`${name}: ${(size / 1024).toFixed(0)} KB`);
}