import React from 'react';
import DropDown from '@src/components/Common/DropDown';

interface AlignContentProps {
  align: string;
  changeAlign: (align: string) => void;
}

const AlignContent = ({ align, changeAlign }: AlignContentProps) => {
  const aligns = ['left', 'center', 'right'];
  const AlignList: JSX.Element[] = aligns.map(
    (ali): JSX.Element => {
      return (
        <AlignContent
          key={`align_${ali}`}
          align={ali}
          changeAlign={changeAlign}
        />
      );
    }
  );
  return <DropDown click={align} />;
};

export default AlignContent;
