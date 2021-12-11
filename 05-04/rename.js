const fs = require('fs');

//Reanme file
fs.renameSync("./assets/colors.json","./assets/colorData.json");

//Move file to another folder
fs.rename("./assets/notes.md","./storage-files/notes.md",err=>{
    if(err){throw err.message;}
});

// //Delete jpg file
setTimeout(()=>{
    fs.unlinkSync("./assets/alex.jpg");
},4000)
