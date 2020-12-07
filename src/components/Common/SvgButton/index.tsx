import React from 'react';
import * as StyleComponent from './style';

interface ButtonProps {
  svgColor: string;
  Svg: string;
  onClick: () => void;
}

const SvgButton = ({ svgColor, Svg, onClick }: ButtonProps) => {
  return (
    <StyleComponent.CustomButton svgColor={svgColor} onClick={onClick}>
      <Svg />
    </StyleComponent.CustomButton>
  );
};

export default SvgButton;
