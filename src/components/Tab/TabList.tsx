import React from 'react';
import * as StyleComponent from './style';

interface Props {
  tabId: number;
  selectedTabId: number;
  tabTitle: string;
  handleChangeTab: (tabId: number) => void;
  handleAddTab: () => void;
}

const TabList = ({
  tabId,
  selectedTabId,
  tabTitle,
  handleChangeTab,
  handleAddTab,
}: Props) => {
  const onClickHandler = () => {
    if (tabTitle === '+') handleAddTab();
    else handleChangeTab(tabId);
  };

  return (
    <StyleComponent.TabItem
      tabId={tabId}
      selectedTabId={selectedTabId}
      title={tabTitle}
      onClick={onClickHandler}
    >
      <div className="title">{tabTitle}</div>
      <input defaultValue="TAB1" />
    </StyleComponent.TabItem>
  );
};
export default TabList;
