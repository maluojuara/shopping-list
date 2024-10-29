import { addItem } from "./js/addItem.js";

const buttonAddItem = document.getElementById("add-button");
buttonAddItem.addEventListener("click", addItem);

// checkboxLabel.addEventListener("click", function(event) {
//     const checkboxInput = event.currentTarget.querySelector(".checkbox-input");
//     const customCheckbox = event.currentTarget.querySelector(".checkbox-custom");

//     if (checkboxInput.checked) {
//         customCheckbox.classList.add("checked");
//     } else {
//         customCheckbox.classList.remove("checked");
//     }
// })