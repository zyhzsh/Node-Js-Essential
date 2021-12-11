const fs = require('fs');

//fs.renameSync("./storage-files","./storage");


//remove first
fs.readdirSync('./storage').forEach(fileName=>{
    fs.unlinkSync(`./storage/${fileName}`);
})
//then dete dir
fs.rmdir("./storage",err=>{
    if(err){
        throw err;
    }
    console.log("./storage diretory removed.");
});
