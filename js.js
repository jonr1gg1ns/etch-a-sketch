
const container16 = document.querySelector(".container16");
function makeGrid(rows, columns) {
    container16.innerHTML = "";

    
    const containerSize = Math.min(window.innerWidth, window.innerHeight) * 0.7; 
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

        cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";}) 
        container16.appendChild(cell);
    }
}


function grid() {
    makeGrid(16, 16);
}

grid();

window.addEventListener("resize", () => grid());
const title = document.querySelector(".title")
const button1 = document.createElement("button");
button1.classList.add("button1")
button1.textContent = "Choose number of squares";
const body = document.querySelector(".body")
body.appendChild(button1);
document.body.prepend(button1);
document.body.prepend(title);
function buttonPress () {
    let gridSize = parseInt(prompt("Choose grid size 1-100:"), 10);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Numbers between 1-100 only please.");
        return;
    }

    makeGrid(gridSize, gridSize);

    



}


grid();

button1.addEventListener("click", buttonPress);

window.addEventListener("resize", () => grid())

const button2 = document.createElement("button");
button2.classList.add("button2");
button2.textContent = "Reset";

body.appendChild(button2);

button2.addEventListener("click", () => makeGrid(16, 16))
