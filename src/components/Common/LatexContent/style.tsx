import styled from 'styled-components';
import colors from '@src/utils/colors';
import React from 'react';

interface LatexProps {
  width: string;
  height: string;
  opacity: number;
}
export const InputLatexContent = React.memo(styled.div<LatexProps>`
  flex: auto;
  display: flex;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 1px dashed ${colors.borderGrey};
  opacity: ${(props) => props.opacity};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    background-color: ${colors.lightGrey};
  }
`);
