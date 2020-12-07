const setColor = (e: EventTarget) => {
  const e1 = e as HTMLElement;
  const colorVal = e1.getAttribute('color');
  return colorVal;
};
export const moveHandler = () => {
  console.log('?');
};
export default setColor;
