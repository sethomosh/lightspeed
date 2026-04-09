const fs = require('fs');
const path = require('path');

const directories = ['app', 'components', 'lib', 'content'];

function processFile(filePath) {
    if (!fs.statSync(filePath).isFile()) return;
    if (filePath.endsWith('.js') || filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.mdx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Skip anything involving lightspeednet.vercel.app or lightspeedtechnologies@gmail.com
        // We use negative lookaheads for Lightspeed so it doesn't match lightspeednet or lightspeedtechnologies

        // 1. Lightspeed Technical Services -> Stratum Systems
        content = content.replace(/Lightspeed Technical Services/g, 'Stratum Systems');
        
        // 2. Lightspeed Technologies -> Stratum Systems
        content = content.replace(/Lightspeed Technologies/g, 'Stratum Systems');
        
        // 3. LIGHTSPEED -> STRATUM
        content = content.replace(/LIGHTSPEED/g, 'STRATUM');
        
        // 4. Lightspeed -> Stratum (only when not followed by net.vercel.app or technologies@gmail.com)
        // using negative lookahead for "net" and "technologies"
        content = content.replace(/Lightspeed(?!net|technologies| is based in)/g, 'Stratum');
        content = content.replace(/lightspeed(?!net|technologies)/g, 'stratum'); // For lowercase standalone mentions like "@lightspeed" to "@stratum"


        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated:', filePath);
        }
    }
}

function traverse(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (file === 'node_modules' || file === '.git' || file === '.next') continue;
            traverse(fullPath);
        } else {
            processFile(fullPath);
        }
    }
}

directories.forEach(dir => {
    traverse(path.join(__dirname, dir));
});
