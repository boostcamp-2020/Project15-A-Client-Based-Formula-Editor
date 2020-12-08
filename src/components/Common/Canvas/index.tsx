import React, { forwardRef } from 'react';
import * as StyledComponent from './style';

const Canvas = ({ backgroundCanvas }: any) => {
  return <StyledComponent.CanvasContainer ref={backgroundCanvas} />;
};
export default Canvas;
