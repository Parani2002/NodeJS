//
console.log(typeof __filename); //string
console.log(typeof __dirname); //string
console.log(__dirname);
console.log(__filename);


//importing path module
const path = require('path');

console.log(path.basename(__filename)); //returns the string of the last portion of the path
console.log(path.dirname(__filename)); //returns the string of the directory name of the path
console.log(path.extname(__filename)); //returns the string of the extension name of the path
console.log(path.parse(__filename)); //returns the object of the path
console.log(path.join(__dirname, 'index.js')); //returns the string of the path by joining the directory name and file name
console.log(path.resolve(__dirname, 'index.js')); //returns the string of the absolute path by resolving the directory name and file name

const pathname = path.basename(__filename);

const parseObj = path.parse(__filename);
console.log(parseObj.root);
console.log(parseObj.dir);
console.log(parseObj.base);
console.log(parseObj.ext);
console.log(parseObj.name);
