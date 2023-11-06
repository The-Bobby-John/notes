import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class='container'>
    <canvas id='canvas' ></canvas> 
  </div>
`;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
let context: CanvasRenderingContext2D | null = null;
let scale = 1;
let offsetX = 0;
let offsetY = 0;

let cellSize = 40;

if (canvas) {
    context = canvas.getContext("2d");
}

function draw() {
    if (!canvas || !context) return;
    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;

    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGrid() {
    if (canvas && context) {
        context.strokeStyle = "rgb(229,231,235)";
        context.lineWidth = 1;
        context.beginPath();

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        for (
            let x = (offsetX % cellSize) * scale;
            x <= width;
            x += cellSize * scale
        ) {
            const source = x;
            context.moveTo(source, 0);
            context.lineTo(source, height);
        }

        for (
            let y = (offsetY % cellSize) * scale;
            y <= height;
            y += cellSize * scale
        ) {
            const destination = y;
            context.moveTo(0, destination);
            context.lineTo(width, destination);
        }
        context.stroke();
    }
}

window.addEventListener("load", () => {
    draw();
    drawGrid();
});

window.addEventListener("resize", () => {
    draw();
    drawGrid();
});
