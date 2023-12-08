import { defineStore } from "pinia";

export const calculator = defineStore("calculator", {
  state: () => ({
    display: "0" as string,
    previous: "0" as string,
    operator: "" as string,
    history: [] as Array<string>,
  }),
  actions: {
    resolve(): void {
      const oldDisplay = this.display;
      switch(this.operator) {
        case "add":
          this.display =(parseFloat(this.previous) + parseFloat(this.display)).toString();
          break;
        case "sub":
          this.display = (parseFloat(this.previous) - parseFloat(this.display)).toString();
          break;
        case "mult":
          this.display = (parseFloat(this.previous) * parseFloat(this.display)).toString();
          break;
        case "div":
          this.display = (parseFloat(this.previous) / parseFloat(this.display)).toString();
          break;
        default:
      }
      this.history.push(`${this.previous} ${this.operator} ${oldDisplay} = ${this.display}`)
      this.previous = "0";
      this.operator = "";
    },
    addInput(input: number|string): void {
      if (this.previous === "0") this.previous = ""
      if (this.display === "0") this.display = ""
      if (this.operator !== "")
        this.previous = (this.previous || "") + input
      else 
        this.display = (this.display || "") + input.toString()
    },
  }
})