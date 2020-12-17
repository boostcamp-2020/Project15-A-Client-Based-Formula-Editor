import React from 'react';
import AlignLeft from '@src/utils/svg/toolbar/align-left.svg';
import AlignCenter from '@src/utils/svg/toolbar/align-center.svg';
import AlignRight from '@src/utils/svg/toolbar/align-right.svg';
import * as StyledComponent from './style';

interface AlignProps {
  onClick: () => void;
  fontAlign: string;
}
const AlignButton = ({ onClick, fontAlign }: AlignProps) => {
  return (
    <StyledComponent.ButtonContainer onClick={onClick}>
      {fontAlign === 'left' && <AlignLeft />}
      {fontAlign === 'center' && <AlignCenter />}
      {fontAlign === 'right' && <AlignRight />}
    </StyledComponent.ButtonContainer>
  );
};

export default AlignButton;
