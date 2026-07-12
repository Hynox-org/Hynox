const fs = require('fs');

// File 1
const file1 = 'c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/case-studies/[slug]/page.tsx';
let content1 = fs.readFileSync(file1, 'utf8');

content1 = content1.replaceAll(
  `<div style={{ padding: '1.25rem' }}>`,
  `<div style={{ height: '140px', position: 'relative' }}>\n                      <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />\n                    </div>\n                    <div style={{ padding: '1.25rem' }}>`
);
fs.writeFileSync(file1, content1, 'utf8');
console.log('Restored in file1');

// File 2
const file2 = 'c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/case-studies/page.tsx';
let content2 = fs.readFileSync(file2, 'utf8');

content2 = content2.replaceAll(
  `<div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>`,
  `{/* Image */}\n                <div style={{ \n                  height: '160px', \n                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',\n                  position: 'relative',\n                  flexShrink: 0,\n                  overflow: 'hidden'\n                }}>\n                  <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />\n                </div>\n\n                {/* Content */}\n                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>`
);
fs.writeFileSync(file2, content2, 'utf8');
console.log('Restored in file2');
