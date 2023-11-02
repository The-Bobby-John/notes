import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class='container'>
    <canvas id='canvas' ></canvas> 
  </div>
`;

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

let context: CanvasRenderingContext2D | null = null;

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

window.addEventListener("load", () => {
    draw();
});

window.addEventListener("resize", draw);
