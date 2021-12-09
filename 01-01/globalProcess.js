// console.log(process.pid);
// console.log(process.versions.node);

// // argv is an array
// const [, , firstname,lastname] = process.argv;

// console.log(`You name is ${firstname} ${lastname}`);


//another example.
const grab = flag =>{
    let indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag];
}


const greeting = grab("--greeting");
const user = grab("--user");


console.log(`${greeting} ${user}`);




