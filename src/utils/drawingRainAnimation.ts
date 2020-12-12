const SNOW_NUM = 100;
let width: number;
let height: number;
let context: CanvasRenderingContext2D;
let animationId: any;
const snowArr: Array<any> = [];
export const drawingRain = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) => {
  width = w;
  height = h;
  context = ctx;
  context.clearRect(0, 0, width, height);
  context.fillStyle = 'rgba(0,0,0,0.1)';
  context.fillRect(0, 0, width, height);
};
