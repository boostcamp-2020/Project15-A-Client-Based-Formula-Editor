import React from 'react';
import GraphIcon from '@src/utils/svg/toolbar/graph.svg';
import * as StyledComponent from './style';

interface Props {
  onClick: () => void;
}
const GraphButton = ({ onClick }: Props) => {
  return (
    <StyledComponent.ButtonContainer onClick={onClick}>
      <GraphIcon />
    </StyledComponent.ButtonContainer>
  );
};

export default GraphButton;
