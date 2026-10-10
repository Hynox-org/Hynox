const fs = require('fs');

let css = fs.readFileSync('app/globals.css', 'utf8');

// Header.tsx string replacement
let header = fs.readFileSync('app/components/Header.tsx', 'utf8');
header = header.replace(/className="btn btn-outline"/g, 'className="btn btn-primary"');
fs.writeFileSync('app/components/Header.tsx', header);

css += `
/* specific primary buttons */
.btn-primary {
  background: #087F5B !important;
  color: #ffffff !important;
  border: 1px solid #087F5B !important;
  padding: 0.5rem 1.25rem !important;
  border-radius: 4px !important;
}
.btn-primary:hover {
  background: #066649 !important;
  border-color: #066649 !important;
  transform: translateY(-2px);
}
`;

css = css.replace(/\.btn-hero-solid\s*{[^}]+}/g, `.btn-hero-solid {
  background: #087F5B !important;
  color: #ffffff !important;
  border: 1px solid #087F5B !important;
}`);

css = css.replace(/\.cta-btn\.primary\s*{[^}]+}/g, `.cta-btn.primary {
  background-color: #087F5B !important;
  color: #FFFFFF !important;
  border: none !important;
}`);

fs.writeFileSync('app/globals.css', css);
console.log('done updating buttons.');
