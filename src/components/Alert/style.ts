import styled from 'styled-components';
import colors from '@src/utils/colors';

export const MiddleHolder = styled.div<{ visible: boolean }>`
  position: absolute;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  top: 10px;
  width: 100%;
  margin: 0 auto;
  border-radius: 0 0 5px 5px;
  background: ${colors.alertWhite};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  align-items: center;
  z-index: 1100;
  transition: ${(props) =>
    props.visible
      ? 'opacity 0.1s linear'
      : 'visibility 0s 2s, opacity 2s linear'};
  strong {
    font-weight: bold;
  }
  .alert {
    width: fit-content;
    margin: 10px auto 20px;
    padding: 8px 35px;
    border: 1px solid #fbeed5;
    border-radius: 4px;
    text-shadow: 0 1px 0 ${colors.alertWhite};
  }
  .alert-error {
    border-color: ${colors.errorBorder};
    background-color: ${colors.errorBackground};
    color: ${colors.error};
  }
  .alert-success {
    border-color: ${colors.succesBorder};
    background-color: ${colors.succesBackground};
    color: ${colors.success};
  }
  .alert-info {
    border-color: ${colors.infoBorder};
    background-color: ${colors.infoBackround};
    color: ${colors.info};
  }
`;
