function addDivs() {
    let numNodes = 10; // Need to get numNodes from WSB https/api call
    for(let i=0; i<numNodes; i++) {
        tempStockBox = document.createElement("DIV");
        tempStockBox.className = "stockBox";
        let tempText = "Water is good and i = " + i
        let textnode = document.createTextNode(tempText);
        tempStockBox.appendChild(textnode);
        tempStockBoxContainer = document.createElement("DIV");
        tempStockBoxContainer.className = "stockBoxContainer";
        tempStockBoxContainer.appendChild(tempStockBox);
        document.getElementById("stocksContainer").appendChild(tempStockBoxContainer);
    }
}
