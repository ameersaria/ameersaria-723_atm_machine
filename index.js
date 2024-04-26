#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        "name": "pin",
        "message": "Please enter your pin",
        "type": "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    let operationsAns = await inquirer.prompt([
        {
            "name": "operations",
            "message": "What do you like",
            "type": "list",
            "choices": ["Widthdraw", "Check balance", "Fast cash"]
        }
    ]);
    console.log(operationsAns);
    if (operationsAns.operations === "Widthdraw") {
        let amountAns = await inquirer.prompt([
            {
                "name": "amount",
                "message": "Enter your amount",
                "type": "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log(`Your required balance is ${myBalance}`);
    }
    else if (operationsAns.operations === "Check balance") {
        console.log(`Your current balance is ${myBalance}`);
    }
    else if (operationsAns.operations === "Fast cash") {
        let FastcAshAns = await inquirer.prompt([
            {
                "name": "amount",
                "type": "list",
                choices: ["1000", "2000", "5000", "10000", "12000"]
            }
        ]);
        if (FastcAshAns.amount <= myBalance) {
            let balance2 = myBalance - FastcAshAns.amount;
            console.log(`Your remaining amount is ${balance2}`);
        }
        else {
            console.log("You have insufficient amount");
        }
    }
}
else {
    console.log("Incorrect pin number");
}
