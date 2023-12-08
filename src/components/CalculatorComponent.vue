<script setup lang="ts">
import KeyboardComponent from './KeyboardComponent.vue'
import DisplayComponent from './DisplayComponent.vue';
</script>
<template>
  <div class="wrapper">
    <div class="calculator">
      <DisplayComponent />
      <KeyboardComponent />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
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
