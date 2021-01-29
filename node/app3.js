//a
const fs = require('fs');

// fs.writeFile('./texts/newFile.txt', 'hi there !', (err) => {
//     if(err)  throw err;

//     console.log("done!")
// })

// fs.readFile('./texts/newFile.txt', 'utf8', (err) => {
//     if(err) console.log("not exist!");
// })

//b
fs.writeFileSync("./texts/newFile.txt", "hi there!");
fs.readFileSync("./texts/newFile.txt","utf8",(err) =>{
    if(err) {console.log("not exist")};
})
