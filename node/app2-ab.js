//a

const fs = require("fs");

let str = " ";

// fs.readFile("./texts/append.txt", "utf-8", (err, data) => {
//   if (err) throw data;
//   let str = data;

//   fs.writeFile("./texts/to.txt", str, (err) => {
//     if (err) throw err;
//     console.log("successfully done it");

//   });
// });

//b

let from = fs.readFileSync('./texts/from.txt', 'utf8')

fs.writeFileSync('./texts/to.txt', from)


//fs.writeFileSync('./texts/to.txt', fs.readFileSync('./texts/from.txt', 'utf8'))