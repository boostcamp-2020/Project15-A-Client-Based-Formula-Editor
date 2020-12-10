import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import SPRING from '@src/utils/svg/background/spring.svg';
import SUMMER from '@src/utils/svg/background/summer.svg';
import FALL from '@src/utils/svg/background/fall.svg';
import WINTER from '@src/utils/svg/background/winter.svg';
import BLACKBOARD from '@src/utils/svg/background/blackboard.svg';
import BACKGROUND from '@src/utils/svg/background/background_icon.svg';
import { RoundButton } from '@src/components/Common/RoundButton/style';
import {
  backgroundDropdown,
  winterDropdown,
} from '@src/store/modules/backgroundDropdown';
import {
  drawing,
  dropdown,
  closeDropdown,
} from '@src/store/modules/drawerDropdown';
import {
  drawingSnow,
  fallingSnow,
  deleteWinterAnimation,
} from '@src/utils/backgroundAnimation';
import useOutsideClick from '@src/hooks/useOutSideClick';
import * as StyleComponent from './style';

const Background = () => {
  const {
    isBackgroundDropdownShow,
    backgroundCanvas,
    winterDropdownShow,
  } = useSelector((state: RootState) => state.BackgroundDropdownHandler);
  const { isDropdownShow } = useSelector(
    (state: RootState) => state.drawerDropdownHandler
  );
  const dispatch = useDispatch();

  const onClickBackgroundHandler = () => {
    if (isDropdownShow) {
      dispatch(closeDropdown());
    }
    dispatch(backgroundDropdown(!isBackgroundDropdownShow));
    if (isBackgroundDropdownShow) {
      dispatch(winterDropdown(false));
      deleteWinterAnimation();
    }
  };
  const onClickSummerHandler = () => {
    if (winterDropdownShow) {
      dispatch(winterDropdown(false));
      deleteWinterAnimation();
    }
  };
  const onClickWinterHandler = () => {
    const canvas = backgroundCanvas.current;
    const context = canvas.getContext('2d');
    if (!winterDropdownShow) {
      dispatch(winterDropdown(true));
      drawingSnow(context, canvas.width, canvas.height, winterDropdownShow);
    }
  };
  const backgroundRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={backgroundRef}>
      <RoundButton onClick={onClickBackgroundHandler}>
        <BACKGROUND />
      </RoundButton>
      {isBackgroundDropdownShow && (
        <StyleComponent.BackgroundContainer>
          <SPRING />
          <RoundButton onClick={onClickSummerHandler}>
            <SUMMER />
          </RoundButton>

          <FALL />
          <RoundButton onClick={onClickWinterHandler}>
            <WINTER />
          </RoundButton>

          <BLACKBOARD />
        </StyleComponent.BackgroundContainer>
      )}
    </div>
  );
};

export default Background;
