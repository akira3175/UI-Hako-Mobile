const https = require('https');

https.get('https://docln.net', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const items = [];
    const titles = [...data.matchAll(/class="series-title">.*?<a href=".*?">(.*?)<\/a>/gs)].map(m => m[1].trim());
    const covers = [...data.matchAll(/class="img-in-ratio".*?data-bg="(.*?)"/gs)].map(m => m[1]);
    
    for(let i=0; i<Math.min(24, titles.length, covers.length); i++) {
      items.push({
        title: titles[i],
        cover: covers[i]
      });
    }
    console.log(JSON.stringify(items, null, 2));
  });
}).on('error', (e) => {
  console.error(e);
});
