function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function divide(a,b){
    if(b==0){
        throw new Error('Cannot divide by zero'); //this throw error will be caught in the try-catch block in the calling function
    }
    return a/b;
}

console.log('first-module.js is loaded');

// console.log(divide(10,0));
try{
    console.log(divide(10,0));
}catch(error){
    console.log(error.message);
}

module.exports = {add, sub, divide};
