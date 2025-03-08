console.log("Node Module Wrapper Exploler");

console.log("__filename in wrapper exploler", __filename);
console.log("__dirname in wrapper exploler", __dirname);

module.exports.greet  = function(name){
    console.log(`Hello ${name}`);
}
