const fs = require('fs');

let p = fs.readFileSync('app/page.tsx', 'utf8');

// The h2 important words are currently wrapped with <span style={{ color: "var(--primary)" }}>.
// I will change it to explicitly `#087F5B`.
p = p.replace(/var\(--primary\)/g, '#087F5B');

fs.writeFileSync('app/page.tsx', p);

// Update section subtitles to Emerald Green
let css = fs.readFileSync('app/globals.css', 'utf8');
css = css.replace(/\.section-subtitle\s*{[^}]*}/g, `.section-subtitle {
  color: #087F5B;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: block;
}`);

fs.writeFileSync('app/globals.css', css);
console.log('Update finished.');
