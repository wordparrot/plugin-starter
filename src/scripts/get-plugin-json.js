const path = require('path');

const getPluginJson = function () {
  const pluginJsonPath = path.resolve(process.cwd(), 'src', 'config', 'plugin.json');

  const pluginJson = require(pluginJsonPath);

  if (!pluginJson?.name) {
    console.log('Cannot get name from plugin.json file. Have you added a plugin name to your plugin.json name field?');
    process.exit(1);
  }

  return pluginJson;
};

module.exports = getPluginJson;
