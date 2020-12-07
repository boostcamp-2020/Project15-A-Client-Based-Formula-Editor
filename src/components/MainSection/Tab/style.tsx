import styled from 'styled-components';
import colors from '@src/utils/colors';

export const TabContainer = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

export const SmallTab = styled.li`
  width: 2.5rem;
  height: 1.3rem;
  flex: 0, 1, auto;
  align-items: center;
  list-style: none;
  border-radius: 0 0 10px 10px;
  transition: all 0.2s ease-in-out;
  background-color: ${colors.lightGrey};
  color: ${colors.black};
  cursor: pointer;
  display: flex;
  padding: 0.3rem;
  &: hover {
    height: 1.7rem;
  }
  svg {
    margin: auto;
    fill: ${colors.darkGrey};
  }
`;

export const TabItem = styled(SmallTab)<{
  tabId?: number;
  selectedTabId?: number;
  title?: string;
}>`
  width: 5.5rem;
  background-color: ${(props) => {
    if (props.selectedTabId === props.tabId) return colors.grey;
    return colors.lightGrey;
  }};
  color: ${(props) => {
    if (props.selectedTabId === props.tabId) return colors.white;
    return colors.darkGrey;
  }};
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
  svg {
    visibility: hidden;
  }
  &: hover {
    height: 1.7rem;
    svg {
      visibility: visible;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 0.8rem;
  font-weight: normal;
  border: none;
  background: none;
  text-align: center;
  margin: auto;
`;
