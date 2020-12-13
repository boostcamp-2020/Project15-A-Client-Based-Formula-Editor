import styled from 'styled-components';
import colors from '@src/utils/colors';

export const MiddleHolder = styled.div`
  width: 50%;
  padding: 0px 10px;
  position: absolute;
  top: 0;
  z-index: 1100;
  background: rgba(255, 255, 255, 0.2);
  margin: 0 25%;
  border-radius: 0 0 5px 5px;
  strong {
    font-weight: bold;
  }
  .alert {
    margin: 10px 0;
    padding: 8px 35px 8px 14px;
    margin-bottom: 20px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    border: 1px solid #fbeed5;
    border-radius: 4px;
  }
  .alert-error {
    background-color: #f2dede;
    border-color: #eed3d7;
    color: #b94a48;
  }
  .alert-success {
    background-color: #dff0d8;
    border-color: #d6e9c6;
    color: #468847;
  }
  .alert-info {
    background-color: #d9edf7;
    border-color: #bce8f1;
    color: #3a87ad;
  }
`;
