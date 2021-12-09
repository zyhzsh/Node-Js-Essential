const waitTime = 3000;
const waitIntercval = 500;
let currentTime = 0; 


const incTime = () => {
    currentTime += waitIntercval;
    console.log(`waiting ${currentTime/1000} seconds`);
};

console.log(`setting a ${waitTime/1000} second delay`);



const timer = setInterval(incTime,waitIntercval);
const timerFinished = ()=> {
    clearInterval(timer);
    console.log("Done ~");
}

setTimeout(timerFinished,waitTime);

