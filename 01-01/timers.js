const waitTime = 3000;
console.log(`setting a ${waitTime/1000} second delay`);

const timerFinished = ()=> console.log("Done ~");

setTimeout(timerFinished,waitTime);

