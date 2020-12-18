import React from 'react';
import * as StyleComponent from './style';

interface Props {
  onClick: () => void;
  fontColor: string;
  fontColorDropdown: boolean;
}
const FontColorButton = ({ onClick, fontColorDropdown, fontColor }: Props) => {
  return (
    <StyleComponent.DropdownButton onClick={onClick}>
      {fontColorDropdown ? (
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
