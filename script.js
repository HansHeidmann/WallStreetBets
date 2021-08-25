function addDivs() {
    let numNodes = 50; // Need to get numNodes from WSB https/api call
    for(let i=0; i<numNodes; i++) {
        tempStockBox = document.createElement("DIV");
        tempStockBox.className = "stockBox";
        let divID = "stockBox" + `${i}`;
        tempStockBox.setAttribute("id", divID);
        //let tempText = "Water is good and i = " + i
        //let textnode = document.createTextNode(tempText);
        //tempStockBox.appendChild(textnode);
        tempStockBoxContainer = document.createElement("DIV");
        tempStockBoxContainer.className = "stockBoxContainer";
        tempStockBoxContainer.appendChild(tempStockBox);
        document.getElementById("stocksContainer").appendChild(tempStockBoxContainer);
    }
}



function addJSON() {

    let xmlhttp = new XMLHttpRequest();
    let url = "https://dashboard.nbshare.io/api/v1/apps/reddit";

    xmlhttp.onreadystatechange = function()
    {

        console.log(JSON.stringify(xmlhttp.readyState));
        //console.log("test");
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            let myArray = JSON.parse(xmlhttp.responseText);
            populateDivs(myArray);
            //document.getElementById("stocksContainer").innerHTML = myArray;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    /*
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

        }
    }
    */

    function populateDivs(arr) {
        for (let i=0; i<arr.length; i++) {
            let divID = "stockBox" + `${i}`; // not used 
            let divTickerBoxStyle = "background-color:#002fa7; color:white; font-size:40px; border-radius:10px; padding:10px; margin-left:25%; margin-right:25%";
            let divHTML =   '<div style="' + divTickerBoxStyle + '">' +
                                arr[i].ticker +
                            '</div>' +
                            'STOCK: ' + arr[i].ticker + '<br>' +
                            'SENTIMENT: ' + arr[i].sentiment + '<br>' +
                            'SCORE: ' + arr[i].sentiment_score + '<br>' +
                            'COMMENTS: ' + arr[i].no_of_comments;

            document.getElementById(divID).innerHTML = divHTML;
        }

    }

}
