import { v4 as id } from "uuid";

export const createItem = (name) => {
  return {
    id: id(),
    packed: false,
    name: name,
  };
};

let items = [
  "Sweatshirt",
  "Running shoes",
  "AirPods",
  "MacBook",
  "iPad",
  "USB-C cable",
  "Wallet",
  "Apple Watch charger",
  "Toothbrush",
  "Toothpaste",
  "Deorderant",
  "Face masks",
].map(createItem);

const [first, second, third] = items;

first.packed = true;
second.packed = true;
third.packed = true;

export const getInitalItems = () => {
  return items;
};

export const removeItems = (id, items) => {
  return items.filter((item) => item.id !== id);
};

export const updateItems = (id, items, updates) => {
  return items.map((item) => {
    if (item.id === id) {
      return { ...item, ...updates };
    }
    return item;
  });
};

export const filterItems = (items, properties) => {
  return items.filter((item) => {
    for (const [filterKey, filterValue] of Object.entries(properties)) {
      if (filterKey === "name" && typeof filterValue === "string") {
        return item.name.toLowerCase().startsWith(filterValue.toLowerCase());
      }
      if (filterKey === "packed" && typeof filterValue === "boolean") {
        return item.packed === filterValue;
      }
    }
    return false;
  });
};

// export const filterItems = (
//   items: Item[] = [],
//   properties: Readonly<Partial<Item>>
// ) => {
//   return items.filter((item) => {
//     for (const [filterKey, filterValue] of Object.entries(properties)) {
//       if (filterKey === "name" && typeof filterValue === "string") {
//         return item.name.toLowerCase().startsWith(filterValue.toLowerCase());
//       }

//       if (filterKey === "packed" && typeof filterValue === "boolean") {
//         return item.packed === filterValue;
//       }
//     }
//     return false;
//   });
// };
