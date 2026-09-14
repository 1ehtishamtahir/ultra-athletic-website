import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const width = 1600;
const height = 700;
const red = "#e30613";

function copy(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function overlay({ eyebrow, title, title2, body, cta }) {
  return Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="fade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#050506" stop-opacity=".97"/><stop offset=".55" stop-color="#050506" stop-opacity=".58"/><stop offset="1" stop-color="#050506" stop-opacity=".08"/></linearGradient><linearGradient id="bottom" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050506" stop-opacity="0"/><stop offset="1" stop-color="#050506" stop-opacity=".72"/></linearGradient></defs>
    <rect width="1600" height="700" fill="url(#fade)"/><rect width="1600" height="700" fill="url(#bottom)"/>
    <text x="92" y="122" fill="${red}" font-family="Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="6">${copy(eyebrow)}</text>
    <text x="92" y="245" fill="#ffffff" font-family="Arial, sans-serif" font-size="72" font-weight="900" letter-spacing="-2">${copy(title)}</text>
    <text x="92" y="320" fill="${red}" font-family="Arial, sans-serif" font-size="72" font-weight="900" letter-spacing="-2">${copy(title2)}</text>
    <text x="92" y="390" fill="#d0d0d5" font-family="Arial, sans-serif" font-size="23" font-weight="500" letter-spacing="1">${copy(body)}</text>
    <rect x="92" y="480" width="245" height="58" rx="29" fill="${red}"/><text x="214" y="517" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="2">${copy(cta)}</text>
    <text x="92" y="625" fill="#ffffff" fill-opacity=".55" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="4">GEARIFY PRO  /  EQUIPMENT FOR GREATNESS</text>
  </svg>`);
}

async function build(name, background, text, product) {
  const base = sharp(background).resize(width, height, { fit: "cover", position: "centre" });
  const layers = [{ input: overlay(text), blend: "over" }];
  if (product) {
    layers.unshift({
      input: await sharp(product).resize(720, 700, { fit: "cover", position: "centre" }).png().toBuffer(),
      left: 880,
      top: 0,
      blend: "over",
    });
  }
  await base.composite(layers).webp({ quality: 88 }).toFile(`public/images/banners/${name}.webp`);
}

await mkdir("public/images/banners", { recursive: true });
await build("banner-1", "public/images/gearify-hero-v2.png", { eyebrow: "GEARIFY PRO / CUSTOM TEAMWEAR", title: "BUILT FOR", title2: "GREATNESS.", body: "Performance kits engineered for the moments that matter.", cta: "START YOUR KIT" });
await build("banner-2", "public/images/cards/soccer.webp", { eyebrow: "SOCCER / MATCH-DAY SYSTEMS", title: "OWN THE", title2: "PITCH.", body: "Custom match kits with your colors, crest, and identity.", cta: "SHOP SOCCER" });
await build("banner-3", "public/images/cards/cricket.webp", { eyebrow: "CRICKET / PERFORMANCE FABRIC", title: "PLAY THE", title2: "LONG GAME.", body: "Breathable, quick-dry teamwear made for every spell.", cta: "SHOP CRICKET" });
await build("banner-4", "public/images/cards/baseball.webp", { eyebrow: "ALL-SPORTS / ONE IDENTITY", title: "EQUIPMENT", title2: "FOR GREATNESS.", body: "One team. Every layer. Built to perform in black and red.", cta: "BUILD YOUR KIT" });
