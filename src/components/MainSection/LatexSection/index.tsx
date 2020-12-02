import React from 'react';
import Handle from './Handle';
import * as StyleComponent from './style';

export default function LaTeXSection() {
  return (
    <>
      <Handle />
      <StyleComponent.Content>
        <textarea />
      </StyleComponent.Content>
    </>
  );
}
