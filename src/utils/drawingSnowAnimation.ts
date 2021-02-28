/* eslint-disable no-param-reassign */
import snowImageData from '@src/utils/svg/background/눈배경화면.jpg';
import { SnowProps } from '@src/@types/animation';
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
const SNOW_NUM = 100;
let width: number;
let height: number;
let context: CanvasRenderingContext2D;
let animationId: number;

let snowArr: Array<SnowProps> = [];
const initSnow = () => {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const distance = Math.floor(Math.random() * 3 + 1);
  const randomRadius = Math.floor(Math.random() * 10 + 5);
  const g = context.createRadialGradient(x, y, 0, x, y, randomRadius);
  const t = Math.random() * (Math.PI * 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(1, 'rgba(255,255,255,0)');

  context.beginPath();
  context.moveTo(x, y);
  context.fillStyle = g;

  context.arc(x, y, randomRadius, 0, Math.PI * 2, false);
  context.fill();
  snowArr.push({ x, y, randomRadius, g, distance, t });
};

const moveSnow = (x: number, y: number, r: number) => {
  const g = context.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  context.moveTo(x, y);
  context.fillStyle = g;
  context.beginPath();
  context.arc(x, y, r, 0, Math.PI * 2, false);
  context.fill();
};

const makeImage = () => {
  const snowImage = new Image();
  snowImage.src = snowImageData;
  return snowImage;
};
const calculateSnow = (snow: SnowProps) => {
  snow.t = snow.t >= Math.PI * 2 ? 0 : snow.t;
  snow.x += Math.sin(snow.t) * snow.distance * 0.8;
  snow.y += snow.distance;
  if (snow.x > width) {
    snow.x = 0;
    snow.distance = Math.floor(Math.random() * 3 + 1);
  }
  if (snow.y > height) {
    snow.y = 0;
    snow.distance = Math.floor(Math.random() * 3 + 1);
  }
  return [snow.x, snow.y];
};
export const fallingSnow = () => {
  const snowImage = makeImage();

  animationId = requestAnimationFrame(fallingSnow);
  context.clearRect(0, 0, width, height);

  context.drawImage(snowImage, 0, 0, width, height);
  context.fillRect(0, 0, width, height);
  context.fill();
  for (let i = 0; i < SNOW_NUM; i++) {
    const snow = snowArr[i];
    const [x, y] = calculateSnow(snow);
    moveSnow(x, y, snow.randomRadius);
  }
};

export const drawingSnow = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number
) => {
  width = w;
  height = h;
  context = ctx;
  context.clearRect(0, 0, width, height);
  context.fillRect(0, 0, width, height);
  snowArr = [];
  for (let i = 0; i < SNOW_NUM; i++) {
    initSnow();
  }

  fallingSnow();
};

export const deleteWinterAnimation = () => {
  cancelAnimationFrame(animationId);
};
