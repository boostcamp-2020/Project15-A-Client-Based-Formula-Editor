import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { useDrag } from 'react-dnd';
import Svg from '@src/components/Common/Svg';
import * as StyleComponent from './style';

interface Props {
  latex: string;
  name: string;
  svg: any;
  width: string;
  height: string;
  onClick?: () => void;
}

export const LatexContent = ({
  latex,
  name,
  svg,
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
        <Svg Svg={svg} />
      </StyleComponent.InputLatexContent>
    </>
  );
};
