const fs = require('fs');

let css = fs.readFileSync('app/globals.css', 'utf8');

// 1. .btn-hero-solid
css = css.replace(/\.btn-hero-solid\s*{[^}]*}/, `.btn-hero-solid {
  background: #087F5B;
  color: #ffffff;
  border: 1px solid #087F5B;
}`);
css = css.replace(/\.btn-hero-solid:hover\s*{[^}]*}/, `.btn-hero-solid:hover {
  background: #066649;
  border-color: #066649;
  transform: translateY(-2px);
}`);

// 2. .cta-btn.primary
css = css.replace(/\.cta-btn\.primary\s*{[^}]*}/, `.cta-btn.primary {
  background-color: #087F5B;
  color: #FFFFFF;
  border: none;
}`);
css = css.replace(/\.cta-btn\.primary:hover\s*{[^}]*}/, `.cta-btn.primary:hover {
  background-color: #066649;
  transform: translateY(-2px);
}`);

// Also .cta-btn default which seems to be white
css = css.replace(/\.cta-btn\s*{\s*display:\s*inline-flex;[^}]*background:\s*#ffffff;[^}]*}/, (match) => {
    return match.replace('background: #ffffff;', 'background: #087F5B;').replace('color: #000000;', 'color: #FFFFFF;');
});
css = css.replace(/\.cta-btn:hover\s*{\s*background:\s*#e5e5e5;[^}]*}/, (match) => {
    return match.replace('background: #e5e5e5;', 'background: #066649;');
});

// 3. .btn-voice-ai (header button)
css = css.replace(/\.btn-voice-ai\s*{[^}]*}/, `.btn-voice-ai {
  background: #087F5B;
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 14px 0 rgba(8, 127, 91, 0.2);
  transition: opacity 0.2s ease, transform 0.2s ease;
}`);

css = css.replace(/\.btn-voice-ai:hover\s*{[^}]*}/, `.btn-voice-ai:hover {
  background: #066649;
  color: #ffffff;
}`);

// 4. .btn-send-message (Contact form button)
css = css.replace(/background:\s*#00b865;/g, 'background: #087F5B;');
css = css.replace(/background-color:\s*#00b865;/g, 'background-color: #087F5B;');

// 5. Hero highlighted words in page.tsx
let page = fs.readFileSync('app/page.tsx', 'utf8');

// The hero heading is:
// Custom Software, Web &amp;<br className="hidden md:block" /> App Development in Coimbatore
page = page.replace(
    'Custom Software, Web &amp;<br className="hidden md:block" /> App Development in Coimbatore',
    '<span style={{ color: "#087F5B" }}>Custom Software</span>, Web &amp;<br className="hidden md:block" /> <span style={{ color: "#087F5B" }}>App Development</span> in Coimbatore'
);

fs.writeFileSync('app/globals.css', css);
fs.writeFileSync('app/page.tsx', page);

console.log('Styles surgically updated.');
