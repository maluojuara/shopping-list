export function createDate() {
    const itemDate = document.createElement("p");
    itemDate.innerText = `Created on ${new Date().toLocaleDateString("en-US", { weekday: "long"})} (${new Date().toLocaleDateString()}) at ${new Date().toLocaleTimeString("en-US", { hour12: true, hour: 'numeric', minute: 'numeric'})}`;
    itemDate.classList.add("item-list-date");

    return itemDate;
}
