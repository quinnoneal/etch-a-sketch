function createGrid() {
    const gridContainer = document.querySelector('.grid-container');

    for(let i = 0; i < 16; i++) {
        const colDiv = document.createElement('div');
        colDiv.classList.add(`col-${i}`);
        for(let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add(`row-${i}`);
            colDiv.appendChild(square);
        }
        gridContainer.appendChild(colDiv);
    }
}

createGrid();