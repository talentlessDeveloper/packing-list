<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  items: Array,
});
</script>

<template>
  <header>
    <div class="container">
      <h1>Packing List</h1>
      <p>{{ items.length }} {{ items.length > 1 ? "items" : "item" }}</p>
    </div>
  </header>
</template>

<style scoped>
header {
  padding-block: 3rem;
}
</style>
