import fs from 'fs';
import path from 'path';

const sourceBaseDir = 'd:\\M3 Projects\\FOCUS KUSA Website\\Sources\\FOCUS KUSA Project Album';
const targetBaseDir = 'd:\\M3 Projects\\FOCUS KUSA Website\\public\\assets\\images\\projects';

// Mapping from target project ID to a list of source feature directories
const mapping = {
    'pi-challenge': ['PiChallenge2025'],
    'focus-stride': ['Stride2024', 'AGM2025'],
    'univision-2023': ['UniVision2023'],
    'univision-2024': ['UniVision2024'],
    'univision-2025': ['UniVision2025'],
    'explore-al-2023': ['ExploreAL2023'],
    'explore-al-2024': ['ExploreAL2024'],
    'explore-al-2025': ['ExploreAL2025'],
    'uni-registration': ['UniRegistration2025'],
    'ilm-jaaiz': ['IlmJaaiz2025'],
    'freshers-welcome': ['FreshersWelcome2025'],
    'arduino': ['ArduinoRobotSeminar'],
    'science-seminar': ['ALSeminar'],
    'ol-math-seminar': ['OLSeminar'],
    'brilliant-brushes': ['BrilliantBrushes'],
    'math-classes': ['OLMathsClass'],
    'zero-w': ['ZeroWProject'],
    'path-finder': ['CareerGuidance2022'],
    'greenrise': ['GreenRise'],
    'seeds-of-impact': ['SeedsOfImpact'],
    'flood-donation-2025': ['FloodRelief']
};

const result = {};

if (!fs.existsSync(targetBaseDir)) {
    fs.mkdirSync(targetBaseDir, { recursive: true });
}

for (const [projectId, sourceDirs] of Object.entries(mapping)) {
    const projectTargetDir = path.join(targetBaseDir, projectId);
    if (!fs.existsSync(projectTargetDir)) {
        fs.mkdirSync(projectTargetDir, { recursive: true });
    }

    const imagePaths = [];
    let imageCounter = 1;

    for (const sourceDirName of sourceDirs) {
        const dirPath = path.join(sourceBaseDir, sourceDirName);

        if (fs.existsSync(dirPath)) {
            const files = fs.readdirSync(dirPath);
            // Sort files to keep consistent order if possible
            files.sort();

            for (const file of files) {
                // Only process common image formats
                if (file.toLowerCase().match(/\.(jpg|jpeg|png|webp|gif)$/)) {
                    const ext = path.extname(file);
                    const newName = `${imageCounter}${ext}`;
                    const sourceFilePath = path.join(dirPath, file);
                    const targetFilePath = path.join(projectTargetDir, newName);

                    // Copy file
                    fs.copyFileSync(sourceFilePath, targetFilePath);

                    // Add relative path for HTML/Vite starting with /FOCUS_KUSA_Web/ or just /assets/...
                    // Since we are hardcoding base, let's just use /assets/... because Vite public handles it well, 
                    // but wait, earlier we found GH Pages needed /FOCUS_KUSA_Web/ hardcoded for JS injected strings.
                    // Let's use /FOCUS_KUSA_Web/assets/images/projects/... to be completely safe in GH pages
                    imagePaths.push(`/FOCUS_KUSA_Web/assets/images/projects/${projectId}/${newName}`);
                    imageCounter++;
                }
            }
        } else {
            console.warn(`Source directory not found: ${dirPath}`);
        }
    }

    result[projectId] = imagePaths;
}

console.log('Copy complete. Writing JSON mapping to project_images_map_utf8.json');
fs.writeFileSync('project_images_map_utf8.json', JSON.stringify(result, null, 2), 'utf-8');

