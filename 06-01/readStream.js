const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md","utf-8");


console.log("type something...");

let txt="";
//process.stdin is a readable streams
readStream.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
  txt+=data;
});

// readStream.once("data",data=>{
//   console.log(data.length);
// });


readStream.on("end",()=>{
    console.log(`finished reading file ${txt.length}`);
});
