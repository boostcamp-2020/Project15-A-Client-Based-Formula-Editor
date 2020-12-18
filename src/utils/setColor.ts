/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
const setColor = (e: EventTarget, context: any) => {
  const e1 = e as HTMLElement;
  const colorVal = e1.getAttribute('color');
  context.fillStyle = colorVal;
  return [colorVal, context];
};
export const canvasX = (clientX: any, canvas: any) => {
  const bound = canvas.getBoundingClientRect();
  return (clientX - bound.left) * (canvas.width / bound.width);
};

export const canvasY = (clientY: any, canvas: any) => {
  const bound = canvas.getBoundingClientRect();
  return (clientY - bound.top) * (canvas.height / bound.height);
};

export default setColor;
