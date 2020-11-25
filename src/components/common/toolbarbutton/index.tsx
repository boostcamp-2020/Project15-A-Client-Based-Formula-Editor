import React from 'react';
import * as S from './style';

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
      <S.CustomButton
        color={color}
        width={width}
        height={height}
        onClick={onClick}
      >
        <Svg />
      </S.CustomButton>
    </>
  );
};
export default ToolBarButton;
