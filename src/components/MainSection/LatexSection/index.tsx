import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Handle from './Handle';
import * as StyleComponent from './style';

export default function LaTeXSection() {
  const [height, setHeight] = useState(0);
  const [, resizeDrop] = useDrop({
    accept: 'resize',
    hover(item, monitor) {
      const dy = height + monitor.getDifferenceFromInitialOffset().y / 100;
      setHeight(dy);
    },
  });

  const test = 304 - height;

  return (
    <>
      <Handle />
      <StyleComponent.Content>
        <textarea />
      </StyleComponent.Content>
    </>
  );
}
