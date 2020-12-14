import React from 'react';
import { useDrag } from 'react-dnd';
import * as StyleComponent from './style';

interface Props {
  latex: string;
  name: string;
  children: React.ReactNode;
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
  children,
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
        {children}
      </StyleComponent.InputLatexContent>
    </>
  );
};
