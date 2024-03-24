const fs = require('fs');
const path = require('path');

const getPluginJson = require('./get-plugin-json.js');

const pJson = getPluginJson();

const outputPath = path.resolve(process.cwd(), 'dist', `${pJson.author}.${pJson.name}`);

fs.mkdir(outputPath, (err, data) => {
  if (err) {
    return console.error(err);
  }
});

module.exports = getPluginJson;
