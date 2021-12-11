**Node.js Essential**

- Core moudules (no need to install)

  ```bash
  const readline = require('readline');
  
  const rl = readline.createInterface({
      input: process.stdin,
      output:process.stdout
  });
  
  rl.question("How do you like Node? ", answer =>{
      console.log(`Your answer: ${answer}`);
  });
  ```

- Create own moudule

  ```bash
  1.create an folder called "lib"
  2.create an new js file name it "collectAnswers.js"
  3.copy/paste code below
  const readline = require('readline');
  
  const rl = readline.createInterface({
      input: process.stdin,
      output:process.stdout
  });
  
  module.exports = (questions,done=()=>{}) =>{
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
  4.create question.js file
  5.copy/paste code below
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
  6.run code...
  ```

- Custom events with the EventEmitter

  ```bash
  const readline = require('readline');
  
  const { EventEmitter } = require("events");
  
  const rl = readline.createInterface({
      input: process.stdin,
      output:process.stdout
  });
  
  module.exports = (questions,done=()=>{}) =>{
      const answers = [];
      const [firstQuestion] = questions;
      const emitter = new EventEmitter();
      const questionAnswered = answer =>{
          emitter.emit("answer",answer);
          answers.push(answer);
          if(answers.length<questions.length){
              rl.question(questions[answers.length],questionAnswered);
          }else{
              emitter.emit("complete",answers);
              done(answers);
          }
      };
      rl.question(firstQuestion,questionAnswered);
  
      return emitter;
  }
  //////////////////////////////////////////////////////
  
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
  ```

- Baiscs File System

  - Different way to read list directory files

    ```bash
    const fs = require("fs");
    
    //Method - 1
    console.log("start reading files");
    const files = fs.readdirSync("./assets");
    console.log("complete");
    console.log(files);
    
    //Method - 2
    console.log("start reading files");
    fs.readdir("./assets",(err,files)=>{
        if(err){
            throw err;
        }
        console.log("complete");
        console.log(files);
    })
    ```

  - Read files

    ```bash
    const fs = require("fs");
    
    //Method - 1
    //Sync process until finished it. Which meaning Blocking 
    const text = fs.readFileSync("./assets/Readme.md","utf-8");
    console.log(text);
    
    //Method - 2
    fs.readFile("./assets/Readme.md","utf-8",(err,text)=>{
        if(err){
            throw err;
        }
        console.log(text);
    });
    
    //Read it as binary file
    fs.readFile("./assets/alsex.jpg",(err,img)=>{
        if(err){
            console.log(err.message);
            process.exit();
        }
        console.log(img);
    });
    ```

  - Write text files

    ```bash
    const fs = require("fs");
    
    const md = `
    # This is a new file
    
    We can write text to the file with fs.writeFile
    
    * fs.readdir
    * fs.readFile
    * fs.writeFile
    
    `;
    
    fs.writeFile("./assets/notes.md",md.trim(),err=>{
        if(err){
            throw err;
        }
        console.log("file saved");
        process.exit();
    })
    ```

  - Create Directory

    ```bash
    const fs = require("fs");
    
    if(fs.existsSync("storage-files")){
        console.log("Already there");
    }else{
        fs.mkdir("storage-files",err=>{
            if(err){
                throw err;
            }
            console.log("directory created");
        })
    }
    ```

  - Append Files

    ```bash
    const fs = require('fs');
    const colorData = require("./assets/colors.json");
    
    colorData.colorList.forEach(c=>{
        fs.appendFile("./storage-files/colors.md",`${c.color}:${c.hex}\\n`,err=>{if(err) throw err;});
    })
    ```

  - Rename and Remove files

    ```bash
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
    ```

  - Rename and Remove directories

    ```bash
    const fs = require('fs');
    //Rename
    fs.renameSync("./storage-files","./storage");
    //remove files inside dir
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
    ```

- Files and Streams

  - Readable file streams

    ```bash
    const fs = require("fs");
    
    const readStream = fs.createReadStream("./assets/lorum-ipsum.md","utf-8");
    
    console.log("type something...");
    
    let txt="";
    //process.stdin is a readable streams
    //read it chunk by chunk
    readStream.on("data", data => {
      console.log(`I read ${data.length - 1} characters of text`);
      txt+=data;
    });
    
    //Only read it by one chunk
    // readStream.once("data",data=>{
    //   console.log(data.length);
    // });
    
    //When the readstream is end
    readStream.on("end",()=>{
        console.log(`finished reading file ${txt.length}`);
    });
    ```

  - Writable file streams

    ```bash
    const fs = require('fs');
    
    const writeStream = fs.createWriteStream("./assets/myfile.txt","utf-8");
    const readStream = fs.createReadStream("./assets/lorum-ipsum.md","utf-8");
    // readStream.on("data",data=>{
    //     writeStream.write(data);
    // });
    
    //accounding user typed text in terminial 
    //the text will be wtitten in the file
    //process.stdin.pipe(writeStream);
    
    //this method pipe link the data from the file to another file 
    //just like copy paste
    readStream.pipe(writeStream);
    ```

  - Create child process with exec (design for synchronous)

    ```bash
    const cp = require("child_process");
    
    //This applied for mac/linux/unix system
    // cp.exec("open <http://www.linkedin.com/learning>",err=>{
    //     if(err){throw err;};
    // });
    //For windows 
    // cp.exec("start <http://www.linkedin.com/learning>",err=>{
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
    ```

  - Create child process with spawn (design)

    ```bash
    const cp = require("child_process");
    
    //// The array part represent as argument
    const questionApp = cp.spawn("node", ["questions.js"]);
    
    questionApp.stdin.write("Alex \\n");
    questionApp.stdin.write("Tahoe \\n");
    questionApp.stdin.write("Change the world \\n");
    
    questionApp.stdout.on("data", data => {
      console.log(`from the question app: ${data}`);
    });
    
    questionApp.on("close", () => {
      console.log(`questionApp process exited`);
    });
    ```