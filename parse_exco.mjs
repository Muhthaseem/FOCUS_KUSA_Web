import fs from 'fs';
import path from 'path';

function csvToJson(csvString) {
    const lines = csvString.trim().split('\n');
    if (lines.length === 0) return [];

    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const results = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        let inQuotes = false;
        let currentVal = '';
        const values = [];

        for (let j = 0; j < line.length; j++) {
            const char = line[j];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                values.push(currentVal);
                currentVal = '';
            } else {
                currentVal += char;
            }
        }
        values.push(currentVal);

        const obj = {};
        headers.forEach((header, index) => {
            let key = header.toLowerCase().replace(/[^a-z0-name]/g, '');
            if (key.includes('name')) key = 'name';
            else if (key.includes('position') || key.includes('post') || key.includes('role')) key = 'position';
            else if (key.includes('uni') || key.includes('campus') || key.includes('faculty')) key = 'university';
            else if (key.includes('email') || key.includes('mail')) key = 'email';

            let val = values[index] ? values[index].trim().replace(/^"|"$/g, '') : '';
            if (val === '-' || val === '') val = null;
            obj[key || header] = val;
        });

        if (obj.name) {
            results.push(obj);
        }
    }
    return results;
}

// Build a lookup map of available photos (filename-without-ext lowercase -> web path)
const photoDir = path.join(process.cwd(), 'Sources', 'Exco Photos');
const photoMap = {};
if (fs.existsSync(photoDir)) {
    fs.readdirSync(photoDir).forEach(file => {
        const ext = path.extname(file).toLowerCase();
        if (['.png', '.jpg', '.jpeg', '.webp'].includes(ext)) {
            const baseName = path.basename(file, ext).toLowerCase();
            photoMap[baseName] = `/FOCUS_KUSA_Web/assets/images/exco/${file}`;
        }
    });
}

// Try to match a member's name to a photo file
function findPhoto(memberName) {
    if (!memberName) return null;
    // Split the name into individual words (remove dots from initials)
    const words = memberName.replace(/\./g, ' ').split(/\s+/).map(w => w.trim().toLowerCase()).filter(Boolean);
    for (const word of words) {
        if (photoMap[word]) return photoMap[word];
    }
    return null;
}

const csvDir = path.join(process.cwd(), 'Sources', 'Exco Details');
const outputJsPath = path.join(process.cwd(), 'js', 'boardData.js');

try {
    const files = fs.readdirSync(csvDir).filter(f => f.endsWith('.csv'));
    const allData = {};

    files.forEach(file => {
        const match = file.match(/(\d{4}(?:-\d{2})?)/);
        if (!match) return;

        const year = match[1];
        const filePath = path.join(csvDir, file);
        const csvContent = fs.readFileSync(filePath, 'utf-8');

        const members = csvToJson(csvContent);
        members.forEach(m => {
            m.photo = findPhoto(m.name);
        });

        allData[year] = members;
        console.log(`Parsed ${year}: ${members.length} members`);
    });

    const jsContent = `// Auto-generated from CSV sources\nexport const boardData = ${JSON.stringify(allData, null, 2)};\n`;
    fs.writeFileSync(outputJsPath, jsContent);
    console.log(`Successfully generated ${outputJsPath}`);

} catch (error) {
    console.error("Error parsing CSV:", error);
}
