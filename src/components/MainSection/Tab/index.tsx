import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { changeTab, addTab, updateTab } from '@src/store/modules/tab';
import { change } from '@src/store/modules/mathQuill';
import useInterval from '@src/hooks/useInterval';
import TabList from './TabList';
import * as StyleComponent from './style';

const Tab = () => {
  const { lastId, selectedTabId, tabList } = useSelector(
    (state: RootState) => state.tabReducer
  );
  const { latex } = useSelector((state: RootState) => state.mathQuillReducer);

  const dispatch = useDispatch();

  let storedData;
  let newStoreData;

  useInterval(() => {
    console.log('자동저장되었습니다.');
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    newStoreData = storedData.map(
      (data: { id: number; title: string; latex: string }) => {
        if (data.id === selectedTabId) {
          return { ...data, latex };
        }
        return data;
      }
    );
    window.localStorage.setItem('tab', JSON.stringify(newStoreData));
  }, 30000);

  const handleChangeTab = (tabId: number) => {
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    const selectedTabData = storedData.filter(
      (tab: { id: number; title: string; latex: string }) => tab.id === tabId
    )[0];

    newStoreData = storedData.map(
      (data: { id: number; title: string; latex: string }) => {
        if (data.id === selectedTabId) {
          return { ...data, latex };
        }
        return data;
      }
    );

    dispatch(changeTab(tabId));
    dispatch(change(selectedTabData.latex));
    dispatch(updateTab(newStoreData));
    window.localStorage.setItem('tab', JSON.stringify(newStoreData));
  };

  const handleAddTab = () => {
    storedData = JSON.parse(window.localStorage.getItem('tab'));

    newStoreData = storedData.concat({
      id: lastId + 1,
      title: `TAB${lastId + 1}`,
      latex: 'blank',
    });

    window.localStorage.setItem('tab', JSON.stringify(newStoreData));
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

  useEffect(() => {
    console.log('Successful import from local storage!');
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    if (storedData !== null) {
      dispatch(updateTab(storedData));
      dispatch(change(storedData[0].latex));
    }
  }, []);

  return <StyleComponent.TabContainer>{list}</StyleComponent.TabContainer>;
};
export default Tab;
