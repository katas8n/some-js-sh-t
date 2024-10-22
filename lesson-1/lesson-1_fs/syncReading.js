const fs = require('fs');

try {
    const data = fs.readFileSync('text.txt', 'utf-8');

    console.log('[data]', data);

    fs.writeFileSync('text.txt', 'Something else');
    console.log('File has been written!');
} catch (e) {
    console.log(e.message);
}

console.log('There is an important operation!');
