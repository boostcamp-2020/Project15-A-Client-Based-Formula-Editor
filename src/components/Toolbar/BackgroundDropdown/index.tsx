import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import SPRING from '@src/utils/svg/background/spring.svg';
import SUMMER from '@src/utils/svg/background/summer.svg';
import FALL from '@src/utils/svg/background/fall.svg';
import WINTER from '@src/utils/svg/background/winter.svg';
import BLACKBOARD from '@src/utils/svg/background/blackboard.svg';
import BACKGROUND from '@src/utils/svg/background/background_icon.svg';
import { RoundButton } from '@src/components/Common/RoundButton/style';
import { backgroundDropdown } from '@src/store/modules/backgroundDropdown';
import * as StyleComponent from './style';

const Background = () => {
  const { isBackgroundDropdownShow } = useSelector(
    (state: RootState) => state.BackgroundDropdownHandler
  );

  const dispatch = useDispatch();

  const onClickBackgroundHandler = () => {
    dispatch(backgroundDropdown(!isBackgroundDropdownShow));
  };

  return (
    <div>
      <RoundButton onClick={onClickBackgroundHandler}>
        <BACKGROUND />
      </RoundButton>
      {isBackgroundDropdownShow && (
        <StyleComponent.BackgroundContainer>
          <SPRING />
          <SUMMER />
          <FALL />
          <WINTER />
          <BLACKBOARD />
        </StyleComponent.BackgroundContainer>
      )}
    </div>
  );
};

export default Background;
