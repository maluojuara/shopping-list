import { createItem } from "./createItem.js";

const item = document.getElementById("input-item");
const shoppingList = document.getElementById("shopping-list");

export function addItem(event) {
    event.preventDefault();

    const itemList = createItem(item.value);
    shoppingList.appendChild(itemList);
}