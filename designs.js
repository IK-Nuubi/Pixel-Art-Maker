// A little design on the page header
const mainHeading = document.querySelector("h1");
mainHeading.style.cssText = "color: red; background-color: white; font-family: comic-sans"; 


let pixelCanvas = {};


pixelCanvas.getInputs = function() {
    // Select grid size inputs and make them letiables
    let height = document.querySelector("#inputHeight");
    let width = document.querySelector("#inputWidth");
    // define the submit into a button.
    const button = document.querySelector("input[type=submit]");

    // Add an event listener to the button and also add the make grid function
    button.addEventListener("click", function(e) {
        e.preventDefault();
        let widthValue = width.value;
        let heightValue = height.value;
        pixelCanvas.makeGrid(widthValue, heightValue);
    });
};

// Your code goes here:
pixelCanvas.makeGrid = function(width, height) {
    const gridTable = document.getElementById("pixelCanvas");
    gridTable.innerHTML = "";
    let gridColor = document.querySelector("#colorPicker");
    for (i = 0; i < height; i++){
        let tr = document.createElement("tr");
        for (let j = 0; j < width; j++) {
            let td = document.createElement("td");
            td.classList.add("grid");
            tr.appendChild(td);
        }
        gridTable.appendChild(tr);
    }

    gridTable.addEventListener("click", function(evt) {
        if (evt.target.nodeName === "TD") {
            let td = evt.target;
            td.style.backgroundColor = gridColor.value;
        }
    })
};


pixelCanvas.getInputs()
