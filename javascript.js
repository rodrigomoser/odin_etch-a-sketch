const mainContainer = document.querySelector(".mainContainer")

function getGridSize (){
    const inputElement = document.querySelector('#gridSizeSelector');
    let userGrid = inputElement.value;
    return parseInt(userGrid);
}

function createGrid () {
    mainContainer.innerHTML = "";
    let gridSize = getGridSize ();
    for (let i = 0; i < gridSize; i++){
    const gridRow = document.createElement('div');
    gridRow.className = 'gridRow';
    mainContainer.appendChild(gridRow);
        for (let i = 0; i < gridSize; i++){
        const gridCell = document.createElement('div');
        gridCell.className = 'gridCell';
        gridRow.appendChild(gridCell);
        }
    }
}

document.querySelector('#createGrid').addEventListener("click", createGrid);


