<script setup>
import { ref } from "vue";
const name = ref("");
const emit = defineEmits(["addItem"]);
const handleInput = () => {
  emit("addItem", name.value);
  name.value = "";
};
</script>

<template>
  <section>
    <div class="container">
      <form @submit.prevent="handleInput">
        <div class="form-group">
          {{ name }}
          <label for="new-item">New Item</label>
          <input id="new-item" name="new-item" v-model="name" />
        </div>
        <button type="submit">Add Item ➕</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
form {
  display: flex;
  align-items: flex-end;
  gap: 3px;
  max-width: 700px;
}

.form-group {
  flex: 1;
}

.form-group > label {
  display: block;
  margin-bottom: 6px;
}

button {
  all: unset;
  background-color: rgb(48, 48, 194);
  color: #fff;
  flex: 0.5;
  padding-inline: 8px;
  padding-block: 6px;
  max-width: 100px;
  text-align: center;
  cursor: pointer;
}

input {
  padding-block: 8px;
  padding-inline: 12px;
  width: 100%;
}
</style>
