const fs = require('fs')
const path = require('path')
const archiver = require('archiver')

const getPluginJson = require('./get-plugin-json.js')
const pJson = getPluginJson()

const inputPath = path.resolve(process.cwd(), 'dist')
const output = fs.createWriteStream(`${pJson.author}.${pJson.name}.zip`);
const archive = archiver('zip');

output.on('close', function () {
  console.log(archive.pointer() + ' total bytes');
  console.log(`${pJson.name}.zip has been created.`);
});

archive.on('error', function(err){
  throw err;
});

archive.pipe(output);

// append files from a sub-directory, putting its contents at the root of archive
archive.directory(inputPath, false);

archive.finalize();
