const boughtItemsList = document.getElementById("bought-items-list");
let count = 0;

export function createItem(item) {
    const itemList = document.createElement("li");
    const containerItemList = document.createElement("div");
    containerItemList.classList.add("item-list-container");

    const containerItemName = document.createElement("div");
    containerItemName.classList.add("container-name");

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
        const itemName = event.currentTarget.closest("li").querySelector("#item-name");

        if (checkboxInput.checked) {
            customCheckbox.classList.add("checked");
            itemName.style.textDecoration = "line-through";
            boughtItemsList.appendChild(itemList);
        } else {
            customCheckbox.classList.remove("checked");
            itemName.style.textDecoration = "none";
            shoppingList.appendChild(itemList);
        }
    })
    
    const customCheckbox = document.createElement("div");
    customCheckbox.classList.add("checkbox-custom");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(customCheckbox);

    containerCheckbox.appendChild(checkboxLabel);
    containerItemName.appendChild(containerCheckbox);

    const itemName = document.createElement("p");
    itemName.id = "item-name";
    itemName.innerHTML = item;
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

    const itemDate = document.createElement("p");
    itemDate.innerText = `${new Date().toLocaleDateString("en-US", { weekday: "long"})} (${new Date().toLocaleDateString()}) at ${new Date().toLocaleTimeString("en-US", { hour12: true, hour: 'numeric', minute: 'numeric'})}`;

    itemDate.classList.add("item-list-date");

    itemList.appendChild(containerItemList);
    itemList.appendChild(itemDate);

    return itemList;
}