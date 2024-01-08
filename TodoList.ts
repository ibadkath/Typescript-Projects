#!/usr/bin/env node

import inquirer from "inquirer";

interface ansType{
    menuOpt:string,
    todo: string
}
let todos:string[]=[];
let loop:boolean=true;
let answers1:ansType;
let answers2:ansType;
let answers3:ansType;

async function startLoop() {
    while(loop){
        await displayMenuItem();
    }
    
}
startLoop();

async function displayMenuItem() {
    answers1= await inquirer.prompt([
        {
        name: "menuOpt",
        type: "list",
        choices:['Add ToDo item', 'Delete ToDo item', 'Exit'],
        message: "Select menu item"
    }
    ]);
    if(answers1.menuOpt === 'Add ToDo item'){
            await addToDo();     
        }
        else if(answers1.menuOpt === 'Delete ToDo item'){
            await deleteToDo();      
        }
        else{
            loop=false;
            console.log("Exit Program");
        }
    }

async function addToDo() {
    answers2= await inquirer.prompt([
        {
        name: "todo",
        type: "input",
        message: "Enter What to do?"
    }
    ]);
    todos.push(answers2.todo)
    console.log(todos);
}

async function deleteToDo() {
    if(todos.length > 0){
        answers3= await inquirer.prompt([
            {
                name:"menuOpt",
                type:"list",
                choices:todos,
                message:"Select ToDo for delete"
            }
        ]);
        let i=0;
        do{
            if(todos[i] === answers3.menuOpt){
                todos.splice(i,1);
                 break;
            }
            i++;
        }while(i<todos.length);
        console.log(todos);
    }else{
        console.log("No todo item to delete")
    }
}