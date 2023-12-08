<script setup lang="ts"></script>
<template>
  <div class="btn operator">C</div>
  <div class="btn operator">+/-</div>
  <div class="btn operator">%</div>
  <div class="btn operator">÷</div>

  <div class="btn">7</div>
  <div class="btn">8</div>
  <div class="btn">9</div>
  <div class="btn operator">X</div>

  <div class="btn">4</div>
  <div class="btn">5</div>
  <div class="btn">6</div>
  <div class="btn operator">-</div>

  <div class="btn">1</div>
  <div class="btn">2</div>
  <div class="btn">3</div>
  <div class="btn operator">+</div>

  <div class="btn zero">0</div>
  <div class="btn">.</div>
  <div class="btn operator">=</div>
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
