const messageEmptyList = document.getElementById("message-empty-list");
const boughtContainer = document.getElementById("container-bought");

export function verifyEmptyList (list) {
    if (list.querySelectorAll("li").length === 0) {
        messageEmptyList.style.display = "block";
        boughtContainer.style.display = "none";
    } else {
        messageEmptyList.style.display = "none";
        boughtContainer.style.display = "block";
    }
}