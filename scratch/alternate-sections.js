const fs = require('fs');

function alternateSections(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  let sectionIndex = 0;
  const sectionRegex = /<section\s+className="(svc-section(?:\s+svc-section-alt)?(?:[^"]*)?)"/g;
  
  content = content.replace(sectionRegex, (match, classNames) => {
    let newClass = sectionIndex % 2 === 0 ? 'svc-section svc-section-alt' : 'svc-section';
    sectionIndex++;
    return `<section className="${newClass}"`;
  });
  
  fs.writeFileSync(filePath, content);
  console.log('Alternated sections in ' + filePath);
}

alternateSections('c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/services/performance-marketing/page.tsx');
