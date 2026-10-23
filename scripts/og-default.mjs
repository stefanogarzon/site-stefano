// Gera public/og-default.png (1200×630) com o logo horizontal. Rodar: node scripts/og-default.mjs
import sharp from 'sharp';

const logo = await sharp('public/logo/horizontal-cor.svg', { density: 300 }).resize({ width: 880 }).png().toBuffer();
const { height } = await sharp(logo).metadata();

const bg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#f3ede2"/>
  <text x="160" y="420" font-family="Helvetica, Arial, sans-serif" font-size="32" fill="#6b6257">Pesquisa · Estatística · Computação</text>
  <text x="160" y="480" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#c4643f">stefanogarzon.com</text>
</svg>`;

await sharp(Buffer.from(bg))
  .composite([{ input: logo, left: 160, top: Math.round(330 - height) }])
  .png()
  .toFile('public/og-default.png');
