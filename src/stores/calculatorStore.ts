import { defineStore } from "pinia";
interface Symbol {
  [key: string]: string
}
const symbols: Symbol = {
  add: "+",
  sub: "-",
  mult: "X",
  div: "÷",
}

export const calculator = defineStore("calculator", {
  state: () => ({
    display: "" as string,
    previous: "" as string,
    operator: "" as string,
    error: "" as string,
    resolved: false as boolean,
    history: [] as Array<string>,
  }),
  actions: {
    resolve(operatorPressed: boolean): void {
      const oldDisplay = this.display;
      const operations: Record<string, (a: number, b: number) => number> = {
        'add': (a, b) => a + b,
        'sub': (a, b) => a - b,
        'mult': (a, b) => a * b,
        'div': (a, b) => {
          if (b === 0) {
            this.error = 'Cannot divide by 0';
            return parseFloat(this.display);
          }
          return a / b;
        }
      };
    
      const operation = operations[this.operator];

      if (operation) {
        const result = operation(parseFloat(this.previous), parseFloat(this.display)).toFixed(3);
        this.display = parseFloat(result).toString();
      } else {
        this.error = 'No operation given';
      }

      if (this.error === "")
        this.history.push(`${oldDisplay} ${symbols[this.operator]} ${this.previous} = ${this.display}`)
      if (!operatorPressed) this.resolved = true;
      this.previous = "";
      this.operator = "";
    },
    addInput(input: number|string): void {
      if (this.display.length > 15) {
        this.error = 'Max numbers amount reached'
      }
      if (this.operator !== "")
        this.previous = (this.previous || "") + input
      else 
        this.display = (this.display || "") + input.toString()
    },
  }
})