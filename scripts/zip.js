const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const getPluginJson = require('./get-plugin-json.js');
const pJson = getPluginJson();

const inputPath = path.resolve(process.cwd(), 'dist');
const output = fs.createWriteStream(`${pJson.author}.${pJson.name}.zip`);
const archive = archiver('zip');

output.on('close', function () {
  const colorCode = '\x1b[36m%s\x1b[0m';
  console.log(colorCode, `Plugin Zip File Created:`);
  console.log(archive.pointer() / 1000 + ' KB');
});

archive.on('error', function (err) {
  throw err;
});

archive.pipe(output);

// append files from a sub-directory, putting its contents at the root of archive
archive.directory(inputPath, false);

archive.finalize();
