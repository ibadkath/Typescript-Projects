#! /usr/bin/env node
import inquirer from "inquirer";
import { Faker, faker } from "@faker-js/faker";
import chalk from "chalk";

class Customer{
    firstName:string;
    lastName:string;
    age: number;
    gender: string;
    telNo: number;
    accNo:number
  
    constructor( fName:string, lName:string, age:number, gender: string, telNo: number, accNo:number){
        this.firstName= fName;
        this.lastName=lName;
        this.age = age;
        this.gender=gender;
        this.telNo= telNo;
        this.accNo= accNo;
    }
}
interface BankAccount{
    account_no: number;
    account_bal: number
}

class Bank{
    customer:Customer[]=[];
    account: BankAccount[]=[]
    addCustomer(obj:Customer){
        this.customer.push(obj)
    }
    addAccountNo(obj:BankAccount){
        this.account.push(obj);
    }
    transaction(accObj:BankAccount){
        let updAccounts= this.account.filter((acc)=> acc.account_no !== accObj.account_no);
        this.account=[...updAccounts, accObj]
    }
}
 
let MeezanBank= new Bank();

for(let i:number=1; i <= 3; i++){
    let fName= faker.person.firstName('male');
    let lName= faker.person.lastName();
    let num= parseInt(faker.phone.number("3#########"));
    const cus= new Customer(fName, lName, 18*i,'Male',num, 1000+i);
    MeezanBank.addCustomer(cus)
    MeezanBank.addAccountNo({account_no:cus.accNo,account_bal:Math.floor(Math.random()*1000)})
}
//console.log(MeezanBank);

async function bankService(bank: Bank) {
    do {
        let service= await inquirer.prompt({
            name: "Service",
            type:"list",
            message: "Select",
            choices:["View Balance", "Cash Deposit", "Cash Withdraw", "Exit"]
        });
        if(service.Service === "View Balance"){
        
         let res= await inquirer.prompt({
            name: "acc_no",
            type:"number",
            message:"Enter your account number"
         });   
        let account= MeezanBank.account.find((acc)=>acc.account_no === res.acc_no)
        if(!account){
            console.log(chalk.red.bold("Invalid account number"))
        }
        if(account){
             let name= MeezanBank.customer.find((item)=>item.accNo === account?.account_no)
                console.log(`${chalk.green.bold(name?.firstName)} ${chalk.green.bold(name?.lastName)} your account balance is $${chalk.blue.bold(account.account_bal)} `)
            }
        }
    
        if(service.Service === "Cash Deposit"){
            let res= await inquirer.prompt({
                name: "acc_no",
                type:"number",
                message:"Enter your account number"
             });   
            let account= MeezanBank.account.find((acc)=>acc.account_no === res.acc_no)
            if(!account){
                console.log(chalk.red.bold("Invalid account number"))
            }
            if(account){
                let ans= await inquirer.prompt({
                    name: "amount",
                    type:"number",
                    message:"Enter your amount"
                })
                let newBalance= account.account_bal + ans.amount
    
                bank.transaction({account_no:account.account_no, account_bal:newBalance})
            }
        }
    
        if(service.Service === "Cash Withdraw"){
            let res= await inquirer.prompt({
                name: "acc_no",
                type:"number",
                message:"Enter your account number"
             });   
             
            let account= MeezanBank.account.find((acc)=>acc.account_no === res.acc_no)
            if(!account){
                console.log(chalk.red.bold("Invalid account number"))
            }
            if(account){
                let ans= await inquirer.prompt({
                    name: "amount",
                    type:"number",
                    message:"Enter your amount"
                })
                if(ans.amount > account.account_bal){
                    console.log(chalk.red.bold("Insufficient balance"))
                }
                let newBalance= account.account_bal - ans.amount
    
                bank.transaction({account_no:account.account_no, account_bal:newBalance})
            }
        }

        if(service.Service === "Exit"){
            return;
        }
    
    } while (true);   
    
}
bankService(MeezanBank);