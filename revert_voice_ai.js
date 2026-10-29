const fs = require('fs');

let css = fs.readFileSync('app/globals.css', 'utf8');

css = css.replace(/\.btn-voice-ai\s*{[^}]+}/, `.btn-voice-ai {
  background: linear-gradient(135deg, #7928CA 0%, #FF007A 100%);
  color: #ffffff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 14px 0 rgba(121, 40, 202, 0.2);
  transition: opacity 0.2s ease, transform 0.2s ease;
}`);

css = css.replace(/\.btn-voice-ai:hover\s*{[^}]+}/, `.btn-voice-ai:hover {
  opacity: 0.9;
  color: #ffffff;
  transform: translateY(-1px);
}`);

fs.writeFileSync('app/globals.css', css);
console.log('Restored .btn-voice-ai styles to original gradient.');
