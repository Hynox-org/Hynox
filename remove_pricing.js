const fs = require('fs');

const path = 'app/page.tsx';
let content = fs.readFileSync(path, 'utf8');

// Hero section replacement
content = content.replace(
    'We are Shopify partners, supporting projects from ₹40K to ₹40L.',
    'We are Shopify partners.'
);

// Services section replacement
content = content.replace(
    'services supporting projects from ₹40K to ₹40L. Design',
    'services. Design'
);

fs.writeFileSync(path, content);
console.log('Removed pricing text from page.tsx');
