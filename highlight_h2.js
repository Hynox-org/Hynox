const fs = require('fs');

let page = fs.readFileSync('app/page.tsx', 'utf8');

const replacements = {
    'Delivering from Coimbatore to the world': 'Delivering from <span style={{ color: "var(--primary)" }}>Coimbatore to the world</span>',
    'Digital Products & Platforms': '<span style={{ color: "var(--primary)" }}>Digital Products</span> & Platforms',
    'Software &amp; Digital Services in Coimbatore': '<span style={{ color: "var(--primary)" }}>Software &amp; Digital Services</span> in Coimbatore',
    'Transforming Businesses Across Industries': '<span style={{ color: "var(--primary)" }}>Transforming Businesses</span> Across Industries',
    'Real projects. Real results.': 'Real projects. <span style={{ color: "var(--primary)" }}>Real results.</span>',
    'Businesses that trust us': 'Businesses that <span style={{ color: "var(--primary)" }}>trust us</span>',
    'Software Engineers &amp; Marketers in Coimbatore': '<span style={{ color: "var(--primary)" }}>Software Engineers &amp; Marketers</span> in Coimbatore',
    'Ready to build something?': 'Ready to <span style={{ color: "var(--primary)" }}>build something?</span>'
};

for (const [key, val] of Object.entries(replacements)) {
    page = page.replace(new RegExp(`<h2>${key}</h2>`, 'g'), `<h2>${val}</h2>`);
    // Handle case where h2 has classes
    page = page.replace(new RegExp(`(<h2[^>]*>)${key}(</h2>)`, 'g'), `$1${val}$2`);
}

// Ensure the H1 hero uses var(--primary) just to consolidate
page = page.replace(/color: "#087F5B"/g, 'color: "var(--primary)"');

fs.writeFileSync('app/page.tsx', page);
console.log('Done highlighting h2 tags');
