<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  item: { packed: Boolean, id: String, name: String },
});

const emits = defineEmits([
  "getIdAndRemove",
  "getIdAndUpdateCheck",
  "getIdAndUpdateName",
]);

const handleDelete = () => {
  emits("getIdAndRemove", props.item.id);
};

const completedInputCheckModel = computed({
  // getter
  get() {
    return props.item.packed;
  },
  // setter
  set(newValue) {
    emits("getIdAndUpdateCheck", [{ packed: newValue }, props.item.id]);
  },
});

const editedInputModel = computed({
  // getter
  get() {
    return props.item.name;
  },
  // setter
  set(newValue) {
    emits("getIdAndUpdateName", [{ name: newValue }, props.item.id]);
  },
});

const edit = ref(false);
</script>

<template>
  <div class="item">
    <input v-model="completedInputCheckModel" type="checkbox" />
    <div class="form-group">
      <label v-if="!edit">{{ item.name }}</label>
      <input v-else v-model="editedInputModel" />
    </div>
    <div class="buttons">
      <button @click="edit = !edit">{{ edit ? "💾 save" : "✍ edit" }}</button>
      <button @click="handleDelete">🗑 remove</button>
    </div>
  </div>
</template>

<style scoped>
.form-group {
  display: flex;
  gap: 4px;
}

.buttons {
  display: flex;
  gap: 12px;
}

button {
  all: unset;
  padding: 3px 6px;
  background-color: rgb(21, 20, 20);
  white-space: nowrap;
  color: #fff;
  cursor: pointer;
}

.item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 6px 4px;
  background-color: rgb(203, 203, 224);
  margin: 6px 0;
  width: min(100%, 600px);
  color: #000;
}
</style>
