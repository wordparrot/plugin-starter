/* eslint-disable */

const path = require('path');

const getPluginJson = require('./get-plugin-json.js');

const pJson = getPluginJson();

const formJson = require(path.resolve(process.cwd(), 'dist', `${pJson.author}.${pJson.name}`, 'form.json'));

if (formJson.actions.length) {
  console.log(`Actions (${formJson.actions.length}):`);

  formJson.actions.forEach((action) => {
    console.log(`(${action.provider}) ${action.name}`);
  });
} else {
  console.log(`Actions (0)`);
}

console.log('');
console.log('--');
console.log('');

if (formJson.credentials.length) {
  console.log(`Credentials (${formJson.credentials.length}):`);

  formJson.credentials.forEach((credential) => {
    console.log(`(${credential.provider}) ${credential.name}`);
  });
} else {
  console.log(`Credentials (0)`);
}

console.log('');
console.log('--');
console.log('');

if (formJson.listeners.length) {
  console.log(`Listeners (${formJson.listeners.length}):`);

  formJson.listeners.forEach((listeners) => {
    console.log(`(${listeners.provider}) ${listeners.name}`);
  });
} else {
  console.log(`Listeners (0)`);
}

console.log('');
console.log('--');
console.log('');

if (formJson.listeners.length) {
  console.log(`Webhooks (${formJson.webhooks.length}):`);

  formJson.webhooks.forEach((webhook) => {
    console.log(`(${webhook.provider}) ${webhook.name}`);
  });
} else {
  console.log(`Webhooks (0)`);
}

console.log('');
console.log('--');
console.log('');
