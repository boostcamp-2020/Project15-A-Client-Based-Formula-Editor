import React from 'react';
import colorList from '@src/constants/colorList';
import * as StyleComponent from './style';

interface Props {
  onClick: (color: string) => void;
}
const DropdownContent = ({ onClick }: Props) => {
  return (
    <StyleComponent.DropdownContainer>
      <StyleComponent.RowContainer>
        {colorList.map((color) => {
          return (
            <StyleComponent.ColorBox
              key={`colorbox-${color}`}
              color={color}
              onClick={() => onClick(color)}
            />
          );
        })}
      </StyleComponent.RowContainer>
    </StyleComponent.DropdownContainer>
  );
};

export default DropdownContent;
