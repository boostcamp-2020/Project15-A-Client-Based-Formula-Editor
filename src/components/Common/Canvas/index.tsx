import React from 'react';
import * as StyledComponent from './style';

const Canvas = ({ backgroundCanvas, show }: any) => {
  return <StyledComponent.CanvasContainer ref={backgroundCanvas} show={show} />;
};
export default Canvas;
