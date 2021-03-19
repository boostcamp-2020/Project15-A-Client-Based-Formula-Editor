/* eslint-disable react/require-default-props */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { useDrag } from 'react-dnd';
import Svg from '@src/components/Common/Svg';
import * as StyleComponent from './style';

interface Props {
  latex: string;
  name: string;
  svg: string;
  width: string;
  height: string;
  onClick?: () => void;
  isPossible?: boolean;
}

const LatexContent = ({
  latex,
  name,
  svg,
  width,
  height,
  onClick,
  isPossible,
}: Props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'box', latex, isPossible },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const { backgroundCanvas } = useSelector(
    (state: RootState) => state.backgroundDropdownReducer
  );
  const opacity = isDragging ? 0.4 : 1;
  useEffect(() => {
    if (backgroundCanvas.current === null) return;
    if (backgroundCanvas && isDragging) {
      const canvas = backgroundCanvas.current;
      const context = canvas.getContext('2d');
      context.strokeStyle = 'transparent';
    }
  }, [isDragging]);
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

export default React.memo(LatexContent);
