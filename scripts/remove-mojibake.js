const fs = require('fs');
const path = require('path');

const targetFiles = [
  'app/intellectual-disability/page.tsx',
  'app/male-infertility/page.tsx',
  'app/hair-falling/page.tsx',
  'app/increase-height/page.tsx',
  'app/speciality-homeopathy-new-delhi/page.tsx',
  'app/speciality-homeopathy-hyderabad/page.tsx',
  'app/speciality-homeopathy-secunderabad/page.tsx',
  'app/speciality-homeopathy-chennai/page.tsx',
  'app/speciality-homeopathy-usa/page.tsx',
  'app/speciality-homeopathy-uk/page.tsx',
  'app/developmental-delays/page.tsx',
  'app/female-infertility/page.tsx',
  'app/oligospermia/page.tsx',
  'app/prolapsed-vertebral-disc/page.tsx',
  'app/recurrent-abortions/page.tsx',
  'app/speciality-homeopathy-bangalore/page.tsx',
  'app/speciality-homeopathy-kolkata/page.tsx'
];

let totalFixed = 0;

for (const relPath of targetFiles) {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) {
    console.log('Skipping (not found):', relPath);
    continue;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  const original = content;

  // 1. Remove the bullet icon wrapper with â—
  // e.g. <span style={{ color: 'var(--teal)' }}>â— </span> or <span style={{ color: 'var(--teal)' }}>â—</span>
  content = content.replace(/<span style=\{\{\s*color:\s*'var\(--teal\)'\s*\}\}>â—\s*<\/span>\s*/g, '');
  content = content.replace(/â—\s*/g, '');

  // 2. Fix CSS content: "âœ“";
  content = content.replace(/content:\s*"âœ“";/g, 'content: "\\\\2713";');

  // 3. Fix decorative comment box lines like /* â”€â”€ LUXURY HERO â”€â”€ */
  content = content.replace(/â”€+/g, '-');

  // 4. Fix apostrophes â€™ and â€˜
  content = content.replace(/â€™/g, "'");
  content = content.replace(/â€˜/g, "'");

  // 5. Fix quotes â€œ and â€
  content = content.replace(/â€œ/g, '"');
  content = content.replace(/â€\x9d/g, '"');
  content = content.replace(/â€/g, '"');

  // 6. Fix em-dash â€” and en-dash â€“
  content = content.replace(/\s*â€”\s*/g, ' - ');
  content = content.replace(/â€”/g, ' - ');
  content = content.replace(/\s*â€“\s*/g, ' - ');
  content = content.replace(/â€“/g, '-');

  // 7. Fix ellipsis â€¦
  content = content.replace(/â€¦/g, '...');

  // 8. Clean up double spaces or clean up comment dashes
  content = content.replace(/\/\*\s*-+\s*([^-]+?)\s*-+\s*\*\//g, '/* $1 */');
  content = content.replace(/\{\/\*\s*-+\s*([^-]+?)\s*-+\s*\*\/}/g, '{/* $1 */}');

  if (content !== original) {
    fs.writeFileSync(fullPath, content, 'utf8');
    totalFixed++;
    console.log(`Cleaned: ${relPath}`);
  } else {
    console.log(`No changes needed: ${relPath}`);
  }
}

console.log(`\nDone! Total files cleaned: ${totalFixed}`);
