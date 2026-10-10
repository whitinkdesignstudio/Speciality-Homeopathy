const fs = require('fs');
const path = require('path');

const targets = ['app', 'components', 'lib'];
const problematic = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      walk(full);
    } else if (/\.(tsx|ts|jsx|js)$/.test(e.name)) {
      let content = fs.readFileSync(full, 'utf8');
      if (content.includes('"“') || content.includes('“') || content.includes('”') || content.includes('–') || content.includes('—')) {
        problematic.push(full);
        // Replace "“ or curly quotes with normal clean characters
        let updated = content.replace(/"“\s*/g, '- ');
        updated = updated.replace(/“/g, '"');
        updated = updated.replace(/”/g, '"');
        if (updated !== content) {
          fs.writeFileSync(full, updated, 'utf8');
          console.log('Fixed quotes/dashes in:', full);
        }
      }
    }
  }
}

targets.forEach(t => walk(path.join(__dirname, '..', t)));
console.log('Checked all files for quotes/dashes.');
