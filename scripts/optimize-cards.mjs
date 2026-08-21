import sharp from "sharp";
import { mkdirSync, statSync } from "fs";

const SRC_DIR = "photos/Cards";
const OUT_DIR = "public/images/cards";

mkdirSync(OUT_DIR, { recursive: true });

const files = [
  { src: "Soccer - Card.png", out: "soccer.webp" },
  { src: "Cricket - Card.png", out: "cricket.webp" },
  { src: "BasketBall - Card.png", out: "basketball.webp" },
  { src: "BaseBall - Card.png", out: "baseball.webp" },
  { src: "Ice Hockey - Card.png", out: "ice-hockey.webp" },
  { src: "Duffel Bag - Card.png", out: "duffel.webp" },
  { src: "Track Suit - Card.png", out: "track-suit.webp" },
  { src: "Kraty Suit - Card.png", out: "hoodie.webp" },
];

for (const { src, out } of files) {
  await sharp(`${SRC_DIR}/${src}`)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUT_DIR}/${out}`);
  const { size } = statSync(`${OUT_DIR}/${out}`);
  console.log(`${out}: ${(size / 1024).toFixed(0)} KB`);
}