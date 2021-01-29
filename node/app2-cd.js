//a

const fs = require("fs");

// let append = " ";
// let from = " ";

// fs.readFile("./texts/from.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   from = data;

//   fs.readFile("./texts/append.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     append = data;

//     fs.writeFile("./texts/to.txt", from + append, (err) => {
//       if (err) throw err;
//       console.log("successfully done it");

//     });
//   });
// });

//b
let from = fs.readFileSync('./texts/from.txt', 'utf8')
let append = fs.readFileSync('./texts/append.txt', 'utf8')
fs.writeFileSync('./texts/to.txt', from + append)

console.log('successfully done it');

// fs.writeFileSync('./texts/to.txt', fs.readFileSync('./texts/from.txt', 'utf8') + fs.readFileSync('./texts/append.txt', 'utf8'))