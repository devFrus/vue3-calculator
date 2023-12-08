<script setup lang="ts">
import KeyboardComponent from './KeyboardComponent.vue'
import DisplayComponent from './DisplayComponent.vue';
import HistoryComponent from './HistoryComponent.vue';

interface Symbol {
  [key: string]: string
}
const symbols: Symbol = {
  add: "+",
  sub: "-",
  mult: "x",
  div: "÷",
}
</script>
<template>
  <div class="wrapper">
    <div class="calculator">
      <DisplayComponent :symbols="symbols" />
      <KeyboardComponent />
      <HistoryComponent />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 100%;
  .calculator {
    background-color: #2c2a27;
    border-radius: 0.6rem;
    color: #fff;
    padding: 2rem;
    display: grid;
    grid-template-rows: repeat(6, minmax(60px, auto));
    grid-template-columns: repeat(4, minmax(60px, auto));
    grid-gap: 6px;
  }
}
</style>
