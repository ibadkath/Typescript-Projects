#! /usr/bin/env node
import inquirer from "inquirer";
let conversion = {
    "GBP": {
        "GBP": 1.0000,
        "USD": 1.2748,
        "EUR": 1.1576,
        "AUD": 1.9397,
        "PKR": 358.65
    },
    "USD": {
        "GBP": 0.7842,
        "USD": 1.0000,
        "EUR": 0.9081,
        "AUD": 1.5216,
        "PKR": 281.35
    },
    "EUR": {
        "GBP": 0.8634,
        "USD": 1.1012,
        "EUR": 1.0000,
        "AUD": 1.6753,
        "PKR": 310.22
    },
    "AUD": {
        "GBP": 0.5151,
        "USD": 0.6571,
        "EUR": 0.5965,
        "AUD": 1.0000,
        "PKR": 185.26
    },
    "PKR": {
        "GBP": 0.0027,
        "USD": 0.0036,
        "EUR": 0.0032,
        "AUD": 0.0054,
        "PKR": 1.0000
    },
};
async function startLoop() {
    let again;
    do {
        await convertAmount();
        again = await inquirer.prompt({
            type: "list",
            name: "count",
            choices: ["Yes", "No"],
            message: "Do you want to continue?"
        });
    } while (again.count == "Yes");
}
startLoop();
async function convertAmount() {
    const answer = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            choices: ["GBP", "USD", "EUR", "AUD", "PKR"],
            message: "Select currency from"
        },
        {
            name: "to",
            type: "list",
            choices: ["GBP", "USD", "EUR", "AUD", "PKR"],
            message: "Select currency to"
        },
        {
            name: "amount",
            type: "number",
            message: "Enter amount"
        },
    ]);
    const { from, to, amount } = answer;
    if (from && to && amount) {
        let result = conversion[from][to] * amount;
        console.log(`The converted amount of ${amount} ${from} in ${to} is ${result}`);
    }
    else {
        console.log("Invalid input");
    }
}
