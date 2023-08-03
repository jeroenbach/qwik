<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <div>
    <h1>Welcome to QwikVue</h1>
    <p>Count is: {{ count }}</p>
    <button @click="count++">Increment</button>
  </div>
</template>

<style scoped>
h1 {
  color: #42b983;
}
</style>