const getPluginJson = require('./get-plugin-json.js')

const fs = require('fs')
const path = require('path')
const util = require('util');
const copyFilePromisified = util.promisify(fs.copyFile)

const pluginJson = getPluginJson()

const srcPath = path.resolve(process.cwd(), 'src')
const outputPath = path.resolve(process.cwd(), 'dist', pluginJson.name)

const FileHound = require('filehound');

FileHound.create()
  .paths(srcPath)
  .ext('json')
  .find()
  .then((fileNames) => {
    console.log('Copied files:')
    console.log(fileNames)
    return Promise.all(
      fileNames.map(fileName => {
        const fragmented = fileName.split('/')
        const name = fragmented[fragmented.length - 1]
        return copyFilePromisified(fileName, path.join(outputPath, name))
      })
    )
  })
  .then(() => {
    console.log('JSON files in src copied to dist folder.')
  })
  .catch((err) => {
    console.log(err)
    console.log('JSON copy operation failed.')
    process.exit(1)
  })
