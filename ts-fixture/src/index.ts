import { Calculator, add } from "./math";

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const calc = new Calculator(10);
calc.add(5).multiply(2);

console.log(greet("World"));
console.log(`Result: ${calc.getResult()}`);
console.log(`Direct add: ${add(3, 4)}`);
