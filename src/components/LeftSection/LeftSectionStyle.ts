import styled from 'styled-components';
import colors from '@src/utils/colors';

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  width: 28rem;
  background-color: ${colors.backgroundGrey};

  .SplitPane {
    position: relative !important;
    min-height: initial !important;
    flex: 1 1 0 !important;
  }

  .Pane1 {
    max-height: 90% !important;
  }
  .Pane2 {
    height: 0px;
  }

  .Resizer {
    border: 3px solid ${colors.borderGrey};
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: #000;
    opacity: 0.2;
    z-index: 1;
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;
    cursor: row-resize;
  }

  .Resizer:hover {
    border-color: ${colors.darkGrey};
  }
`;
