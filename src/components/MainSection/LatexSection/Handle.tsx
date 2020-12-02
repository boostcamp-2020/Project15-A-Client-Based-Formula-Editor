import React from 'react';
import { useDrag } from 'react-dnd';
import * as StyleComponent from './style';

export default function Handle() {
  return (
    <>
      <StyleComponent.Handle>
        <div>^</div>
      </StyleComponent.Handle>
    </>
  );
}
