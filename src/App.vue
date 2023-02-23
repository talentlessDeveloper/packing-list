<script setup>
import { ref } from "vue";

import HeaderVue from "./components/HeaderVue.vue";
import ListItemsVue from "./components/ListItemsVue.vue";
import NewItemVue from "./components/NewItemVue.vue";
import MarkAllAsUnpackedVue from "./components/MarkAllAsUnpackedVue.vue";

import {
  getInitalItems,
  createItem,
  filterItems,
  removeItems,
  updateItems,
} from "./items";

const items = ref(getInitalItems());

const remove = (id) => {
  const newItems = removeItems(id, items.value);
  items.value = newItems;
};

const update = (emittedData) => {
  const [updated, id] = emittedData;
  const newItems = updateItems(id, items.value, updated);
  items.value = newItems;
};

const edit = (emittedData) => {
  const [updated, id] = emittedData;
  const newItems = updateItems(id, items.value, updated);
  items.value = newItems;
};

const add = (name) => {
  const item = createItem(name);
  items.value.push(item);
};

const updateAllAsUnpacked = () => {
  items.value = items.value.map((item) => {
    return { ...item, packed: false };
  });
};

// const packed = filterItems(items.value, { packed: true });
// const unPacked = filterItems(items.value, { packed: false });
</script>

<template>
  <HeaderVue :items="items" />

  <NewItemVue @add-item="(name) => add(name)" />
  <section>
    <div class="container lists">
      <ListItemsVue
        title="unpacked list"
        :items="filterItems(items, { packed: false })"
        @remove="(id) => remove(id)"
        @update="update"
        @edit="edit"
      />
      <ListItemsVue
        title="packed list"
        :items="filterItems(items, { packed: true })"
        @remove="(id) => remove(id)"
        @update="update"
        @edit="edit"
      />
    </div>
    <MarkAllAsUnpackedVue @update-all="updateAllAsUnpacked" />
  </section>
</template>

<style scoped>
.lists {
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 2rem;
}

@media (max-width: 720px) {
  .lists {
    flex-direction: column;
  }
}
</style>
