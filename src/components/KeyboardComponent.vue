<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { calculator } from '../stores/calculatorStore'

const store = calculator()
const { display, previous, operator, resolved } = storeToRefs(store)
const { resolve, addInput } = store

const handleInput = (button: string | number) => {
  if (typeof button === 'number') {
    if (resolved.value) {
      display.value = "";
      resolved.value = false;
    }
    addInput(button)
    return
  }
  switch (button) {
    case 'C':
      display.value = ''
      previous.value = ''
      operator.value = ''
      break
    case '+':
      check()
      operator.value = 'add'
      break
    case '%':
      check()
      display.value = (parseFloat(display.value) / 100).toString()
      break
    case '÷':
      check()
      operator.value = 'div'
      break
    case 'x':
      operator.value = 'mult'
      break
    case '-':
      operator.value = 'sub'
      break
    case '+/-':
      if (previous.value === '0' || previous.value === '')
        display.value =
          display.value.charAt(0) === '-' ? display.value.slice(1) : `-${display.value}`
      else
        previous.value =
          previous.value.charAt(0) === '-' ? previous.value.slice(1) : `-${previous.value}`
      break
    case '.':
      addInput(button)
      break
    case '=':
      resolve(false)
      break
  }
}

const check = (): void => {
  if (!(operator.value === '' || previous.value === '')) resolve(true)
}

const items: Array<any> = [
  { value: 'C', display: 'C', class: 'operator' },
  { value: '+/-', display: '+/-', class: 'operator' },
  { value: '%', display: '%', class: 'operator' },
  { value: '÷', display: '÷', class: 'operator' },
  { value: 7, display: '7' },
  { value: 8, display: '8' },
  { value: 9, display: '9' },
  { value: 'x', display: 'X', class: 'operator' },
  { value: 4, display: '4' },
  { value: 5, display: '5' },
  { value: 6, display: '6' },
  { value: '-', display: '-', class: 'operator' },
  { value: 1, display: '1' },
  { value: 2, display: '2' },
  { value: 3, display: '3' },
  { value: '+', display: '+', class: 'operator' },
  { value: 0, display: '0', class: 'zero' },
  { value: '.', display: '.' },
  { value: '=', display: '=', class: 'operator' },
]
</script>
<template>
  <div v-for="item in items" :key="item.value" :class="['btn', item.class]" @click="handleInput(item.value)">
    {{ item.display }}
  </div>
</template>
<style lang="scss" scoped>
.btn {
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: rgba(0, 0, 0, 0.1);

  cursor: pointer;

  &:not(.operator) {
    border-color: #fff;
    border: 2px solid;

    &:hover {
      border-color: #fab700;
    }
  }
}

.operator {
  background-color: #fab700;
  color: #211510;

  &:hover {
    background-color: #c79200;
  }
}

.zero {
  grid-column: 1 / 3;
}</style>
