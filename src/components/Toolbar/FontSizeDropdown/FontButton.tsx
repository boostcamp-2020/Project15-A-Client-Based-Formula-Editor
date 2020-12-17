import React from 'react';
import { RoundButton } from '@src/components/Common/RoundButton/style';

interface Props {
  changeStatus: () => void;
  selectedFontSize: number;
}

const FontButton = ({ changeStatus, selectedFontSize }: Props) => {
  const onClickHandler = () => {
    changeStatus();
  };

  return (
    <RoundButton onClick={onClickHandler}>
      <div className="title">{selectedFontSize}</div>
    </RoundButton>
  );
};
export default FontButton;
