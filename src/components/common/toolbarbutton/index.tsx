import React from 'react';
import * as S from './style';

interface ButtonProps {
  color: string;
  Svg: string;
  width: string;
  height: string;
}
const ToolBarButton: React.FC<ButtonProps> = ({
  Svg,
  width,
  height,
  color,
}: ButtonProps) => {
  return (
    <>
      <S.CustomButton color={color} width={width} height={height}>
        <Svg />
      </S.CustomButton>
    </>
  );
};
export default ToolBarButton;
