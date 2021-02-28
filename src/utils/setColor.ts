/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
const setColor = (e: EventTarget, context: CanvasRenderingContext2D) => {
  const e1 = e as HTMLElement;
  const colorVal = e1.getAttribute('color');
  context.fillStyle = colorVal;
  return [colorVal, context];
};
export const canvasX = (clientX: number, canvas: HTMLCanvasElement) => {
  const bound = canvas.getBoundingClientRect();
  return (clientX - bound.left) * (canvas.width / bound.width);
};

export const canvasY = (clientY: number, canvas: HTMLCanvasElement) => {
  const bound = canvas.getBoundingClientRect();
  return (clientY - bound.top) * (canvas.height / bound.height);
};

export default setColor;
