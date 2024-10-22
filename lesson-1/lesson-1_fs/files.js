// Async / Sync
const fs = require('fs');

fs.readFile('text.txt', 'utf-8', (err, data) => {
    if (err) return console.error('There is nothing here yet!');

    console.log('[data]', data);
});

fs.writeFile('text.txt', 'There is a content!', err => {
    if (err) return;

    console.log('Has written!');
});
console.log('There is a sync operation!');
