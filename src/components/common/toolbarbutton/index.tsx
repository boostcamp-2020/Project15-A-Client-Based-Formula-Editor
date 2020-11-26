import React from 'react';
import * as StyleComponent from './style';

interface ButtonProps {
  color: string;
  Svg: string;
  width: string;
  height: string;
  onClick: () => void;
}
const ToolBarButton = ({ Svg, width, height, color, onClick }: ButtonProps) => {
  return (
    <>
      <StyleComponent.CustomButton
        color={color}
        width={width}
        height={height}
        onClick={onClick}
      >
        <Svg />
      </StyleComponent.CustomButton>
    </>
  );
};
export default ToolBarButton;
