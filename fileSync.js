const path = require('path');
const fs = require('fs');
const { tryCatch } = require('./utils/chain');

const fileRead = (filename, type) => 
    fs.readFileSync(path.resolve(__dirname, filename), type)

module.exports = (filename, type) => tryCatch(() => fileRead(filename, type))