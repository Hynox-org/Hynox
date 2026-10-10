const fs = require('fs');

let f = fs.readFileSync('app/components/FAQ.tsx', 'utf8');
f = f.replace('<h2>Got questions? We have answers.</h2>', '<h2>Got questions? <span style={{ color: "#087F5B" }}>We have answers.</span></h2>');
fs.writeFileSync('app/components/FAQ.tsx', f);
