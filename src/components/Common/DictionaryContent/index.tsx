import React from 'react';
import { addStyles, StaticMathField } from 'react-mathquill';
import * as StyleComponent from './style';

addStyles();
interface Props {
  latex: string;
  name: string;
  width: string;
  height: string;
  onClick?: () => void;
}

export const DictionaryContent = ({
  latex,
  name,
  width,
  height,
  onClick,
}: Props) => {
  const opacity = 1;

  return (
    <>
      <StyleComponent.InputLatexContent
        width={width}
        height={height}
        opacity={opacity}
        onClick={onClick}
      >
        <div>
          <StaticMathField>{latex}</StaticMathField>
        </div>
      </StyleComponent.InputLatexContent>
    </>
  );
};
