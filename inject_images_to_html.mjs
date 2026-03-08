import fs from 'fs';

const htmlPath = 'd:\\M3 Projects\\FOCUS KUSA Website\\projects.html';
const jsonPath = 'd:\\M3 Projects\\FOCUS KUSA Website\\project_images_map_utf8.json';

const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const mappedImages = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

let newHtmlContent = htmlContent;
let matchedCount = 0;

for (const [projectId, imagesArray] of Object.entries(mappedImages)) {
    if (imagesArray && imagesArray.length > 0) {
        // Find the key in the projects object
        const regexStr = '([\\'\\"]?' + projectId + '[\\'\\"]?\\s *: \\s *\\{) ';
            const regex = new RegExp(regexStr, 'g');

            if (regex.test(newHtmlContent)) {
                matchedCount++;
                // Reset regex to replace it
                regex.lastIndex = 0;
                const imagesString = `\n        images: ${JSON.stringify(imagesArray)},\n`;
                newHtmlContent = newHtmlContent.replace(regex, `$1${imagesString}`);
            } else {
                console.log('Failed to match: ' + projectId);
            }
        }
    }

    fs.writeFileSync(htmlPath, newHtmlContent, 'utf8');
    console.log(`Successfully injected images for ${matchedCount} projects`);
