import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { changeTab, addTab, updateTab } from '@src/store/modules/tab';
import { change, loadHistory } from '@src/store/modules/mathQuill';
import { changeFontColor } from '@src/store/modules/fontColorDropdown';
import { changeFontSize } from '@src/store/modules/fontSizeDropdown';
import { changeFontAlign } from '@src/store/modules/fontAlign';
import { changeDecline } from '@src/store/modules/fontDecline';
import useInterval from '@src/hooks/useInterval';
import TabList from './TabList';
import PlusTab from './PlusTab';
import * as StyleComponent from './style';

const Tab = () => {
  const { lastId, selectedTabId, tabList } = useSelector(
    (state: RootState) => state.tabReducer
  );
  const { latex } = useSelector((state: RootState) => state.mathQuillReducer);
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
  const { history, historyIdx } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );
  const dispatch = useDispatch();

  let storedData: {
    id: number;
    title: string;
    latex: string;
    fontColor: string;
    fontSize: number;
    fontDecline: boolean;
    fontAlign: string;
    history: string[];
    historyIdx: number;
  }[];
  let newStoreData: {
    id: number;
    title: string;
    latex: string;
    fontColor: string;
    fontSize: number;
    fontDecline: boolean;
    fontAlign: string;
    history: string[];
    historyIdx: number;
  }[];

  useInterval(() => {
    console.log('자동저장되었습니다.');
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    newStoreData = storedData.map(
      (data: {
        id: number;
        title: string;
        latex: string;
        fontColor: string;
        fontSize: number;
        fontDecline: boolean;
        fontAlign: string;
        history: string[];
        historyIdx: number;
      }) => {
        if (data.id === selectedTabId) {
          return {
            ...data,
            latex,
            fontColor,
            fontSize,
            fontDecline,
            fontAlign,
            history,
            historyIdx,
          };
        }
        return data;
      }
    );
    window.localStorage.setItem('tab', JSON.stringify(newStoreData));
  }, 10000);

  const handleChangeTab = (tabId: number) => {
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    const selectedTabData = storedData.filter(
      (tab: {
        id: number;
        title: string;
        latex: string;
        fontColor: string;
        fontSize: number;
        fontDecline: boolean;
        fontAlign: string;
        history: string[];
        historyIdx: number;
      }) => tab.id === tabId
    )[0];

    newStoreData = storedData.map(
      (data: {
        id: number;
        title: string;
        latex: string;
        fontColor: string;
        fontSize: number;
        fontDecline: boolean;
        fontAlign: string;
        history: string[];
        historyIdx: number;
      }) => {
        if (data.id === selectedTabId) {
          return {
            ...data,
            latex,
            fontColor,
            fontSize,
            fontDecline,
            fontAlign,
            history,
            historyIdx,
          };
        }
        return data;
      }
    );

    dispatch(changeTab(tabId));
    dispatch(changeFontColor(selectedTabData.fontColor));
    dispatch(changeFontSize(selectedTabData.fontSize));
    dispatch(change(selectedTabData.latex));
    dispatch(changeFontAlign(selectedTabData.fontAlign));
    dispatch(changeDecline(selectedTabData.fontDecline));
    dispatch(updateTab(newStoreData));
    dispatch(
      loadHistory({
        history: selectedTabData.history,
        historyIdx: selectedTabData.historyIdx,
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
      fontDecline: true,
      history: ['blank'],
      historyIdx: 0,
    });

    window.localStorage.setItem('tab', JSON.stringify(newStoreData));
    dispatch(addTab());
  };

  const handleDeleteTab = (tabId: number) => {
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    let nextTabInfo: {
      id: number;
      title: string;
      latex: string;
      fontColor: string;
      fontSize: number;
      fontDecline: boolean;
      fontAlign: string;
      history: string[];
      historyIdx: number;
    };

    if (storedData.length === 1) {
      alert('This is the last tab!');
    } else {
      newStoreData = storedData.filter(
        (data: {
          id: number;
          title: string;
          latex: string;
          fontColor: string;
          fontSize: number;
          fontDecline: boolean;
          fontAlign: string;
          history: string[];
          historyIdx: number;
        }) => data.id !== tabId
      );

      newStoreData = [];
      storedData.forEach((data, index) => {
        if (data.id !== tabId) {
          newStoreData.push(data);
        } else if (selectedTabId === tabId) {
          nextTabInfo = storedData[index - 1];
          dispatch(changeTab(nextTabInfo.id));
          dispatch(changeFontColor(nextTabInfo.fontColor));
          dispatch(changeFontSize(nextTabInfo.fontSize));
          dispatch(change(nextTabInfo.latex));
          dispatch(changeFontAlign(nextTabInfo.fontAlign));
          dispatch(changeDecline(nextTabInfo.fontDecline));
          dispatch(
            loadHistory({
              history: nextTabInfo.history,
              historyIdx: nextTabInfo.historyIdx,
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
          key={tab.id}
          tabId={tab.id}
          selectedTabId={selectedTabId}
          tabTitle={tab.title}
          handleChangeTab={handleChangeTab}
          handleDeleteTab={handleDeleteTab}
        />
      );
    }
  );

  list.push(<PlusTab handleAddTab={handleAddTab} />);

  useEffect(() => {
    console.log('Successful import from local storage!');
    storedData = JSON.parse(window.localStorage.getItem('tab'));
    if (storedData !== null) {
      dispatch(changeTab(storedData[0].id));
      dispatch(updateTab(storedData));
      dispatch(changeFontColor(storedData[0].fontColor));
      dispatch(changeFontSize(storedData[0].fontSize));
      dispatch(changeFontAlign(storedData[0].fontAlign));
      dispatch(changeDecline(storedData[0].fontDecline));
      dispatch(change(storedData[0].latex));
      dispatch(
        loadHistory({
          history: storedData[0].history,
          historyIdx: storedData[0].historyIdx,
        })
      );
    } else {
      window.localStorage.setItem('tab', JSON.stringify(tabList));
    }
  }, []);

  return <StyleComponent.TabContainer>{list}</StyleComponent.TabContainer>;
};
export default Tab;
