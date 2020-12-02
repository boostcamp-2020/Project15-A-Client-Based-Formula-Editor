import React from 'react';
import { useDrag } from 'react-dnd';
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
        <div>^</div>
      </StyleComponent.Handle>
    </>
  );
}
