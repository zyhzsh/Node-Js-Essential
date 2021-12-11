const collectAnswers = require("./lib/collectAnswers");


const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with node js?"
];

collectAnswers(questions,answer=>{
    console.log("Thank you for your answer. ");
    console.log(answer);
    process.exit();
})