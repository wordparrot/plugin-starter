/* eslint @typescript-eslint/no-var-requires: "off" */

const fs = require('fs');
const util = require('util');
const unlinkPromisified = util.promisify(fs.unlink);

const filenames = [
  './src/actions/providers.js',
  './src/credentials/providers.js',
  './src/listeners/providers.js',
  './src/webhooks/providers.js',
];

return Promise.all(
  filenames.map((filename) => {
    return unlinkPromisified(filename);
  })
).catch(() => {
  console.log('Cleanup providers: One or more providers files was not found.');
});
