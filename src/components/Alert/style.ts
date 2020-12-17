import styled from 'styled-components';
import colors from '@src/utils/colors';

export const MiddleHolder = styled.div<{ visible: boolean }>`
  position: absolute;
  width: 100%;
  margin: 0 auto;
  top: 0;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  align-items: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: ${(props) =>
    props.visible
      ? 'opacity 0.1s linear'
      : 'visibility 0s 2s, opacity 2s linear'};
  background: ${colors.alertWhite};
  border-radius: 0 0 5px 5px;
  z-index: 1100;
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
    background-color: ${colors.errorBackground};
    border-color: ${colors.errorBorder};
    color: ${colors.error};
  }
  .alert-success {
    background-color: ${colors.succesBackground};
    border-color: ${colors.succesBorder};
    color: ${colors.success};
  }
  .alert-info {
    background-color: ${colors.infoBackround};
    border-color: ${colors.infoBorder};
    color: ${colors.info};
  }
`;
