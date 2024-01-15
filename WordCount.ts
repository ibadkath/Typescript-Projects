#! /usr/bin/env node
import inquirer from "inquirer";
async function startLoop() {
    let again;
    do{
        await getSentence();
        again= await inquirer.prompt({
            type:"list",
            name: "loop",
            choices:["Yes", "No"],
            message:"Do you want to continue?"
        })
    }while(again.loop == "Yes");  
}
startLoop();

function wordCount(sent:string):number{
    if(sent.length>0){
        const words=sent.split(" ")
        console.log(words)
        return words.length
    } else{
        return 0;
    }
}

async function getSentence() {
    const answer:{
        sentence:string
    }=await inquirer.prompt([
        {
            type:"input",
            name:"sentence",
            message:"Write your sentence to count words"
        }
    ])
    console.log(`Word count in your sentence is ${wordCount(answer.sentence.trim())}`)
}

