import React from 'react';
import PlusIcon from '@src/utils/svg/tab/plus_icon.svg';
import * as StyleComponent from './style';

interface Props {
  handleAddTab: () => void;
}

const PlusTab = ({ handleAddTab }: Props) => {
  const onClickHandler = () => {
    handleAddTab();
  };

  return (
    <StyleComponent.SmallTab onClick={onClickHandler}>
      <PlusIcon />
    </StyleComponent.SmallTab>
  );
};

export default PlusTab;
