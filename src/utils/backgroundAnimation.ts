/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
const SNOW_NUM = 100;
let width: number;
let height: number;
let context: CanvasRenderingContext2D;
let backGround: boolean;
let animationId: any;
let snowArr: Array<any> = [];
const initSnow = () => {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const distance = Math.floor(Math.random() * 3 + 1);
  const randomRadius = Math.floor(Math.random() * 2 + 1);
  const g = context.createRadialGradient(x, y, 0, x, y, randomRadius);
  g.addColorStop(0, 'hsla(255,255%,255%,0)');
  g.addColorStop(1, 'hsla(255,255%,255%,1)');
  context.beginPath();
  context.moveTo(x, y);
  context.fillStyle = g;

  context.arc(x, y, randomRadius, 0, Math.PI * 2, false);
  context.fill();
  snowArr.push({ x, y, randomRadius, g, distance });
};

const moveSnow = (x: number, y: number, r: number) => {
  const g = context.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0, 'hsla(255,255%,255%,0)');
  g.addColorStop(1, 'hsla(255,255%,255%,1)');
  context.moveTo(x, y);
  context.fillStyle = g;
  context.beginPath();
  context.arc(x, y, r, 0, Math.PI * 2, false);
  context.fill();
};

export const fallingSnow = () => {
  animationId = requestAnimationFrame(fallingSnow);

  context.clearRect(0, 0, width, height);
  context.fillStyle = 'rgba(0,0,0,0.7)';
  context.fillRect(0, 0, width, height);
  context.fill();
  for (let i = 0; i < SNOW_NUM; i++) {
    const snow = snowArr[i];
    snow.x += snow.distance * 0.8;
    snow.y += snow.distance;
    if (snow.x > width) {
      snow.x = 0;
      snow.distance = Math.floor(Math.random() * 3 + 1);
    }
    if (snow.y > height) {
      snow.y = 0;
      snow.distance = Math.floor(Math.random() * 3 + 1);
    }
    moveSnow(snow.x, snow.y, snow.randomRadius);
  }
};

export const drawingSnow = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  background: boolean
) => {
  width = w;
  height = h;
  context = ctx;
  backGround = background;
  context.fillStyle = 'rgba(0,0,0,0.7)';
  context.fillRect(0, 0, width, height);
  snowArr = [];
  for (let i = 0; i < SNOW_NUM; i++) {
    initSnow();
  }
  fallingSnow();
};

export const deleteWinterAnimation = () => {
  console.log(animationId);
  cancelAnimationFrame(animationId);
};
