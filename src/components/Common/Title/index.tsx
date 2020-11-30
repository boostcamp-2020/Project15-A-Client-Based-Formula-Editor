import React from 'react';
import * as StyledComponent from './style';

export interface NameProps {
  title?: string;
}

const Title = ({ title }: NameProps) => {
  return (
    <StyledComponent.TitleContainer>{title}</StyledComponent.TitleContainer>
  );
};

export default Title;
