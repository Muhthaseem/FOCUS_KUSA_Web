import fs from 'fs';
import path from 'path';

const emojiMap = {
    '🎓': 'https://img.icons8.com/ios-filled/50/ffffff/graduation-cap.png',
    '🤝': 'https://img.icons8.com/ios-filled/50/ffffff/handshake.png',
    '💡': 'https://img.icons8.com/ios-filled/50/ffffff/idea.png',
    '🏛️': 'https://img.icons8.com/ios-filled/50/ffffff/museum.png',
    '📚': 'https://img.icons8.com/ios-filled/50/ffffff/books.png',
    '🌱': 'https://img.icons8.com/ios-filled/50/ffffff/plant-under-sun.png',
    '👁️': 'https://img.icons8.com/ios-filled/50/ffffff/visible--v1.png',
    '🚀': 'https://img.icons8.com/ios-filled/50/ffffff/rocket.png',
    '💎': 'https://img.icons8.com/ios-filled/50/ffffff/diamond--v1.png',
    '🧭': 'https://img.icons8.com/ios-filled/50/ffffff/compass--v1.png',
    '💻': 'https://img.icons8.com/ios-filled/50/ffffff/laptop.png',
    '➗': 'https://img.icons8.com/ios-filled/50/ffffff/divide.png',
    'π': 'https://img.icons8.com/ios-filled/50/ffffff/pi.png',
    '🎨': 'https://img.icons8.com/ios-filled/50/ffffff/paint-palette.png',
    '🤖': 'https://img.icons8.com/ios-filled/50/ffffff/bot.png',
    '🌍': 'https://img.icons8.com/ios-filled/50/ffffff/globe-earth.png',
    '📅': 'https://img.icons8.com/ios-filled/50/ffffff/calendar--v1.png',
    '📍': 'https://img.icons8.com/ios-filled/50/ffffff/marker.png',
    '📧': 'https://img.icons8.com/ios-filled/50/ffffff/new-post.png',
    '📞': 'https://img.icons8.com/ios-filled/50/ffffff/phone.png',
    '✨': 'https://img.icons8.com/ios-filled/50/ffffff/sparkling.png',
    '📘': 'https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png',
    '📷': 'https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png',
    '💼': 'https://img.icons8.com/ios-filled/50/ffffff/linkedin.png',
    '💬': 'https://img.icons8.com/ios-filled/50/ffffff/whatsapp--v1.png'
};

const dirs = ['.', 'js'];
const filesToProcess = [];

dirs.forEach(d => {
    const fullPath = path.join(process.cwd(), d);
    try {
        fs.readdirSync(fullPath).forEach(f => {
            if (f.endsWith('.html') || (d === 'js' && f.endsWith('.js'))) {
                filesToProcess.push(path.join(fullPath, f));
            }
        });
    } catch (e) {
        console.error(e);
    }
});

filesToProcess.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    let changed = false;

    Object.keys(emojiMap).forEach(emoji => {
        // Escape string for regex if it's special
        const regexStr = emoji.replace(/[.*+?^${}()|[\\]\\\\]/g, '\\\\$&');
        const regex = new RegExp(regexStr, 'g');
        if (content.match(regex)) {
            content = content.replace(regex, '<img src="' + emojiMap[emoji] + '" alt="icon" class="icon-img" />');
            changed = true;
        }
    });

    if (changed) {
        fs.writeFileSync(file, content);
        console.log("Updated", file);
    }
});

// Update CSS
const cssFile = path.join(process.cwd(), 'css', 'style.css');
if (fs.existsSync(cssFile)) {
    let cssContent = fs.readFileSync(cssFile, 'utf-8');
    if (!cssContent.includes('.icon-img')) {
        cssContent += "\n\n/* Custom Icon Image Class */\n.icon-img {\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  vertical-align: -0.125em;\n  object-fit: contain;\n}\n";
        fs.writeFileSync(cssFile, cssContent);
        console.log("Updated style.css");
    }
}

console.log("Emojis replaced successfully!");
