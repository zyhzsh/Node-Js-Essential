const cp = require("child_process");

//This applied for mac/linux/unix system
// cp.exec("open http://www.linkedin.com/learning",err=>{
//     if(err){throw err;};
// });
//For windows 
// cp.exec("start http://www.linkedin.com/learning",err=>{
//     if(err){throw err;};
// });
// cp.exec("start -a Terminal .",err=>{
//     if(err){throw err;};
// });
//For windows
// cp.exec("wt",err=>{
//     if(err){throw err;};
// });
cp.exec("lst",(err,data,stderr)=>{
    if(err){
        throw err;
    }
    console.log(data);
})