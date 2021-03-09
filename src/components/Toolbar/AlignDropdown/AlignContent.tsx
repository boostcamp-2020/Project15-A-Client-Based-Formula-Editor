import React from 'react';
import aligns from '@src/constants/align';
import SvgSection from '@src/components/Common/Svg';
import * as StyleComponent from './style';

interface AlignContentProps {
  changeAlign: (align: string) => void;
}

const AlignContent = ({ changeAlign }: AlignContentProps) => {
  return (
    <StyleComponent.DropdownContainer>
      <StyleComponent.RowContainer>
        {aligns.map((position) => {
          return (
            <StyleComponent.ColorBox
              key={`align-${position.id}`}
              onClick={() => changeAlign(position.position)}
            >
              <SvgSection Svg={position.Svg} />
            </StyleComponent.ColorBox>
          );
        })}
      </StyleComponent.RowContainer>
    </StyleComponent.DropdownContainer>
  );
};

export default AlignContent;
