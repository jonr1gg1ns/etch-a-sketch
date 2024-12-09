const container16 = document.querySelector(".container16");

function makeGrid(rows, columns) {
    container16.innerHTML = "";

    
    const containerSize = Math.min(window.innerWidth, window.innerHeight) * 0.8; 
    container16.style.width = `${containerSize}px`;
    container16.style.height = `${containerSize}px`;

    const cellSize = containerSize / rows; 

    container16.style.display = "flex";
    container16.style.flexWrap = "wrap";

    for (let i = 0; i < rows * columns; i++) {
        let cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        container16.appendChild(cell);
    }
}

function grid() {
    makeGrid(16, 16);
}

grid();

window.addEventListener("resize", () => grid());



