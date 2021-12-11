const collectAnswers = require("./lib/collectAnswers");


const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with node js?"
];

const answerEvents = collectAnswers(questions)

answerEvents.on("answer",answer=>console.log(`question answered: ${answer}`));



answerEvents.on("complete",answer=>{
    console.log("Thank you for your answer. ");
    console.log(answer);
});
answerEvents.on("complete",()=>process.exit());