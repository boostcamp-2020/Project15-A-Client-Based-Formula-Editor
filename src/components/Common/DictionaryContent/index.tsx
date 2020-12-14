import React from 'react';
import { useDrag } from 'react-dnd';
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
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'box', latex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;

  return (
    <>
      <StyleComponent.InputLatexContent
        ref={drag}
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
