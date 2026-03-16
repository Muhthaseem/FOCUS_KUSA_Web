/**
 * optimize-images.mjs
 * Compresses all exco headshots and project images in-place.
 * Run with:  node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

// ─── Config ──────────────────────────────────────────────────────────────────

const TARGETS = [
  {
    dir: join(root, 'public/assets/images/exco'),
    resize: { width: 400, height: 400, fit: 'cover' }, // Profile thumbnails
    quality: 80,
  },
  {
    dir: join(root, 'public/assets/images/projects'),
    resize: { width: 1200, withoutEnlargement: true },  // Project images (wide)
    quality: 82,
    recursive: true,
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function* walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkDir(full);
    else yield full;
  }
}

function isImage(file) {
  return ['.jpg', '.jpeg', '.png', '.webp'].includes(extname(file).toLowerCase());
}

function kb(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB';
}

// ─── Main ─────────────────────────────────────────────────────────────────────

let totalSaved = 0;
let totalFiles = 0;

for (const target of TARGETS) {
  const files = [];

  if (target.recursive) {
    for await (const f of walkDir(target.dir)) {
      if (isImage(f)) files.push(f);
    }
  } else {
    const entries = await readdir(target.dir);
    for (const e of entries) {
      const full = join(target.dir, e);
      if (isImage(full)) files.push(full);
    }
  }

  for (const file of files) {
    const before = (await stat(file)).size;

    const ext = extname(file).toLowerCase();
    const isJpeg = ext === '.jpg' || ext === '.jpeg';

    let pipeline = sharp(file).resize(target.resize);
    if (isJpeg) {
      pipeline = pipeline.jpeg({ quality: target.quality, mozjpeg: true });
    } else {
      // Re-save PNGs with compression (no lossy quality option for PNG in sharp)
      pipeline = pipeline.png({ compressionLevel: 9, palette: true });
    }

    await pipeline.toFile(file + '.tmp');

    // Only replace if the new file is actually smaller
    const { rename, unlink } = await import('fs/promises');
    const after = (await stat(file + '.tmp')).size;
    if (after < before) {
      await unlink(file);
      await rename(file + '.tmp', file);
      const saved = before - after;
      totalSaved += saved;
      console.log(`✅ ${basename(file).padEnd(30)} ${kb(before)} → ${kb(after)}  (saved ${kb(saved)})`);
    } else {
      await unlink(file + '.tmp');
      console.log(`⏭  ${basename(file).padEnd(30)} Already optimal (${kb(before)})`);
    }
    totalFiles++;
  }
}

console.log(`\n🎉 Done! Processed ${totalFiles} images. Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
