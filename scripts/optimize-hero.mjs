import sharp from "sharp";
import { mkdirSync, statSync, writeFileSync } from "fs";

const SRC = "photos/Hero.png";
const OUT_DIR = "public/images";
const sizes = [
  { name: "hero.webp", width: 1600, quality: 80 },
  { name: "hero-800.webp", width: 800, quality: 78 },
];

mkdirSync(OUT_DIR, { recursive: true });

for (const { name, width, quality } of sizes) {
  await sharp(SRC)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(`${OUT_DIR}/${name}`);
  const { size } = statSync(`${OUT_DIR}/${name}`);
  console.log(`${name}: ${(size / 1024).toFixed(0)} KB`);
}

const buf = await sharp(SRC).resize({ width: 24 }).webp({ quality: 40 }).toBuffer();
writeFileSync(`${OUT_DIR}/hero-blur.txt`, buf.toString("base64"));
console.log("blur placeholder written");