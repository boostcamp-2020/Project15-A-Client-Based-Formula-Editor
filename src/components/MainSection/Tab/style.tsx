import styled from 'styled-components';
import colors from '@src/utils/colors';

export const TabContainer = styled.ul`
  display: flex;
  width: 100%;
  height: 3.5rem;
  overflow: auto;
`;

export const SmallTab = styled.li`
  width: 2.5rem;
  height: 1.3rem;
  padding: 0.3rem;
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  color: ${colors.black};
  border-radius: 0 0 10px 10px;
  background-color: ${colors.lightGrey};
  list-style: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
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
    width: 100%;
    display: none;
    border: none;
    outline: none;
    text-align: center;
    font-size: 0.8rem;
    font-weight: normal;
    background: none;
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
