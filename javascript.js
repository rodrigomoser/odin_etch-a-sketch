const mainContainer = document.querySelector(".mainContainer")
let isMouseDown = false;
document.addEventListener("mousedown", function(){isMouseDown = true;});
document.addEventListener("mouseup", function(){isMouseDown = false;});
mainContainer.addEventListener("mouseleave", function(){isMouseDown = false;});
mainContainer.addEventListener("dragstart", function(e){ e.preventDefault(); });


function getGridSize (){
    const inputElement = document.querySelector('#gridSizeSelector');
    let userGrid = inputElement.value;
    if (userGrid > 100 || userGrid < 1){
        alert("Invalid Number. Try Between 1 and 100.")
    } else {
        return parseInt(userGrid);
    }
}

function createGrid (gridSize) {
    mainContainer.innerHTML = "";

    for (let i = 0; i < gridSize; i++){
    const gridRow = document.createElement('div');
    gridRow.className = 'gridRow';
    mainContainer.appendChild(gridRow);

        for (let i = 0; i < gridSize; i++){
        const gridCell = document.createElement('div');
        gridCell.className = 'gridCell';
        gridCell.dataset.opacity = "0.0";
        gridRow.appendChild(gridCell);
        gridCell.addEventListener("mouseover", paintCell);
        }
    }
}

function initialGrid(){
   createGrid(16)
}

function paintCell(evt){
    if (isMouseDown === true){
    let opacity = parseFloat(evt.target.dataset.opacity);
    opacity = Math.min(opacity + 0.1, 1.0);
    evt.target.dataset.opacity = opacity;
    evt.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    }
}

function clearGrid (){
    const inputElement = document.querySelector('#gridSizeSelector');
    let userGrid = inputElement.value;
    if (userGrid == 0){
        createGrid(16)
    } else {
    createGrid(getGridSize());}
}

initialGrid();
document.querySelector('#createGrid').addEventListener("click", function() {createGrid(getGridSize());});
document.querySelector('#clearGrid').addEventListener("click", function() {clearGrid()})
