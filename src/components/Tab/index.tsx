import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { changeTab, addTab } from '@src/store/modules/tab';
import TabList from './TabList';
import * as StyleComponent from './style';

const Tab = () => {
  const { selectedTabId, tabList } = useSelector(
    (state: RootState) => state.tabReducer
  );

  const dispatch = useDispatch();

  const handleChangeTab = (tabId: number) => {
    dispatch(changeTab(tabId));
  };

  const handleAddTab = () => {
    dispatch(addTab());
  };

  const list: JSX.Element[] = tabList.map(
    (tab): JSX.Element => {
      return (
        <TabList
          key={tab.id}
          tabId={tab.id}
          selectedTabId={selectedTabId}
          tabTitle={tab.title}
          handleChangeTab={handleChangeTab}
          handleAddTab={handleAddTab}
        />
      );
    }
  );

  list.push(
    <TabList
      key={0}
      tabId={0}
      selectedTabId={selectedTabId}
      tabTitle="+"
      handleChangeTab={handleChangeTab}
      handleAddTab={handleAddTab}
    />
  );

  return <StyleComponent.TabContainer>{list}</StyleComponent.TabContainer>;
};
export default Tab;
