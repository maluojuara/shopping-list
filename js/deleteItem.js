//Função anônima sendo colocada dentro de uma variável - usando arrow function

import { verifyEmptyList } from "./verifyEmptyList.js";
const shoppingList = document.getElementById("shopping-list");

const deleteItem = (element) => {
    let confirmation = confirm("Are you sure you want to delete this item?");

    if (confirmation) {
        element.remove();

        verifyEmptyList(shoppingList);
    }
}

export {deleteItem};