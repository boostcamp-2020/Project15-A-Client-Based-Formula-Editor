import React from 'react';
import AlignCenter from '@src/utils/svg/toolbar/align-center.svg';
import * as StyledComponent from './style';

interface Props {
  onClick: () => void;
}
const AlignButton = ({ onClick }: Props) => {
  return (
    <StyledComponent.ButtonContainer onClick={onClick}>
      <AlignCenter />
    </StyledComponent.ButtonContainer>
  );
};

export default AlignButton;
