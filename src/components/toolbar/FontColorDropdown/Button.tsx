import React from 'react';
import FontColorIcon from '@src/utils/svg/font-color.svg';
import FontColorActiveIcon from '@src/utils/svg/font-color-active.svg';
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
          <FontColorActiveIcon />
          <StyleComponent.ColorBlind active />
        </>
      ) : (
        <>
          <FontColorIcon />
          <StyleComponent.ColorBlind color={fontColor} />
        </>
      )}
    </StyleComponent.DropdownButton>
  );
};

export default FontColorButton;
