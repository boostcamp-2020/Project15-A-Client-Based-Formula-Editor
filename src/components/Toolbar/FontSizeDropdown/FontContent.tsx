import React from 'react';
import CheckIcon from '@src/utils/svg/toolbar/font-check.svg';
import * as StyledComponent from './style';

interface Props {
  fontSize: number;
  changeFontSize: (size: number) => void;
  selectedFontSize: number;
}

const FontContent = ({ fontSize, changeFontSize, selectedFontSize }: Props) => {
  const onClickHandler = () => {
    changeFontSize(fontSize);
  };

  let isSelected = false;
  if (fontSize === selectedFontSize) {
    isSelected = true;
  }

  return (
    <StyledComponent.Content onClick={onClickHandler} isSelected={isSelected}>
      <div className="number">{fontSize}</div>
      <CheckIcon />
    </StyledComponent.Content>
  );
};

export default React.memo(FontContent);
