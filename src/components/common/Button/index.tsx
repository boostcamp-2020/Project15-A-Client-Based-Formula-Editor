/* eslint-disable import/extensions */
import React from 'react';
import * as StyleComponent from './style';

interface ButtonProps {
  color: string;
  value: string;
}

const Button = ({ color, value }: ButtonProps) => {
  return (
    <>
      <StyleComponent.CustomButton color={color}>
        {value}
      </StyleComponent.CustomButton>
    </>
  );
};
export default Button;
