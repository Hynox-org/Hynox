const fs = require('fs');
const path = 'c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/case-studies/[slug]/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Center the grid wrapper
content = content.replaceAll(
  `<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center', marginBottom: '1.5rem' }}>`,
  `<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '1.5rem', paddingTop: '2rem' }}>`
);

// 2. Center the title
content = content.replaceAll(
  `<h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>`,
  `<h1 style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>`
);

// 3. Center the description
content = content.replaceAll(
  `<p style={{ fontSize: '1.1rem', color: '#a3a3a3', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '90%' }}>`,
  `<p style={{ fontSize: '1.1rem', color: '#a3a3a3', marginBottom: '2.5rem', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>`
);

// 4. Center the buttons
content = content.replaceAll(
  `<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>`,
  `<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>`
);

// 5. Remove the image blocks
const imgRegex1 = /<AnimatedSection animation="fadeRight" delay=\{200\}>\s*<div style=\{\{\s*width:\s*'100%',\s*paddingBottom:\s*'75%',\s*position:\s*'relative',\s*borderRadius:\s*'12px',\s*overflow:\s*'hidden',\s*boxShadow:\s*'0 20px 40px rgba\(0,0,0,0\.8\)',\s*border:\s*'1px solid rgba\(255,255,255,0\.05\)'\s*\}\}>\s*<img[^>]+>\s*<\/div>\s*<\/AnimatedSection>/g;

const imgRegex2 = /<div style=\{\{\s*position:\s*'relative'\s*\}\}>\s*<div style=\{\{\s*width:\s*'100%',\s*paddingBottom:\s*'75%',\s*position:\s*'relative',\s*borderRadius:\s*'12px',\s*overflow:\s*'hidden',\s*boxShadow:\s*'0 20px 40px rgba\(0,0,0,0\.8\)',\s*border:\s*'1px solid rgba\(255,255,255,0\.05\)'\s*\}\}>\s*<img[^>]+>\s*<\/div>\s*<\/div>/g;

content = content.replace(imgRegex1, '');
content = content.replace(imgRegex2, '');

fs.writeFileSync(path, content, 'utf8');
console.log('Done.');
