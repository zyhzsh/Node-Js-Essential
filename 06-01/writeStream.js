const fs = require('fs');

const writeStream = fs.createWriteStream("./assets/myfile.txt","utf-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md","utf-8");
// readStream.on("data",data=>{
//     writeStream.write(data);
// });


//accounding user typed text in terminial 
//the text will be wtitten in the file
//process.stdin.pipe(writeStream);

//this method pipe link the data from the file to another file 
//just like copy paste
readStream.pipe(writeStream);