import React from 'react';
import * as StyleComponent from './style';

interface Props {
  onClick: () => void;
  fontColor: string;
  isActive: boolean;
}
const FontColorButton = ({ onClick, isActive, fontColor }: Props) => {
  return (
    <StyleComponent.DropdownButton onClick={onClick}>
      {isActive ? (
        <>
          <div className="title">A</div>
          <StyleComponent.ColorBlind active />
        </>
      ) : (
        <>
          <div className="title">A</div>
          <StyleComponent.ColorBlind color={fontColor} />
        </>
      )}
    </StyleComponent.DropdownButton>
  );
};

export default FontColorButton;
