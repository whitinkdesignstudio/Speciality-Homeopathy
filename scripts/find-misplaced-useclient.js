const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      checkDir(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const idx = content.indexOf("'use client'");
      if (idx > 50) {
        console.log(fullPath);
      }
    }
  }
}

checkDir(path.join(__dirname, '..', 'app'));
