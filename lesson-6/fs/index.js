const { parse } = require('csv-parse');
const fs = require('fs');

const results = [];

fs.createReadStream('./kepler_data.csv')
    .pipe(
        parse({
            comment: '#',
            columns: true
        })
    )
    .on('data', chunk => {
        if (chunk['koi_disposition'] === 'CONFIRMED') {
            results.push(chunk);
        }
    })
    .on('error', e => {
        console.log(e.message);
    })
    .on('end', () => {
        console.log('[results]', results);
    });
