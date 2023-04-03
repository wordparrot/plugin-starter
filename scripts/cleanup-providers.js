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

return Promise.all(
  filenames.map((filename) => {
    return unlinkPromisified(filename);
  })
)
  .then(() => {
    return FileHound.create()
      .glob(['*.formconfig.js'])
      .find()
      .then((formConfigFilenames) => {
        return Promise.all(
          formConfigFilenames.map((filename) => {
            return unlinkPromisified(filename);
          })
        );
      });
  })
  .then(() => {
    console.log('extraneous js files deleted.');
  })
  .catch(() => {
    console.log('Cleanup providers: One or more providers files was not found.');
  });
