export const editItem = (element) => {
    let newItemName = prompt("Type the new item name:");

    if (newItemName !== null && newItemName.trim() !== "") {
        const itemName = element.querySelector("#item-name");
        const itemDate = element.querySelector(".item-list-date");
        itemName.textContent = newItemName;
        itemDate.innerText = `Edited on ${new Date().toLocaleDateString("en-US", { weekday: "long"})} (${new Date().toLocaleDateString()}) at ${new Date().toLocaleTimeString("en-US", { hour12: true, hour: 'numeric', minute: 'numeric'})}`;

        const wasBought = element.querySelector(".checkbox-input").checked;

        if (wasBought) {
            element.querySelector(".checkbox-input").checked = true;
            element.querySelector(".checkbox-custom").classList.add("checked");
            itemName.style.textDecoration = "line-through";
        }

    }
}