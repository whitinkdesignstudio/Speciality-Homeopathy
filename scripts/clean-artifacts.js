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

targetFiles.forEach(rel => {
  const p = path.join(__dirname, '..', rel);
  if (!fs.existsSync(p)) return;
  let s = fs.readFileSync(p, 'utf8');

  // 1. Remove empty <span style={{ color: 'var(--teal)' }}> </span>
  s = s.replace(/<span style=\{\{\s*color:\s*'var\(--teal\)'\s*\}\}>\s*<\/span>\s*/g, '');

  // 2. Fix span"”documented or span"documented
  s = s.replace(/span[^\w\s]*documented/g, 'span - documented');

  // 3. Fix any leftover double quotes around single dashes
  s = s.replace(/"”/g, ' - ');
  s = s.replace(/”/g, '');

  fs.writeFileSync(p, s, 'utf8');
  console.log('Processed:', rel);
});

console.log('Cleaned empty spans and quotes successfully.');
