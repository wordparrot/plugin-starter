/* eslint-disable */
const fs = require('fs'); // Load the filesystem module
const path = require('path');

const PLUGIN_VALUES = require('../identity');
const getPluginJson = require('./get-plugin-json.js');

const pJson = getPluginJson();

const formJson = require(path.resolve(process.cwd(), 'dist', `${pJson.author}.${pJson.name}`, 'form.json'));

const colorCode = '\x1b[36m%s\x1b[0m';
const red = '\x1b[31m';

console.log(colorCode, '*** BUILD SUCCESSFUL ***');
console.log();

if (formJson.actions.length) {
  console.log(colorCode, `Actions (${formJson.actions.length}):`);

  formJson.actions.forEach((action, index) => {
    console.log(`    ${index + 1}. (${action.provider}) ${action.name}`);
  });
} else {
  console.log(colorCode, `Actions (0)`);
}

console.log('');
console.log('--');
console.log('');

if (formJson.credentials.length) {
  console.log(colorCode, `Credentials (${formJson.credentials.length}):`);

  formJson.credentials.forEach((credential, index) => {
    console.log(`    ${index + 1}. (${credential.provider}) ${credential.name}`);
  });
} else {
  console.log(colorCode, `Credentials (0)`);
}

console.log('');
console.log('--');
console.log('');

if (formJson.listeners.length) {
  console.log(colorCode, `Listeners (${formJson.listeners.length}):`);

  formJson.listeners.forEach((listeners, index) => {
    console.log(`    ${index + 1}. (${listeners.provider}) ${listeners.name}`);
  });
} else {
  console.log(colorCode, `Listeners (0)`);
}

console.log('');
console.log('--');
console.log('');

if (formJson.webhooks.length) {
  console.log(colorCode, `Webhooks (${formJson.webhooks.length}):`);

  formJson.webhooks.forEach((webhook, index) => {
    console.log(`   ${index + 1}. (${webhook.provider}) ${webhook.name}`);
  });
} else {
  console.log(colorCode, `Webhooks (0)`);
}

console.log('');
console.log('--');
console.log('');

console.log(colorCode, 'Plugin name:');
console.log(`${pJson.author}.${pJson.name}`);

// const dirSize = directory => {
//   const files = fs.readdirSync( directory );
//   const stats = files.map( file => fs.statSync( path.join( directory, file ) ) );

//   let size = 0;
//   for ( const stat of stats ) size += stat.size;
//   return size;
// };

// const fileSizeInBytes = dirSize('dist');

// console.log(fileSizeInBytes)

// // Convert the file size to megabytes (optional)
// const fileSizeInKilobytes = fileSizeInBytes / (1024 ** 2);

// console.log();
// console.log(colorCode, 'Plugin size:');
// console.log(`${fileSizeInKilobytes} KB`);

console.log();
console.log(colorCode, 'Exporting version:');
console.log(pJson.version);

console.log('');

if (pJson.name !== PLUGIN_VALUES.PLUGIN_NAME) {
  console.log(red, 'WARNING: plugin name in plugin.json does not match name in identity file!');
} else if (pJson.author !== PLUGIN_VALUES.PLUGIN_AUTHOR) {
  console.log(red, 'WARNING: plugin author in plugin.json does not match author in identity file!');
} else if (PLUGIN_VALUES.PLUGIN_NAME.length < 3 || PLUGIN_VALUES.PLUGIN_AUTHOR.length < 3) {
  console.log(red, 'WARNING: plugin name and author must be set in identity file!');
}

if (!pJson.hubPluginId) {
  console.log(red, 'WARNING: hub plugin ID must be set!');
}
