import React from 'react';
import Button from '@src/components/Common/Button';
import colors from '@src/utils/colors';
import { setCropContainer } from '@src/store/modules/getMathQuill';
import { useDispatch } from 'react-redux';
import * as StyledComponent from './style';

interface ButtonProps {
  color: string;
  value: string;
  onClick: () => void;
  saveClick: boolean;
}

const SaveButtons = ({ color, value, onClick, saveClick }: ButtonProps) => {
  const dispatch = useDispatch();
  const onClickImageSeveralSaveHandler = () => {
    dispatch(setCropContainer(true));
  };
  return (
    <StyledComponent.SaveButtonContainer saveClick={saveClick}>
      <StyledComponent.MiniButton>
        <span className="text">전체</span>
        <span className="text">저장</span>
      </StyledComponent.MiniButton>
      <StyledComponent.MiniButton onClick={onClickImageSeveralSaveHandler}>
        <span className="text">부분</span>
        <span className="text">저장</span>
      </StyledComponent.MiniButton>
    </StyledComponent.SaveButtonContainer>
  );
};

export default SaveButtons;
