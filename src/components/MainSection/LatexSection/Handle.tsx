import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import XButton from '@src/utils/svg/latex/x_button.svg';
import NullPreviewPng from '@src/utils/svg/latex/nullPreview.png';
import * as StyleComponent from './style';

export default function Handle() {
  const [{ isDragging }, drag, resizePreview] = useDrag({
    item: { type: 'resize' },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <>
      <DragPreviewImage connect={resizePreview} src={NullPreviewPng} />
      <StyleComponent.Handle ref={drag}>
        <div>LaTeX</div>
        <div className="x-button">
          <XButton />
        </div>
      </StyleComponent.Handle>
    </>
  );
}
