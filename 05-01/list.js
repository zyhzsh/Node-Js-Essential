
const fs = require("fs");

//Method - 1
console.log("start reading files");
const files = fs.readdirSync("./assets");
console.log("complete");
console.log(files);

//Method - 2
console.log("start reading files");
fs.readdir("./assets",(err,files)=>{
    if(err){
        throw err;
    }
    console.log("complete");
    console.log(files);
})

