/* eslint-disable no-param-reassign */
const setColor = (e: EventTarget, context: any) => {
  const e1 = e as HTMLElement;
  const colorVal = e1.getAttribute('color');
  context.fillStyle = colorVal;
  return [colorVal, context];
};
const canvasX = (clientX: any, canvas: any) => {
  const bound = canvas.getBoundingClientRect();
  return (clientX - bound.left) * (canvas.width / bound.width);
};

const canvasY = (clientY: any, canvas: any) => {
  const bound = canvas.getBoundingClientRect();
  console.log(bound);
  return (clientY - bound.top) * (canvas.height / bound.height);
};

export const moveHandler = (
  e: any,
  canvas: any,
  context: any,
  inputRef: any
) => {
  if (!context) return;
  if (!inputRef) return;
  const fillSize = inputRef.value;
  context.beginPath();
  const x = canvasX(e.clientX, canvas);
  const y = canvasY(e.clientY, canvas);
  context.arc(x, y, fillSize, 0, Math.PI * 2, false);
  context.fill();
};

export default setColor;
