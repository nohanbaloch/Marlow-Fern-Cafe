const fs = require('fs');
const path = require('path');

const binDir = path.join(__dirname, '..', 'node_modules', '.bin');
if (fs.existsSync(binDir)) {
  fs.readdirSync(binDir).forEach((file) => {
    if (file.endsWith('.cmd')) {
      const filePath = path.join(binDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('SET dp0=%~dp0')) {
        fs.writeFileSync(filePath, content.replace('SET dp0=%~dp0', 'SET "dp0=%~dp0"'));
      }
    }
  });
}
