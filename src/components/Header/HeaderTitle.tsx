import React from 'react';
import * as StyledComponent from './style';

const HeaderTitle = () => {
  return (
    <StyledComponent.Title>
      <div className="bigText">수식판</div>
      <div className="smallText">Formula-Editor-A</div>
    </StyledComponent.Title>
  );
};

export default HeaderTitle;
