const fs = require('fs');
const path = require('path');

// The tech marquee CSS
const marqueeCSS = `
/* ─── TECH MARQUEE ─── */
.tech-marquee-section {
  background: #050505; /* very dark */
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  position: relative;
}

.tech-marquee-container {
  display: flex;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
}

.tech-marquee-content {
  display: flex;
  animation: scroll-left 25s linear infinite;
}

.tech-marquee-content:hover {
  animation-play-state: paused;
}

.tech-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  margin: 0 1rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.tech-badge:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
}

@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (max-width: 640px) {
  .tech-marquee-section {
    padding: 1.5rem 0;
  }
  .tech-badge {
    padding: 0.6rem 1.25rem;
    font-size: 0.85rem;
  }
}
`;

// Append CSS to globals.css
const globalsPath = 'c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/globals.css';
let globalsContent = fs.readFileSync(globalsPath, 'utf8');
if (!globalsContent.includes('tech-marquee-section')) {
  fs.writeFileSync(globalsPath, globalsContent + '\n' + marqueeCSS);
  console.log('Appended marquee CSS to globals.css');
}

// Data for each service
const techData = {
  'website-development': ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'PostgreSQL'],
  'mobile-apps': ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'iOS', 'Android'],
  'erp-software': ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'React'],
  'ai-solutions': ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'AWS', 'Hugging Face'],
  'end-to-end-ecommerce': ['Shopify', 'React', 'Next.js', 'Node.js', 'Stripe', 'AWS', 'Vercel'],
  'shopify-stores': ['Shopify Plus', 'Liquid', 'React', 'Klaviyo', 'Gorgias', 'Recharge'],
  'social-media-marketing': ['Instagram Reels', 'TikTok', 'YouTube Shorts', 'LinkedIn', 'X (Twitter)', 'Pinterest'],
  'performance-marketing': ['Google Ads', 'Meta Ads', 'Google Analytics 4', 'TikTok Ads', 'Looker Studio', 'Mailchimp'],
  'ugc-video-creation': ['TikTok', 'Instagram', 'YouTube', 'CapCut', 'Premiere Pro', 'After Effects']
};

const serviceDir = 'c:/Users/keert/OneDrive/Desktop/Hynox-site/hynox/app/services';

Object.keys(techData).forEach(serviceName => {
  const pagePath = path.join(serviceDir, serviceName, 'page.tsx');
  if (!fs.existsSync(pagePath)) {
    console.log('Skipping ' + serviceName + ' - file not found.');
    return;
  }
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  // Skip if already has marquee
  if (content.includes('tech-marquee-section')) {
    console.log('Already has marquee: ' + serviceName);
    return;
  }
  
  // Find where Hero ends. It usually ends with </section> then a newline.
  const heroEndRegex = /\{\/\*\s*─── 1\. HERO ───\s*\*\/\}[^]+?<\/section>/;
  const match = content.match(heroEndRegex);
  
  if (match) {
    const techs = techData[serviceName];
    // We duplicate the array to make seamless scrolling
    const duplicatedTechs = [...techs, ...techs, ...techs, ...techs];
    
    let marqueeJSX = `

        {/* ─── TECHNOLOGY MARQUEE ─── */}
        <section className="tech-marquee-section">
          <div className="tech-marquee-container">
            <div className="tech-marquee-content">
              {${JSON.stringify(duplicatedTechs)}.map((tech, i) => (
                <div key={i} className="tech-badge">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>`;
        
    const indexToInsert = match.index + match[0].length;
    content = content.substring(0, indexToInsert) + marqueeJSX + content.substring(indexToInsert);
    
    fs.writeFileSync(pagePath, content);
    console.log('Injected marquee into ' + serviceName);
  } else {
    console.log('Could not find Hero section in ' + serviceName);
  }
});
