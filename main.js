const { configureShell } = require('./shell');
const { scriptsDownload } = require('./scripts');

console.log(`starting..`);
scriptsDownload();
console.log(`scripts downloaded..`);
configureShell();
console.log(`configuring shell..`);
console.log(`finished!`);
process.exit(1);