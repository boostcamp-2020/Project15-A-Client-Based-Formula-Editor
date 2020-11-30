import React from 'react';
import SPRING from '@src/utils/svg/background/spring.svg';
import SUMMER from '@src/utils/svg/background/summer.svg';
import FALL from '@src/utils/svg/background/fall.svg';
import WINTER from '@src/utils/svg/background/winter.svg';
import BLACKBOARD from '@src/utils/svg/background/blackboard.svg';
import * as StyleComponent from './style';

const Background = () => {
  return (
    <StyleComponent.BackgroundContainer>
      <SPRING />
      <SUMMER />
      <FALL />
      <WINTER />
      <BLACKBOARD />
    </StyleComponent.BackgroundContainer>
  );
};

export default Background;
