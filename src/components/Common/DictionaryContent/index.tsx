/* eslint-disable react/require-default-props */
import React from 'react';
import { addStyles, StaticMathField } from 'react-mathquill';
import * as StyleComponent from './style';

addStyles();
interface Props {
  latex: string;
  width: string;
  height: string;
  onClick?: () => void;
}

export const DictionaryContent = ({ latex, width, height, onClick }: Props) => {
  return (
    <>
      <StyleComponent.InputLatexContent
        width={width}
        height={height}
        onClick={onClick}
      >
        <div>
          <StaticMathField>{latex}</StaticMathField>
        </div>
      </StyleComponent.InputLatexContent>
    </>
  );
};
