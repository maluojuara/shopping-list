const item = document.getElementById("input-item");
const buttonAddItem = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list");
let count = 0;

buttonAddItem.addEventListener("click", addItem);

function addItem(event) {
    event.preventDefault();
    
    const itemList = document.createElement("li");
    const containerItemList = document.createElement("div");
    containerItemList.classList.add("item-list-container");

    const containerItemName = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + count++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function(event) {
        const checkboxInput = event.currentTarget.querySelector(".checkbox-input");
        const customCheckbox = event.currentTarget.querySelector(".checkbox-custom");

        if (checkboxInput.checked) {
            customCheckbox.classList.add("checked");
        } else {
            customCheckbox.classList.remove("checked");
        }
    })
    
    const customCheckbox = document.createElement("div");
    customCheckbox.classList.add("checkbox-custom");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(customCheckbox);

    containerCheckbox.appendChild(checkboxLabel);
    containerItemName.appendChild(containerCheckbox);

    const itemName = document.createElement("p");
    itemName.innerText = item.value;
    containerItemName.appendChild(itemName);

    const containerButtons = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button-action");

    const deleteImg = document.createElement("img");
    deleteImg.src = "img/delete.svg";
    deleteImg.alt = "Delete item";

    deleteButton.appendChild(deleteImg);
    containerButtons.appendChild(deleteButton);

    const editButton = document.createElement("button");
    editButton.classList.add("button-action");

    const editImg = document.createElement("img");
    editImg.src = "img/edit.svg";
    editImg.alt = "Edit item";

    editButton.appendChild(editImg);
    containerButtons.appendChild(editButton);

    containerItemList.appendChild(containerItemName);
    containerItemList.appendChild(containerButtons);
    itemList.appendChild(containerItemList);
    shoppingList.appendChild(itemList);
}