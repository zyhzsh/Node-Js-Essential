const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

const questions = [
    "What is your name?",
    "Where do you live?",
    "What are you going to do with node js?"
];

// Mine solustion
const answers = [];
const CollectAnswersStartWithQuestion = (questionNumber) =>{
    rl.question(questions[questionNumber],(answer)=>{
        if(questionNumber < questions.length-1){
            answers.push(answer);
            CollectAnswersStartWithQuestion(questionNumber+1);
        }else{
            answers.push(answer);
            console.log("Thank you for your answers.");
            console.log(answers);
            process.exit();
        }
    })
}


CollectAnswersStartWithQuestion(1);










// Course Answer
const collectAnswers = (questions,done) =>{
    const answers = [];
    const [firstQuestion] = questions;
    const questionAnswered = answer =>{
        answers.push(answer);
        if(answers.length<questions.length){
            rl.question(questions[answers.length],questionAnswered);
        }else{
            done(answers);
        }
    }
    rl.question(firstQuestion,questionAnswered);
}
const done=(answers)=>{
    console.log("Thank you for your answers.");
    console.log(answers);
    process.exit();
}

collectAnswers(questions,done);

