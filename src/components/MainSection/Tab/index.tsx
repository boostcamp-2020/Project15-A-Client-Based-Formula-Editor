import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { changeTab, addTab, updateTab } from '@src/store/modules/tab';
import { loadHistory } from '@src/store/modules/mathQuill';
import { changeFontColor } from '@src/store/modules/fontColorDropdown';
import { changeFontSize } from '@src/store/modules/fontSizeDropdown';
import { changeFontAlign } from '@src/store/modules/fontAlign';
import { loadDeline } from '@src/store/modules/fontDecline';
import useInterval from '@src/hooks/useInterval';
import { TabData } from '@src/@types/tabData';
import TabList from './TabList';
import PlusTab from './PlusTab';
import * as StyleComponent from './style';

const Tab = () => {
  const { lastId, selectedTabId, tabList } = useSelector(
    (state: RootState) => state.tabReducer
  );
  const { fontColor } = useSelector(
    (state: RootState) => state.fontColorDropdownReducer
  );
  const { selectedFontSize: fontSize } = useSelector(
    (state: RootState) => state.fontSizeDropdownReducer
  );
  const { fontAlign } = useSelector(
    (state: RootState) => state.fontAlignReducer
  );
  const { fontDecline } = useSelector(
    (state: RootState) => state.fontDeclineReducer
  );
  const { latex, preLaTex, nextLaTex } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );
  const dispatch = useDispatch();

  let storedData: TabData[];
  let newStoreData: TabData[];

  useInterval(() => {
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    newStoreData = storedData.map((data: TabData) => {
      if (data.id === selectedTabId) {
        return {
          ...data,
          latex,
          fontColor,
          fontSize,
          fontDecline,
          fontAlign,
          preLaTex,
          nextLaTex,
        };
      }
      return data;
    });
    window.localStorage.setItem('tab', JSON.stringify(newStoreData));
  }, 10000);

  const handleChangeTab = (tabId: number) => {
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    const selectedTabData = storedData.filter(
      (tab: TabData) => tab.id === tabId
    )[0];

    newStoreData = storedData.map((data: TabData) => {
      if (data.id === selectedTabId) {
        return {
          ...data,
          latex,
          fontColor,
          fontSize,
          fontDecline,
          fontAlign,
          preLaTex,
          nextLaTex,
        };
      }
      return data;
    });

    dispatch(changeTab(tabId));
    dispatch(changeFontColor(selectedTabData.fontColor));
    dispatch(changeFontSize(selectedTabData.fontSize));
    dispatch(changeFontAlign(selectedTabData.fontAlign));
    dispatch(loadDeline(selectedTabData.fontDecline));
    dispatch(updateTab(newStoreData));
    dispatch(
      loadHistory({
        latex: selectedTabData.latex,
        preLaTex: selectedTabData.preLaTex,
        nextLaTex: selectedTabData.nextLaTex,
      })
    );
    window.localStorage.setItem('tab', JSON.stringify(newStoreData));
  };

  const handleAddTab = () => {
    storedData = JSON.parse(window.localStorage.getItem('tab'));

    newStoreData = storedData.concat({
      id: lastId + 1,
      title: `TAB${lastId + 1}`,
      latex: 'blank',
      fontColor: 'black',
      fontSize: 15,
      fontAlign: 'center',
      fontDecline: false,
      preLaTex: [],
      nextLaTex: [],
    });

    window.localStorage.setItem('tab', JSON.stringify(newStoreData));
    dispatch(addTab());
  };

  const handleDeleteTab = (tabId: number) => {
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    let nextTabInfo: TabData;

    if (storedData.length === 1) {
      alert('This is the last tab!');
    } else {
      newStoreData = storedData.filter((data: TabData) => data.id !== tabId);

      newStoreData = [];
      storedData.forEach((data, index) => {
        if (data.id !== tabId) {
          newStoreData.push(data);
        } else if (selectedTabId === tabId) {
          nextTabInfo = storedData[index - 1];
          dispatch(changeTab(nextTabInfo.id));
          dispatch(changeFontColor(nextTabInfo.fontColor));
          dispatch(changeFontSize(nextTabInfo.fontSize));
          dispatch(changeFontAlign(nextTabInfo.fontAlign));
          dispatch(loadDeline(nextTabInfo.fontDecline));
          dispatch(
            loadHistory({
              latex: nextTabInfo.latex,
              preLaTex: nextTabInfo.preLaTex,
              nextLaTex: nextTabInfo.nextLaTex,
            })
          );
        }
      });

      dispatch(updateTab(newStoreData));
      window.localStorage.setItem('tab', JSON.stringify(newStoreData));
    }
  };

  const list: JSX.Element[] = tabList.map(
    (tab): JSX.Element => {
      return (
        <TabList
          key={`key${tab.id}`}
          tabId={tab.id}
          selectedTabId={selectedTabId}
          tabTitle={tab.title}
          handleChangeTab={handleChangeTab}
          handleDeleteTab={handleDeleteTab}
        />
      );
    }
  );

  list.push(<PlusTab key={0} handleAddTab={handleAddTab} />);

  useEffect(() => {
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    if (storedData !== null) {
      dispatch(changeTab(storedData[0].id));
      dispatch(updateTab(storedData));
      dispatch(changeFontColor(storedData[0].fontColor));
      dispatch(changeFontSize(storedData[0].fontSize));
      dispatch(changeFontAlign(storedData[0].fontAlign));
      dispatch(loadDeline(storedData[0].fontDecline));
      dispatch(
        loadHistory({
          latex: storedData[0].latex,
          preLaTex: storedData[0].preLaTex,
          nextLaTex: storedData[0].nextLaTex,
        })
      );
    } else {
      window.localStorage.setItem('tab', JSON.stringify(tabList));
    }
  }, []);

  return <StyleComponent.TabContainer>{list}</StyleComponent.TabContainer>;
};
export default Tab;
