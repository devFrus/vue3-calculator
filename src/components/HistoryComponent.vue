<script setup lang="ts">
import { storeToRefs } from "pinia";
import { calculator } from "../stores/calculatorStore";

const store = calculator()
const { history } = storeToRefs(store)

</script>

<template>
  <div class="wrapper-history">
    <div v-if="history.length">
    <p v-for="(log, index) in history" :key="index">{{ log }}</p>
  </div>
  <div v-else>
    No logs available
  </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper-history {
  grid-column: 1/5;
  margin-top: 10px;
  background-color: #181818;
  border-radius: 4px;
  padding: 10px;

  max-height: 88px;
  overflow-y: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}
</style>