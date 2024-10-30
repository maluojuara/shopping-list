import { createItem } from "./createItem.js";
import { verifyEmptyList } from "./verifyEmptyList.js";

const item = document.getElementById("input-item");
const shoppingList = document.getElementById("shopping-list");

export function addItem(event) {
    event.preventDefault();

    if (item.value === "" || item.value.trim() === "") {
        return;
    }

    const itemList = createItem(item.value);
    shoppingList.appendChild(itemList);
    verifyEmptyList(shoppingList);

    item.value = "";
}