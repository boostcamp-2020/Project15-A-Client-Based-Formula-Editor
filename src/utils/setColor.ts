const setColor = (e: EventTarget, context: any) => {
  const e1 = e as HTMLElement;
  const colorVal = e1.getAttribute('color');
  context.fillStyle = colorVal;
  return [colorVal, context];
};
export const moveHandler = (
  e: any,
  context: any,
  isClick: boolean,
  ref: any
) => {
  if (!context) return;
  if (!ref) return;
  const fillSize = ref.value;
  context.beginPath();
  context.arc(e.clientX, e.clientY, fillSize, 0, Math.PI * 2, false);
  context.fill();
};
export default setColor;
