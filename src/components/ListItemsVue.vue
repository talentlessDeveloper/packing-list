<script setup>
import { computed, ref } from "vue";
import { filterItems } from "../items";
import ItemVue from "./ItemVue.vue";

const props = defineProps(["title", "items"]);
const filter = ref("");

const filteredItems = computed(() => {
  return filterItems(props.items, { name: filter.value });
});

const emit = defineEmits(["remove", "update", "edit"]);

const handleDelete = (emittedId) => {
  emit("remove", emittedId);
};

const handleUpdate = (emittedId) => {
  emit("update", emittedId);
};

const handleEdit = (emittedData) => {
  emit("edit", emittedData);
};
</script>

<template>
  <section>
    <header class="">
      <h2 class="">{{ title }}</h2>

      <label for="filter">Filter</label>
      <input id="filter" name="filter" v-model="filter" />
    </header>
    <ul class="">
      <li v-for="item in filteredItems" :key="item.id">
        <ItemVue
          :item="item"
          @get-id-and-remove="(emittedId) => handleDelete(emittedId)"
          @get-id-and-update-check="(emittedId) => handleUpdate(emittedId)"
          @get-id-and-update-name="(emittedData) => handleEdit(emittedData)"
        />
      </li>
    </ul>
    <p class="">{{ items.length === 0 ? "(Nothing to show.)" : "" }}</p>
  </section>
</template>

<style scoped>
section {
  flex: 1;
  padding: 1.5rem;
  border: 2px solid gray;
}

ul {
  margin-top: 3rem;
  list-style: none;
  padding: 0;
  width: 100%;
}

li {
  width: 100%;
}

input {
  display: block;
  padding: 6px 12px;
  width: min(100%, 600px);
}
</style>
