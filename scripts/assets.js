const fs = require('fs')
const path = require('path')
const getPluginJson = require('./get-plugin-json.js')

const pluginJson = getPluginJson()

const srcPath = path.resolve(process.cwd(), 'public')
const indexPath = path.resolve(process.cwd(), 'dist', 'index.min.js')
const outputPath = path.resolve(process.cwd(), 'dist', pluginJson.name)
const indexOutputPath = path.resolve(process.cwd(), 'dist', pluginJson.name, 'index.min.js')

function copyFileSync( source, target ) {

    var targetFile = target;

    // If target is a directory, a new file with the same name will be created
    if ( fs.existsSync( target ) ) {
        if ( fs.lstatSync( target ).isDirectory() ) {
            targetFile = path.join( target, path.basename( source ) );
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync( source, target ) {
    var files = [];

    // Check if folder needs to be created or integrated
    var targetFolder = path.join( target, path.basename( source ) );
    if ( !fs.existsSync( targetFolder ) ) {
        fs.mkdirSync( targetFolder );
    }

    // Copy
    if ( fs.lstatSync( source ).isDirectory() ) {
        files = fs.readdirSync( source );
        files.forEach( function ( file ) {
            var curSource = path.join( source, file );
            if ( fs.lstatSync( curSource ).isDirectory() ) {
                copyFolderRecursiveSync( curSource, targetFolder );
            } else {
                copyFileSync( curSource, targetFolder );
            }
        } );
    }
}

(async function() {
    try {
        await copyFolderRecursiveSync(srcPath, outputPath)
        console.log('Copied public to dist folder.')
    } catch (e) {
        console.log(e)
    }

    try {
        fs.renameSync(indexPath, indexOutputPath);
        console.log('Copied index.min.js to dist folder.')
    } catch (e) {
        console.log(e)
    }
})()
