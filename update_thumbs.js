const fs = require('fs');
const file = 'c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/case-studies/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "image: '/case-studies/cs_jp.png'",
  "image: '/images/JpApp_works.png'"
);
content = content.replace(
  "image: '/case-studies/cs_kido.png'",
  "image: '/images/kido_care_web.jpg'"
);
content = content.replace(
  "image: '/case-studies/cs_sun.png'",
  "image: '/images/sun_holidays_web.png'"
);

fs.writeFileSync(file, content, 'utf8');
console.log('Images updated in moreCaseStudies!');
