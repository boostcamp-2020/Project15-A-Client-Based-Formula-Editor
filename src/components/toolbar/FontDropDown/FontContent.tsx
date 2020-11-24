import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  align-items: center;
  .number {
    margin-left: 15px;
    font-size: 13px;
  }
  .svg {
    visibility: hidden;
    margin-left: auto;
    margin-top: 5px;
  }
  &: hover {
    background-color: #f1f1f1;
  }
`;

interface Props {
  fontSize: number;
}

export default function FontContent({ fontSize }: Props) {
  return (
    <Content>
      <div className="number">{fontSize}</div>
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="-10 -10 34 34"
          id="editor-fontsize-check"
          x="688"
          y="34"
        >
          <path
            fill="none"
            fillRule="evenodd"
            stroke="#00C73C"
            strokeWidth="2"
            d="M1 5.765L5.154 10 13 2"
          />
        </svg>
      </div>
    </Content>
  );
}
