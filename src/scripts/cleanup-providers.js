/* eslint @typescript-eslint/no-var-requires: "off" */

const fs = require('fs');
const util = require('util');
const unlinkPromisified = util.promisify(fs.unlink);
const FileHound = require('filehound');

const filenames = [
  './src/actions/providers.js',
  './src/credentials/providers.js',
  './src/listeners/providers.js',
  './src/webhooks/providers.js',
  './src/identity.js',
  './src/register.js',
];

(async () => {
  try {
    await Promise.all(
      filenames.map((filename) => {
        return unlinkPromisified(filename);
      })
    );
    const formConfigFilenames = await FileHound.create().glob('*.formconfig.js').find();
    await Promise.all(
      formConfigFilenames.map((filename) => {
        return unlinkPromisified(filename);
      })
    );
  } catch {
    console.log('Cleanup providers: One or more providers files was not found.');
  }
})();
