/* eslint-disable react/destructuring-assignment */
import React, { RefObject } from 'react';
import * as StyledComponent from './style';

interface ButtonProps {
  backgroundCanvas: RefObject<HTMLCanvasElement>;
  show: string;
}

const Canvas = ({ backgroundCanvas, show }: ButtonProps) => {
  return <StyledComponent.CanvasContainer ref={backgroundCanvas} show={show} />;
};
export default Canvas;
