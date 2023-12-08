<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { calculator } from '../stores/calculatorStore'

const store = calculator()
const { display, previous, operator } = storeToRefs(store)
const { resolve, addInput } = store

const handleInput = (button: string | number) => {
  if (typeof button === 'number') {
    addInput(button)
    return
  }
  switch (button) {
    case 'C':
      display.value = '0'
      previous.value = '0'
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
    case 'X':
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
      resolve()
      break
  }
}

const check = (): void => {
  if (!(operator.value === '' || previous.value === '0')) resolve()
}
</script>
<template>
  <div class="btn operator" @click="handleInput('C')">C</div>
  <div class="btn operator" @click="handleInput('+/-')">+/-</div>
  <div class="btn operator" @click="handleInput('%')">%</div>
  <div class="btn operator" @click="handleInput('÷')">÷</div>

  <div class="btn" @click="handleInput(7)">7</div>
  <div class="btn" @click="handleInput(8)">8</div>
  <div class="btn" @click="handleInput(9)">9</div>
  <div class="btn operator" @click="handleInput('X')">X</div>

  <div class="btn" @click="handleInput(4)">4</div>
  <div class="btn" @click="handleInput(5)">5</div>
  <div class="btn" @click="handleInput(6)">6</div>
  <div class="btn operator" @click="handleInput('-')">-</div>

  <div class="btn" @click="handleInput(1)">1</div>
  <div class="btn" @click="handleInput(2)">2</div>
  <div class="btn" @click="handleInput(3)">3</div>
  <div class="btn operator" @click="handleInput('+')">+</div>

  <div class="btn zero" @click="handleInput(0)">0</div>
  <div class="btn" @click="handleInput('.')">.</div>
  <div class="btn operator" @click="handleInput('=')">=</div>
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
}
</style>
