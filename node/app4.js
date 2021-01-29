const fs = require('fs');

let  names = fs.readFileSync('./texts/names.txt', 'utf8')
let  numbers = fs.readFileSync('./texts/numbers.txt', 'utf8')
console.log(names);
console.log(Array.from(names))
