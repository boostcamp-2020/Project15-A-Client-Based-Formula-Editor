import React from 'react';
import FoldIcon from '@src/utils/svg/font-fold.svg';
import OpenIcon from '@src/utils/svg/font-open.svg';
import * as S from './style';

interface Props {
  changeStatus: () => void;
  dropDown: string;
  selectedFontSize: number;
}

export default function FontButton({
  changeStatus,
  dropDown,
  selectedFontSize,
}: Props) {
  const onClickHandler = () => {
    changeStatus();
  };

  return (
    <S.DropButton onClick={onClickHandler}>
      <div className="number">{selectedFontSize}</div>
      {dropDown === 'open' ? <FoldIcon /> : <OpenIcon />}
    </S.DropButton>
  );
}
