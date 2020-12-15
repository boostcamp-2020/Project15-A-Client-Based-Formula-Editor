import rainImageData from '@src/utils/svg/background/비배경화면.jpg';
import { rainProps } from '@src/@types/animation';
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const RAIN_NUM = 200;
let width: number;
let height: number;
let context: CanvasRenderingContext2D;
let animationId: number;

let rainArr: Array<rainProps> = [];

const makeLine = (x: number, y: number, length: number) => {
  context.beginPath();
  context.strokeStyle = '#dfdfdf';
  context.moveTo(x, y);
  context.lineTo(x, y + length);
  context.lineWidth = 1;
  context.stroke();
};

const initRain = () => {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const distance = Math.floor(Math.random() * 20 + 1);
  const rainLength = Math.floor(Math.random() * 20 + 1);
  makeLine(x, y, rainLength);
  rainArr.push({ x, y, distance, rainLength });
};

const moveRain = (x: number, y: number, length: number) => {
  makeLine(x, y, length);
};

const makeImage = () => {
  const rainImage = new Image();
  rainImage.src = rainImageData;
  return rainImage;
};

const calculateRain = (rain: rainProps) => {
  rain.y += rain.distance;
  if (rain.y > height) {
    rain.y = 0;
    rain.distance = Math.floor(Math.random() * 20 + 1);
  }
  return rain.y;
};

const drawRain = () => {
  animationId = requestAnimationFrame(drawRain);
  context.clearRect(0, 0, width, height);
  const rainImage = makeImage();
  context.drawImage(rainImage, 0, 0, width, height);
  context.fill();
  for (let i = 0; i < RAIN_NUM; i++) {
    const rain = rainArr[i];
    const y = calculateRain(rain);
    moveRain(rain.x, y, rain.rainLength);
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
  context.fillRect(0, 0, width, height);
  rainArr = [];
  for (let i = 0; i < RAIN_NUM; i++) {
    initRain();
  }
  drawRain();
};

export const deleteSummerAnimation = () => {
  cancelAnimationFrame(animationId);
};
