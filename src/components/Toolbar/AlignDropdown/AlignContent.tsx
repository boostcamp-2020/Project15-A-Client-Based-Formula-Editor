import React from 'react';
import DropDown from '@src/components/Common/DropDown';
import AlignLeft from '@src/utils/svg/toolbar/align-left.svg';
import AlignCenter from '@src/utils/svg/toolbar/align-center.svg';
import AlignRight from '@src/utils/svg/toolbar/align-right.svg';
import SvgSection from '@src/components/Common/Svg';
import * as StyleComponent from './style';

interface AlignContentProps {
  changeAlign: (align: string) => void;
}
const aligns = [
  {
    position: 'flex-start',
    id: 0,
    Svg: AlignLeft,
  },
  {
    position: 'center',
    id: 1,
    Svg: AlignCenter,
  },
  {
    position: 'flex-end',
    id: 2,
    Svg: AlignRight,
  },
];
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
