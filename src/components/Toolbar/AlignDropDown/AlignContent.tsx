import React from 'react';
import * as StyledComponent from './style';

interface AlignContentProps {
  align: string;
  changeAlign: (align: string) => void;
}
const AlignContent = ({ align, changeAlign }: AlignContentProps) => {
  return <StyledComponent.DropdownContainer />;
};

export default AlignContent;
