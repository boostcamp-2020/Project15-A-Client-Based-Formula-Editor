import styled from 'styled-components';
import colors from '@src/utils/colors';
import 'react-image-crop/dist/ReactCrop.css';

interface TemplateProps {
  show: boolean;
}
export const MainSectionTemplate = styled.div<TemplateProps>`
  flex: 0 1 ${(props) => (props.show ? '70%' : '100%')};
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.show ? '70%' : '100%')};
`;

export const TextArea = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  height: ${(props) => 100 - props.height}%;
`;

export const LaTeX = styled.div<{ height: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${(props) => props.height}%;
  background-color: ${colors.grey};
  overflow: hidden;
`;

export const Tab = styled.div`
  flex: 0 1 2.3rem;
  width: 100%;
  height: 100%;
  background-color: ${colors.backgroundGrey};
`;

interface Props {
  display: string;
  visible: boolean;
}

export const Modal = styled.div<Props>`
  display: flex; /* Hidden by default */
  position: fixed; /* Stay in place */
  height: 460px;
  transition: all 1s;
`;

export const CropSaveButton = styled.div`
  display: flex;
  width: 100px;
  height: 33px;
  margin-top: -50px;
  margin-left: 50%;
  padding-top: 15px;
  background-color: ${colors.borderGrey};
  justify-content: center;
  &:hover {
    color: ${colors.mainGreen};
    cursor: pointer;
  }
`;
