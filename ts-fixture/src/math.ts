export function add(a: number, b: number): number {
  return a + b;
}

export function multiply(a: number, b: number): number {
  return a * b;
}

export class Calculator {
  private result: number;

  constructor(initial: number = 0) {
    this.result = initial;
  }

  add(value: number): Calculator {
    this.result = add(this.result, value);
    return this;
  }

  multiply(value: number): Calculator {
    this.result = multiply(this.result, value);
    return this;
  }

  getResult(): number {
    return this.result;
  }
}
