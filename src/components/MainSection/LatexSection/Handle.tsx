import React from 'react';
import { useDrag } from 'react-dnd';
import XButton from '@src/utils/svg/latex/x_button.svg';
import * as StyleComponent from './style';

export default function Handle() {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'resize' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <>
      <StyleComponent.Handle ref={drag}>
        <div>LaTeX</div>
        <div className="x-button">
          <XButton />
        </div>
      </StyleComponent.Handle>
    </>
  );
}
