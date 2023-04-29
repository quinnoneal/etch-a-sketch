
function createGrid(size) {
    const gridContainer = document.querySelector('.grid-container');
    const squareSize = getSquareSize(size);

    for(let i = 0; i < size; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add(`col-${i}`);
        for(let j = 0; j < size; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            // name each square accordingly
            square.classList.add(`col-${i}`);
            square.classList.add(`row-${j}`);
            // size each square accordingly
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            colDiv.appendChild(square);
        }
        gridContainer.appendChild(colDiv);
    }
}

// drawing funcionality
function initializeDrawing() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        })
    })    
}

// removes old grid upon new sized grid
function removeCurrentGrid() {
    const gridContainer = document.querySelector('.grid-container');
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function getSquareSize(size) {
    const MAX_GRID_SIZE = 500;
    const pixelsPerSquare = MAX_GRID_SIZE / size;
    return pixelsPerSquare;
}

// init grid
createGrid(16);
initializeDrawing();

// setup grid size button
const changeGridSizeBtn = document.querySelector('.grid-size-button');
changeGridSizeBtn.addEventListener('click', () => {
    const size = Number(prompt("Enter Grid Size"));
    // reset current grid
    removeCurrentGrid();
    createGrid(size);
    initializeDrawing();
})