const waitTime = 5000;
const waitIntercval = 500;
let currentTime = 0; 


const incTime = () => {
    currentTime += waitIntercval;
    const p = Math.floor((currentTime/waitTime)*100);
    // console.log(`waiting ${currentTime/1000} seconds`);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}%`);
};

console.log(`setting a ${waitTime/1000} second delay`);



const timer = setInterval(incTime,waitIntercval);
const timerFinished = ()=> {
    clearInterval(timer);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Done ~");
}

setTimeout(timerFinished,waitTime);

