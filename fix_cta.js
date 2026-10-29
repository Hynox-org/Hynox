const fs = require('fs');
let p = fs.readFileSync('app/page.tsx', 'utf8');
p = p.replace('<h2>Ready to build something?</h2>', '<h2>Ready to <span style={{ color: "var(--primary)" }}>build something?</span></h2>');
fs.writeFileSync('app/page.tsx', p);
