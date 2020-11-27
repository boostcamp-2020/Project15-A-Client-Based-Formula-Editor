import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  height: 3.5rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  border-bottom: 1px solid #d6d6d6;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const Aside = styled.div`
  display: flex;
  flex: none;
  width: 30rem;
  background-color: #e3ede7;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ToolBar = styled.div`
  background-color: #10df99;
  height: 3.3rem;
  flex: none;
`;

export const MoveArea = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

export const RightArea = styled.div`
  width: 25rem;
  background-color: #e3ede7;
`;

export const TextArea = styled.div`
  background-color: #e1e0de;
  width: 100%;
  height: 100%;
`;

export const LaTeX = styled.div`
  background-color: #c9c9c9;
  width: 100%;
  height: 19rem;
`;

export const Tab = styled.div`
  background-color: #8e8f92;
  width: 100%;
  height: 2.3rem;
`;
