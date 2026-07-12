const fs = require('fs');

function movePortfolio(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const startMarker = '{/* ─── 6. PORTFOLIO ─── */}';
  let endMarker = '</section>';
  
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) {
    console.log('Start marker not found in ' + filePath);
    return;
  }
  
  const endIndex = content.indexOf(endMarker, startIndex);
  if (endIndex === -1) {
    console.log('End marker not found in ' + filePath);
    return;
  }
  
  // Also get the closing newline
  const fullEndIndex = endIndex + endMarker.length + 1;
  const portfolioContent = content.substring(startIndex, fullEndIndex);
  
  // Remove portfolio from original place
  content = content.replace(portfolioContent, '\n');
  
  // Find hero section end
  const heroStartMarker = '{/* ─── 1. HERO ─── */}';
  const heroStartIndex = content.indexOf(heroStartMarker);
  const heroEndIndex = content.indexOf(endMarker, heroStartIndex);
  
  const fullHeroEndIndex = heroEndIndex + endMarker.length + 1;
  
  // Insert portfolio right after hero
  content = content.substring(0, fullHeroEndIndex) + 
            '\n        ' + portfolioContent + 
            content.substring(fullHeroEndIndex);
            
  fs.writeFileSync(filePath, content);
  console.log('Moved portfolio successfully in ' + filePath);
}

movePortfolio('c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/services/social-media-marketing/page.tsx');
movePortfolio('c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/services/ugc-video-creation/page.tsx');
