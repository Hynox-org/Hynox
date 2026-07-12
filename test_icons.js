const https = require('https');

const slugs = ['adobepremierepro', 'premierepro', 'adobeaftereffects', 'aftereffects', 'adobelightroom', 'lightroom', 'lightroomclassic', 'adobelightroomclassic'];

slugs.forEach(slug => {
  https.get(`https://cdn.simpleicons.org/${slug}`, (res) => {
    console.log(`${slug}: ${res.statusCode}`);
  });
});
