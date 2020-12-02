import React from 'react';
import Handle from './Handle';
import * as StyleComponent from './style';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function LaTeXSection({ value, onChange }: Props) {
  return (
    <>
      <Handle />
      <StyleComponent.Content>
        <textarea value={value} onChange={onChange} />
      </StyleComponent.Content>
    </>
  );
}
