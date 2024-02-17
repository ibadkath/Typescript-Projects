#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
async function main() {
    const timer = await inquirer.prompt({
        type: "number",
        name: "time",
        message: "Enter seconds",
        validate: (input) => {
            if (isNaN(input)) {
                return "Enter a valid number";
            }
            else if (input > 60) {
                return "Timer should be less than or equal to one minute";
            }
            else {
                return true;
            }
        }
    });
    const input = timer.time;
    function startTimer(val) {
        const startTime = new Date();
        const endTime = new Date(startTime.getTime() + val * 1000); // Convert seconds to milliseconds
        let diffTime = differenceInSeconds(endTime, startTime);
        console.log(`${Math.floor(diffTime / 60).toString().padStart(2, "0")}:${(diffTime % 60).toString().padStart(2, "0")}`);
        const interval = setInterval(() => {
            diffTime--;
            if (diffTime <= 0) {
                clearInterval(interval);
                console.log("Time has expired");
                process.exit();
            }
            console.log(`${Math.floor(diffTime / 60).toString().padStart(2, "0")}:${(diffTime % 60).toString().padStart(2, "0")}`);
        }, 1000);
    }
    startTimer(input);
}
main();
