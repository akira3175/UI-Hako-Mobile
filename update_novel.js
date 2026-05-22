const fs = require('fs');
let content = fs.readFileSync('novel.js', 'utf8');

// Thêm artist và anotherName ngay sau author
content = content.replace(/author:\s*(.*?),/g, 'author: $1,\n    artist: "Chưa cập nhật",\n    anotherName: "Không có",');

fs.writeFileSync('novel.js', content);
console.log("Updated novel.js");
