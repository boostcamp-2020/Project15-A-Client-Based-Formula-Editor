import styled from 'styled-components';
import colors from '@src/utils/colors';

export const TabContainer = styled.ul`
  display: flex;
  width: 100%;
  height: 3.5rem;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: ${colors.white};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: ${colors.lightGrey};

    &:hover {
      background-color: ${colors.grey};
    }
  }
  &::-webkit-scrollbar-track {
    background: ${colors.white};
  }
`;

export const SmallTab = styled.li`
  flex: 0 1 auto;
  display: flex;
  border-radius: 0 0 10px 10px;
  width: 2.5rem;
  height: 1.3rem;
  padding: 0.3rem;
  list-style: none;
  background-color: ${colors.lightGrey};
  color: ${colors.black};
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    height: 1.7rem;
  }
  svg {
    margin: auto;
    fill: ${colors.darkGrey};
  }
`;

export const TabItem = styled(SmallTab)<{
  tabId: number;
  selectedTabId: number;
  title?: string;
}>`
  width: 5.5rem;
  background-color: ${(props) =>
    props.selectedTabId === props.tabId ? colors.grey : colors.lightGrey};
  color: ${(props) =>
    props.selectedTabId === props.tabId ? colors.white : colors.darkGrey};
  input {
    display: none;
    width: 100%;
    outline: none;
    border: none;
    background: none;
    text-align: center;
    font-size: 0.8rem;
    font-weight: normal;
  }
  svg {
    visibility: hidden;
  }
  &:hover {
    height: 1.7rem;
    svg {
      visibility: visible;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 0.8rem;
  margin: auto;
  border: none;
  text-align: center;
  font-weight: normal;
  background: none;
`;
