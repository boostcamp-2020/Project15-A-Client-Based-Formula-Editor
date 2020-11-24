import React from 'react';
import styled from 'styled-components';

const DropButton = styled.div`
  width: 60px;
  border: 1px solid;
  display: flex;
  align-items: center;
  .number {
    padding: 7px;
    font-size: 13px;
  }
  &svg {
    margin-top: 2px;
  }
`;

export default function FontButton() {
  return (
    <DropButton>
      <div className="number">15</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="41"
        height="41"
        viewBox="-10 -10 41 41"
        id="editor-fontsize-arrow-up"
        x="240"
        y="180"
      >
        <path
          fill="#999"
          fillRule="evenodd"
          d="M6 13h1v-1H6v1zm1-1h1v-1H7v1zm1-1h1v-1H8v1zm1-1h1V9H9v1zm1-1h1V8h-1v1zm5 4v-1h-1v1h1zm-1-1v-1h-1v1h1zm-1-1v-1h-1v1h1zm-1-1V9h-1v1h1z"
        />
      </svg>
    </DropButton>
  );
}
