/* eslint-disable no-param-reassign */
const setColor = (e: EventTarget, context: any) => {
  const e1 = e as HTMLElement;
  const colorVal = e1.getAttribute('color');
  context.fillStyle = colorVal;
  return [colorVal, context];
};
export const moveHandler = (e: any, context: any, inputRef: any) => {
  if (!context) return;
  if (!inputRef) return;
  const fillSize = inputRef.value;
  context.beginPath();
  context.arc(e.clientX, e.clientY, fillSize, 0, Math.PI * 2, false);
  context.fill();
};

export default setColor;
