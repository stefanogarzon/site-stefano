// Gera public/og-default.png (1200×630). Rodar: node scripts/og-default.mjs
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#faf9f5"/>
  <rect x="96" y="250" width="64" height="4" fill="#c96442"/>
  <text x="96" y="230" font-family="Georgia, serif" font-size="76" fill="#191919">Stefano Garzon</text>
  <text x="96" y="320" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#555">Pesquisa · Estatística · Computação</text>
  <text x="96" y="540" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#c96442">drstefanogarzon.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
