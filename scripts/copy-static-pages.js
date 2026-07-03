const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), 'public', 'services');
const targetDir = path.join(process.cwd(), 'out', 'services');

const copyDir = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${srcPath} -> ${destPath}`);
    }
  }
};

if (fs.existsSync(sourceDir)) {
  copyDir(sourceDir, targetDir);
  console.log('Static pages copied to out directory successfully!');
} else {
  console.log('Source directory does not exist. Run generate:pages first.');
}
