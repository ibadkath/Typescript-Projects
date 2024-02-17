#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import gradient from "gradient-string";

import{addition, subtraction, multiplication, division } from "./functions.js"

 let ans= [{
    message:gradient.rainbow("Enter your first number"),
    type: "number",
    name: "num1",
    validate: (input:number)=>{
      if(isNaN(input)){
         return "Please enter number"
      }
      return true;
    }
 },
 {
    message:gradient.rainbow("Enter your second number"),
    type: "number",
    name: "num2",
    validate: (input:number)=>{
      if(isNaN(input)){
         return "Please enter number"
      }
      return true;
    }
 },
 {
    message:gradient.rainbow("Select Operator"),
    type: "list",
    choices:["+", "-", "*", "/"],
    name: "Operator"
 }
 ];
 let answer=[{
   name:"again",
   type: "confirm",
   message: "Do you want to calculate again?"
 }];
 (async () => {
   await showBanner('Calculator', 'This calculator can perform Addition, Subtraction, Multiplicaion and Division',"blue"
   , "red");
})();
async function Calc() {
   let condition= true;
   while (condition) {
      let {num1,num2,Operator}= await inquirer.prompt(ans);
   if(Operator==="+"){
      console.log(addition(num1,num2))
   }
   else if(Operator==="-"){
      console.log(subtraction(num1,num2))
   }
   else if(Operator==="*"){
      console.log(multiplication(num1,num2))
   }
   else{
      console.log(division(num1,num2))
   }
   let {again}= await inquirer.prompt(answer);
   condition=again;
} 
}
setTimeout(() => {
   Calc();
}, 500);



