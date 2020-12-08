/* eslint-disable no-plusplus */
const SNOW_NUM = 500;
const initSnow = (context: any, width: number, height: number) => {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const randomRadius = Math.floor(Math.random() * 2.4);
  const g = context.createRadialGradient(x, y, 0, x, y, randomRadius);
  g.addColorStop(0, 'rgba(255,255,255,0)');
  g.addColorStop(1, 'rgba(255,255,255,1)');
  context.moveTo(x, y);
  context.fillStyle = g;
  context.beginPath();
  context.arc(x, y, randomRadius, 0, Math.PI * 2, false);
  context.fill();
};
export const drawingSnow = (context: any, width: number, height: number) => {
  context.fillStyle = 'rgba(0,0,0,0.7)';
  context.fillRect(0, 0, width, height);
  for (let i = 0; i < SNOW_NUM; i++) {
    initSnow(context, width, height);
  }
};
