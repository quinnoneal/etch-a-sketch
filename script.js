function createGrid(size) {
    const gridContainer = document.querySelector('.grid-container');

    for(let i = 0; i < size; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add(`col-${i}`);
        for(let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add(`col-${i}`);
            square.classList.add(`row-${j}`);
            colDiv.appendChild(square);
        }
        gridContainer.appendChild(colDiv);
    }
}

createGrid(16);
initializeDrawing();

// setup custom grid size button
const changeGridSizeBtn = document.querySelector('.grid-size-button');
changeGridSizeBtn.addEventListener('click', () => {
    const size = Number(prompt("Enter Grid Size"));
    // reset current grid
    removeCurrentGrid();
    createGrid(size);
    initializeDrawing();
})

// drawing funcionality
function initializeDrawing() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
    })    
}

function removeCurrentGrid() {
    const gridContainer = document.querySelector('.grid-container');
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}