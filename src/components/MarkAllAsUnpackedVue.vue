<script setup>
const emit = defineEmits(["updateAll"]);
</script>

<template>
  <div class="container">
    <button @click="emit('updateAll')">Mark All As UnPacked</button>
  </div>
</template>

<style scoped>
div {
  /* padding: 3rem 1.5rem; */
  padding-bottom: 2rem;
}

button {
  border: none;
  background-color: #fff;
  color: rgb(21, 20, 20);
  font-size: 20px;
  text-align: center;
  padding: 0.75rem 1.5rem;
  width: 100%;
  cursor: pointer;
}
</style>
