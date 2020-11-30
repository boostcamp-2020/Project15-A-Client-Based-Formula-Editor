import React from 'react';
import * as StyledComponent from './style';

interface Props {
  changeStatus: () => void;
  dropDown: string;
  selectedFontSize: number;
}

const FontButton = ({ changeStatus, dropDown, selectedFontSize }: Props) => {
  const onClickHandler = () => {
    changeStatus();
  };

  return (
    <StyledComponent.DropButton onClick={onClickHandler}>
      <div className="title">{selectedFontSize}</div>
    </StyledComponent.DropButton>
  );
};
export default FontButton;
