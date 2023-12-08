<script lang="ts" setup>
import { calculator } from "../stores/calculatorStore";
import { storeToRefs } from "pinia";

const store = calculator();
const { display, previous, operator } = storeToRefs(store);

const checkDisplay = (input: string): string => {
  return input === "0" ? "" : input.toString();
}
const symbols: any = {
  add: "+",
  sub: "-",
  mult: "X",
  div: "÷",
}
</script>
<template>
  <div class="display"> {{ checkDisplay(display) }} {{ symbols[operator] || "" }} {{ checkDisplay(previous) }}</div>
</template>
<style lang="scss" scoped>
.display {
  background-color: rgba(0, 0, 0, 0.8);

  grid-column: 1 / 5;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 1rem;
  justify-content: center;
  text-align: center;
  font-size: 1.6rem;
}
</style>