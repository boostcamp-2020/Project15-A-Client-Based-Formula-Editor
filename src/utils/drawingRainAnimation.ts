import { canvasX } from './setColor';

/* eslint-disable no-plusplus */
const RAIN_NUM = 100;
let width: number;
let height: number;
let context: CanvasRenderingContext2D;
let animationId: any;
let rainArr: Array<any> = [];
const initRain = () => {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const distance = Math.floor(Math.random() * 3 + 1);
  const rainLength = Math.floor(Math.random() * 5 + 1);

  context.beginPath();
  context.strokeStyle = '#dfdfdf';
  context.moveTo(x, y);
  context.lineTo(x, y + rainLength);
  context.lineWidth = 1;
  context.stroke();
  rainArr.push({ x, y, distance, rainLength });
};
const moveRain = (x: number, y: number, length: number) => {
  context.beginPath();
  context.strokeStyle = '#dfdfdf';
  context.moveTo(x, y);
  context.lineTo(x, y + length);
  context.lineWidth = 1;
  context.stroke();
};
const drawRain = () => {
  animationId = requestAnimationFrame(drawRain);
  context.clearRect(0, 0, width, height);
  context.fillStyle = '#505652';
  context.fillRect(0, 0, width, height);
  for (let i = 0; i < RAIN_NUM; i++) {
    const rain = rainArr[i];
    rain.y += rain.distance;
    if (rain.y > height) {
      rain.y = 0;
      rain.distance = Math.floor(Math.random() * 3 + 1);
    }
    moveRain(rain.x, rain.y, rain.rainLength);
  }
};
export const drawingRain = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) => {
  width = w;
  height = h;
  context = ctx;
  context.clearRect(0, 0, width, height);
  context.fillStyle = '#505652';
  context.fillRect(0, 0, width, height);
  rainArr = [];
  for (let i = 0; i < RAIN_NUM; i++) {
    initRain();
  }
  drawRain();
};
