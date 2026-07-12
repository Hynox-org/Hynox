const fs = require('fs');
const path = require('path');

try {
  const cssPath = path.join(__dirname, 'ecom-css.txt');
  const targetPath = path.join(__dirname, 'app', 'services', 'end-to-end-ecommerce', 'styles.css');
  
  // Read UTF-16LE file
  const content = fs.readFileSync(cssPath, 'utf16le');
  
  // Write as UTF-8
  fs.writeFileSync(targetPath, content, 'utf8');
  console.log('Successfully converted ecom-css.txt to styles.css');
} catch (e) {
  console.error('Error:', e);
}
