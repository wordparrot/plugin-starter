const fs = require('fs')
const path = require('path')
const util = require('util');
const unlinkPromisified = util.promisify(fs.unlink)

const configPath = path.resolve(process.cwd(), 'src', 'config')

const FileHound = require('filehound');

FileHound.create()
  .paths(configPath)
  .ext('js')
  .find()
  .then((jsFilenames) => {
    const jsonFilenames = jsFilenames.map(filename => {
      const filenameJson = `${filename.split('.js')[0]}.json`
      const fileOutput = require(filename)?.default || {}
      fs.writeFileSync(filenameJson, JSON.stringify(fileOutput, null, 4), 'utf-8')
      return filenameJson
    })
    return [jsFilenames, jsonFilenames]
  })
  .then(([jsFilenames, jsonFilenames]) => {
    return Promise.all(
      jsFilenames.map(filename => {
        return unlinkPromisified(filename)
      })
    )
  })
  .catch((err) => {
    console.log(err)
    console.log('JS -> JSON conversion operation failed.')
    process.exit(1)
  })
