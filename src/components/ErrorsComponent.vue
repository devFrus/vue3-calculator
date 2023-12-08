<script setup lang="ts">
import { storeToRefs } from "pinia";
import { calculator } from "../stores/calculatorStore";

const store = calculator()
const { error } = storeToRefs(store)
</script>

<template>
  <div v-if="error" class="error-log" @click="error = ''">
    {{ error }}
  </div>
</template>

<style lang="scss" scoped>
.error-log {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 0.75rem 1.25rem;
  border: 1px solid;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>