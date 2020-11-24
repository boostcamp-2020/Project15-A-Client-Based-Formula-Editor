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
    </DropButton>
  );
}
