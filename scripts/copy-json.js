const getPluginJson = require('./get-plugin-json.js')

const fs = require('fs')
const path = require('path')
const util = require('util');
const copyFilePromisified = util.promisify(fs.copyFile)

const pJson = getPluginJson()

const configPath = path.resolve(process.cwd(), 'src', 'config')
const outputPath = path.resolve(process.cwd(), 'dist', `${pJson.author}.${pJson.name}`)

const FileHound = require('filehound');

FileHound.create()
  .paths(configPath)
  .ext('json')
  .find()
  .then((filenames) => {
    console.log('Copied files:')
    console.log(filenames.map(filename => {
      const filenameFragments = filename.split('/')
      return filenameFragments[filenameFragments.length - 1]
    }))
    return Promise.all(
      filenames.map(filename => {
        const fragmented = filename.split('/')
        const name = fragmented[fragmented.length - 1]
        return copyFilePromisified(filename, path.join(outputPath, name))
      })
    )
  })
  .catch((err) => {
    console.log(err)
    console.log('JSON copy operation failed.')
    process.exit(1)
  })
