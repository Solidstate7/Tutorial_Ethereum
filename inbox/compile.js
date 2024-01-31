const path = require('path');
// cross-platform apporach, works both in Mac and Windows etc.
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf-8');

// console.log(solc.compile(source, 1));

module.exports = solc.compile(source, 1).contracts[':Inbox'];
