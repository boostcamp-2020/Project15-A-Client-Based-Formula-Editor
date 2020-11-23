/* eslint-disable import/extensions */
import React from 'react';
import * as S from './style';

interface ButtonProps {
  color: string;
  value: string;
}

export default function Button({ color, value }: ButtonProps) {
  return (
    <>
      <S.CustomButton color={color}>{value}</S.CustomButton>
    </>
  );
}
