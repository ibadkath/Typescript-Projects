#! /usr/bin/env node
import inquirer from "inquirer";

class Student{
    name:string;
    constructor(name:string){
        this.name=name;
    }
}

class Person{
    students:Student[]=[]

    addStudent(obj:Student){
        this.students.push(obj)
    }
}
const persons= new Person()
const startProgram= async(persons:Person)=>{
    do {
        const ans = await inquirer.prompt({
            name: "chatApp",
            type: "list",
            message:"Whom do you want to talk?",
            choices:["Student", "anyone"]
        })
        if(ans.chatApp === 'anyone'){
            console.log("How are you")
        }
        else{
            const answers= await inquirer.prompt({
                type:"input", 
                name: "student",
                message: "Which student do you want to talk?"
            })
            const student= persons.students.find(val => val.name == answers.student)
    
            if(!student){
                const stdName= new Student(answers.student)
                persons.addStudent(stdName)
    
                console.log(`Hello I am ${stdName.name}.`)
                console.log(persons.students)
            }
            else{
                console.log(`Hello I am ${student.name} I am already In record.`)
                console.log(persons.students)
            }
        }
    } while (true);
    
}
startProgram(persons)