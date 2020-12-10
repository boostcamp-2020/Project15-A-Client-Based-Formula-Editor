import React from 'react';
import Button from '@src/components/Common/Button';
import colors from '@src/utils/colors';
import * as StyledComponent from './style';

interface ButtonProps {
  color: string;
  value: string;
  onClick: () => void;
}

const SaveButtons = ({ color, value, onClick }: ButtonProps) => {
  const onClickImageSaveHandler = async () => {
    console.log('hi');
  };
  return (
    <StyledComponent.SaveButtonContainer>
      <StyledComponent.MiniButton>
        <span className="text">전체</span>
        <span className="text">저장</span>
      </StyledComponent.MiniButton>
      <StyledComponent.MiniButton>
        <span className="text">부분</span>
        <span className="text">저장</span>
      </StyledComponent.MiniButton>
    </StyledComponent.SaveButtonContainer>
  );
};

export default SaveButtons;
