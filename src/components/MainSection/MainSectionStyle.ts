import styled from 'styled-components';
import colors from '@src/utils/colors';
import 'react-image-crop/dist/ReactCrop.css';

interface TemplateProps {
  show: boolean;
}
export const MainSectionTemplate = styled.div<TemplateProps>`
  width: ${(props) => (props.show ? '70%' : '100%')};
  flex: 0 1 ${(props) => (props.show ? '70%' : '100%')};
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => 100 - props.height}%;
  position: relative;
`;

export const LaTeX = styled.div<{ height: number }>`
  width: 100%;
  height: ${(props) => props.height}%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.grey};
  overflow: hidden;
`;

export const Tab = styled.div`
  width: 100%;
  height: 100%;
  flex: 0 1 2.3rem;
  background-color: ${colors.backgroundGrey};
`;

interface Props {
  display: string;
  visible: boolean;
}

export const Modal = styled.div<Props>`
  height: 460px;
  display: flex; /* Hidden by default */
  position: fixed; /* Stay in place */
  transition: all 1s;
`;

export const CropSaveButton = styled.div`
  width: 100px;
  height: 33px;
  display: flex;
  padding-top: 15px;
  margin-top: -50px;
  margin-left: 50%;
  justify-content: center;
  background-color: ${colors.borderGrey};
  &:hover {
    color: ${colors.mainGreen};
    cursor: pointer;
  }
`;
