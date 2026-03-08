import fs from 'fs';
import path from 'path';

const htmlFile = path.join(process.cwd(), 'projects.html');
let html = fs.readFileSync(htmlFile, 'utf8');

// The regex matches data-project="<id>"> and the following <div class="project-card__image">
// Example:
// data-project="seeds-of-impact">
//     <div class="project-card__image">
const regex = /(data-project="([^"]+)">\s*)<div class="project-card__image">/g;

// Replace with background image targeting 1.jpg
html = html.replace(regex, (match, prefix, id) => {
    // Some projects like arduino only have 1 image, but it's guaranteed to have 1.jpg since we just copied them.
    const bgStyle = `background-image: linear-gradient(to bottom, rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.9)), url('./assets/images/projects/${id}/1.jpg'); background-size: cover; background-position: center; position: relative; border-radius: 16px 16px 0 0;`;
    return `${prefix}<div class="project-card__image" style="${bgStyle}">`;
});

// Write it back
fs.writeFileSync(htmlFile, html, 'utf8');
console.log('Successfully injected cover images to project cards');
