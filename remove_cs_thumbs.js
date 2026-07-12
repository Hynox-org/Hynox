const fs = require('fs');

const file1 = 'c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/case-studies/[slug]/page.tsx';
let content1 = fs.readFileSync(file1, 'utf8');

// The block to remove is:
// <div style={{ height: '140px', position: 'relative' }}>
//   <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
// </div>

const regex1 = /<div style=\{\{\s*height:\s*'140px',\s*position:\s*'relative'\s*\}\}>\s*<img src=\{cs\.image\} alt=\{cs\.title\} style=\{\{\s*width:\s*'100%',\s*height:\s*'100%',\s*objectFit:\s*'cover'\s*\}\}\s*\/>\s*<\/div>/g;

content1 = content1.replace(regex1, '');
fs.writeFileSync(file1, content1, 'utf8');
console.log('Updated', file1);

const file2 = 'c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/case-studies/page.tsx';
let content2 = fs.readFileSync(file2, 'utf8');

// The block to remove is:
// {/* Image */}
// <div style={{ 
//   height: '160px', 
//   borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
//   position: 'relative',
//   flexShrink: 0,
//   overflow: 'hidden'
// }}>
//   <img src={cs.image} alt={cs.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
// </div>

const regex2 = /\{\/\*\s*Image\s*\*\/\}\s*<div style=\{\{\s*height:\s*'160px',\s*borderBottom:\s*'1px solid rgba\(255, 255, 255, 0\.05\)',\s*position:\s*'relative',\s*flexShrink:\s*0,\s*overflow:\s*'hidden'\s*\}\}>\s*<img src=\{cs\.image\} alt=\{cs\.title\} style=\{\{\s*width:\s*'100%',\s*height:\s*'100%',\s*objectFit:\s*'cover'\s*\}\}\s*\/>\s*<\/div>/g;

content2 = content2.replace(regex2, '');
fs.writeFileSync(file2, content2, 'utf8');
console.log('Updated', file2);
