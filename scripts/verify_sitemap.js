const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/sitemap.xml',
    method: 'GET',
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers, null, 2)}`);

    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('\n--- RAW BODY START ---');
        console.log(data.substring(0, 200) + '...');
        console.log('--- RAW BODY END ---');

        if (data.trim().startsWith('<?xml')) {
            console.log('\n✅ SUCCESS: XML Declaration found!');
        } else {
            console.log('\n❌ FAILURE: XML Declaration MISSING!');
        }
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.end();
