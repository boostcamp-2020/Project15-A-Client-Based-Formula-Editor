import React from 'react';
import * as StyleComponent from './style';

interface ButtonProps {
  color: string;
  Svg: string;
  onClick: () => void;
}
const ToolBarButton = ({ Svg, color, onClick }: ButtonProps) => {
  return (
    <>
      <StyleComponent.CustomButton color={color} onClick={onClick}>
        <Svg />
      </StyleComponent.CustomButton>
    </>
  );
};
export default ToolBarButton;
