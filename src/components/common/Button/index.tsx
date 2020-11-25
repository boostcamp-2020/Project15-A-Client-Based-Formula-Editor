/* eslint-disable import/extensions */
import React from 'react';
import * as S from './style';

interface ButtonProps {
  color: string;
  value: string;
}

const Button = ({ color, value }: ButtonProps) => {
  return (
    <>
      <S.CustomButton color={color}>{value}</S.CustomButton>
    </>
  );
};
export default Button;
