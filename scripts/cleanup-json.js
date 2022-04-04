const fs = require('fs')
const path = require('path')
const util = require('util');
const unlinkPromisified = util.promisify(fs.unlink)

const configPath = path.resolve(process.cwd(), 'src', 'config')
const FileHound = require('filehound');

FileHound.create()
  .paths(configPath)
  .ext('json')
  .find()
  .then((filenames) => {
    return Promise.all(
        filenames.map(filename => {
          return unlinkPromisified(filename)
        })
    )
  })
  .catch((err) => {
    console.log(err)
    console.log('JSON cleanup operation failed.')
    process.exit(1)
  })
