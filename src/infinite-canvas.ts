// export class InfinteCanvas {
//     canvas: HTMLCanvasElement | null = null;
//     context: CanvasRenderingContext2D | null = null;

//     constructor() {
//         const canvas = document.getElementById("canvas");
//         if (canvas && canvas instanceof HTMLCanvasElement) {
//             this.canvas = canvas;

//             const context = canvas.getContext("2d");

//             if (context) {
//                 this.context = context;
//                 this.draw();
//             }
//         }
//     }

//     draw() {
//         if (this.canvas && this.context) {
//             this.canvas.width = document.body.clientWidth;
//             this.canvas.height = document.body.clientHeight;
//             this.context.fillStyle = "white";
//             this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
//         }
//     }
// }
