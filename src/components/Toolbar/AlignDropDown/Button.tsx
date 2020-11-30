import React from 'react';
import AlignCenter from '@src/utils/svg/toolbar/align-center.svg';
import * as StyledComponent from './style';

interface Props {
  isAlign: boolean;
  onClick: () => void;
  fontAlign: string;
}
const AlignButton = ({ isAlign, onClick, fontAlign }: Props) => {
  return (
    <StyledComponent.ButtonContainer onClick={onClick}>
      <AlignCenter />
    </StyledComponent.ButtonContainer>
  );
};

export default AlignButton;
