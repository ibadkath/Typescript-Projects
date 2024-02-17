#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let users = [
    {
        userID: "Haseeb",
        userPin: 1234
    },
    {
        userID: "Sami",
        userPin: 5678
    },
    {
        userID: "Ali",
        userPin: 2468
    }
];
let balance = Math.floor(Math.random() * 100000);
let answers1;
let answers2;
startLoop();
async function startLoop() {
    let again;
    await getUserID();
    do {
        await getTransaction();
        again = await inquirer.prompt([
            {
                name: "restart",
                type: "list",
                message: "Do you want to continue?",
                choices: ["Yes", "No"]
            }
        ]);
    } while (again.restart === "Yes");
}
async function getUserID() {
    answers1 = await inquirer.prompt([
        {
            type: "input",
            name: "userID",
            message: "Enter your user ID"
        },
        {
            type: "number",
            name: "userPin",
            message: "Enter your user Pin"
        }
    ]);
    await checkUserID(answers1.userID, answers1.userPin);
}
async function checkUserID(userID, userPin) {
    let condition = false;
    for (let i = 0; i < users.length; i++) {
        if (userID === users[i].userID && userPin === users[i].userPin) {
            condition = true;
            break;
        }
    }
    if (!condition) {
        console.log(chalk.red.bold("Invalid user ID or Pin. Try again."));
        await getUserID();
    }
}
async function getTransaction() {
    answers2 = await inquirer.prompt([
        {
            type: "list",
            name: "accountType",
            choices: ["Current", "Saving"],
            message: "Select account type"
        },
        {
            type: "list",
            name: "transType",
            choices: ["Fast Cash", "Withdraw"],
            message: "Select transaction type"
        },
        {
            type: "list",
            name: "amount",
            choices: [5000, 10000, 15000, 20000, 250000],
            message: `Select your amount (Current balance is ${balance})`,
            when(answers2) {
                return answers2.transType == "Fast Cash";
            }
        },
        {
            type: "number",
            name: "amount",
            message: `Enter your amount (Current balance is ${balance})`,
            when(answers2) {
                return answers2.transType == "Withdraw";
            }
        }
    ]);
    if (answers1.userID && answers1.userPin) {
        if (answers2.amount <= balance) {
            balance -= answers2.amount;
            console.log(`
            Your current balance is ${balance}`);
        }
        else {
            console.log(`Insufficient balance ${balance})`);
        }
    }
}
