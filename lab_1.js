"use strict";
 
const readline = require("readline");
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
function ask(q) {
    return new Promise(resolve => rl.question(q, resolve));
}
 
async function calculate() {
    try {
        const a = Number(await ask("Enter first number: "));
        const op = (await ask("Enter operator (+, -, *, /, %): ")).trim();
        const b = Number(await ask("Enter second number: "));
 
        if (Number.isNaN(a) || Number.isNaN(b)) {
            throw new Error("Operands must be valid numbers");
        }
 
        let result;
 
        switch (op) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                if (b === 0) throw new Error("Division by zero is not allowed");
                result = a / b;
                break;
            case "%":
                if (b === 0) throw new Error("Division by zero is not allowed");
                result = a % b;
                break;
            default:
                throw new Error("Invalid operator");
        }
 
        console.log(`\nResult: ${a} ${op} ${b} = ${result}`);
    } catch (err) {
        console.log("Error: " + err.message);
    } finally {
        rl.close();
    }
}
 
calculate();
