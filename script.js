const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/account');

function renameFilesInDirectory(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.error(`Unable to scan directory: ${err}`);
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);

      if (fs.statSync(filePath).isDirectory()) {
        // Recursively rename files in subdirectories
        renameFilesInDirectory(filePath);
      } else {
        const newFileName = file.replace(/user/g, 'account');
        if (newFileName !== file) {
          const newFilePath = path.join(dir, newFileName);
          fs.rename(filePath, newFilePath, (err) => {
            if (err) {
              console.error(`Error renaming file: ${err}`);
            } else {
              console.log(`Renamed: ${filePath} -> ${newFilePath}`);
            }
          });
        }
      }
    });
  });
}

renameFilesInDirectory(directoryPath);