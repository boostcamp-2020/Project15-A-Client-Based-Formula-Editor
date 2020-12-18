import React from 'react';
import SvgButton from '@src/components/Common/SvgButton';
import XIcon from '@src/utils/svg/tab/x_icon.svg';
import colors from '@src/utils/colors';
import * as StyleComponent from './style';

interface Props {
  tabId: number;
  selectedTabId: number;
  tabTitle: string;
  handleChangeTab: (tabId: number) => void;
  handleDeleteTab: (tabId: number) => void;
}

const TabList = ({
  tabId,
  selectedTabId,
  tabTitle,
  handleChangeTab,
  handleDeleteTab,
}: Props) => {
  const onClickHandler = () => {
    handleChangeTab(tabId);
  };

  const deleteHandler = () => {
    handleDeleteTab(tabId);
  };

  return (
    <StyleComponent.TabItem
      tabId={tabId}
      selectedTabId={selectedTabId}
      title={tabTitle}
    >
      <StyleComponent.Title onClick={onClickHandler}>
        {tabTitle}
      </StyleComponent.Title>
      <input defaultValue="TAB1" />
      <SvgButton
        svgColor={colors.darkGrey}
        Svg={XIcon}
        onClick={deleteHandler}
      />
    </StyleComponent.TabItem>
  );
};

export default TabList;
