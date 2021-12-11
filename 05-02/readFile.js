const fs = require("fs");


//Method - 1
//Sync process until finished it. Which meaning Blocking 
const text = fs.readFileSync("./assets/Readme.md","utf-8");
console.log(text);


//Method - 2
fs.readFile("./assets/Readme.md","utf-8",(err,text)=>{
    if(err){
        throw err;
    }
    console.log(text);
});

//Read it as binary file
fs.readFile("./assets/alsex.jpg",(err,img)=>{
    if(err){
        console.log(err.message);
        process.exit();
    }
    console.log(img);
});