import styled from 'styled-components';
import colors from '@src/utils/colors';

export const TabContainer = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const TabItem = styled.li<{
  tabId: number;
  selectedTabId: number;
  title: string;
}>`
  width: ${(props) => {
    if (props.title === '+') return '2.5rem';
    return '5.5rem';
  }};
  height: 1.3rem;
  flex: 0, 1, auto;
  list-style: none;
  border-radius: 0 0 2px 2px;
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => {
    if (props.selectedTabId === props.tabId) return '#7B7B7B';
    return '#e6e6e6';
  }};
  color: ${(props) => {
    if (props.selectedTabId === props.tabId) return 'white';
    return 'black';
  }};
  cursor: pointer;
  display: flex;
  padding: 0.3rem;
  .title {
    width: 100%;
    font-size: 0.8rem;
    font-weight: normal;
    border: none;
    background: none;
    text-align: center;
    margin: auto;
  }
  input {
    display: none;
    width: 100%;
    font-size: 0.8rem;
    font-weight: normal;
    border: none;
    background: none;
    outline: none;
    text-align: center;
  }
  &: hover {
    background-color: #cccccc;
    height: 1.7rem;
  }
`;
