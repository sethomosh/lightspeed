const fs = require('fs');

let content = fs.readFileSync('lib/services-data.ts', 'utf8');
let lines = content.split('\n');

let newLines = lines.map(line => {
    // DO NOT touch slugs
    if (line.includes('slug:')) {
        return line;
    }

    if (line.includes('title:')) {
        let text = line.replace(/ in Nairobi/g, '').replace(/ Nairobi/g, '').replace(/Nairobi /g, '');
        return text;
    }

    if (line.includes('description:')) {
        let text = line.replace(/ in Nairobi/g, '').replace(/ Nairobi/g, '').replace(/Nairobi /g, '');
        // specific fix for "for businesses." instead of "for businesses in Nairobi."
        text = text.replace(/for businesses\./g, 'for businesses.'); 
        return text;
    }

    if (line.includes('bodyContent:')) {
        let text = line.replace(/ Nairobi businesses/g, ' businesses')
                       .replace(/ Nairobi homes/g, ' homes')
                       .replace(/ Nairobi startups/g, ' startups')
                       .replace(/ businesses in Nairobi/g, ' businesses')
                       .replace(/ businesses across Nairobi/g, ' businesses');
        return text;
    }

    return line;
});

fs.writeFileSync('lib/services-data.ts', newLines.join('\n'));
console.log('Nairobi cleaned from services-data.ts');
