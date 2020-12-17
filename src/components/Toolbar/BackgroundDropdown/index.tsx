import React, { useRef, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState } from '@src/store/modules';
import SUMMER from '@src/utils/svg/background/summer.svg';
import WINTER from '@src/utils/svg/background/winter.svg';
import BACKGROUND from '@src/utils/svg/background/background_icon.svg';
import { RoundButton } from '@src/components/Common/RoundButton/style';
import {
  backgroundDropdown,
  winterDropdown,
  summerDropdown,
} from '@src/store/modules/backgroundDropdown';
import {
  drawingSnow,
  deleteWinterAnimation,
} from '@src/utils/drawingSnowAnimation';
import {
  drawingRain,
  deleteSummerAnimation,
} from '@src/utils/drawingRainAnimation';
import { closeDropdown } from '@src/store/modules/drawerDropdown';
import * as StyleComponent from './style';

const Background = () => {
  const {
    isBackgroundDropdownShow,
    backgroundCanvas,
    winterDropdownShow,
    summerDropdownShow,
  } = useSelector(
    (state: RootState) => state.BackgroundDropdownHandler,
    shallowEqual
  );
  const { isDropdownShow } = useSelector(
    (state: RootState) => state.drawerDropdownHandler
  );
  const dispatch = useDispatch();
  const onClickBackgroundHandler = () => {
    if (!isDropdownShow) {
      dispatch(backgroundDropdown());
    }
  };
  const onClickSummerHandler = () => {
    const canvas = backgroundCanvas.current;
    const context = canvas.getContext('2d');
    dispatch(winterDropdown(false));
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    if (summerDropdownShow) {
      deleteSummerAnimation();
      drawingRain(context, canvas.width, canvas.height);

      deleteWinterAnimation();
    } else {
      dispatch(summerDropdown(true));
      drawingRain(context, canvas.width, canvas.height);
      deleteWinterAnimation();
    }
  };
  const onClickWinterHandler = () => {
    const canvas = backgroundCanvas.current;
    const context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    dispatch(summerDropdown(false));
    if (winterDropdownShow) {
      deleteWinterAnimation();
      drawingSnow(context, canvas.width, canvas.height);
      deleteSummerAnimation();
    } else {
      dispatch(winterDropdown(true));
      deleteSummerAnimation();
      deleteWinterAnimation();
      drawingSnow(context, canvas.width, canvas.height);
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
          <RoundButton onClick={onClickSummerHandler}>
            <SUMMER />
          </RoundButton>
          <RoundButton onClick={onClickWinterHandler}>
            <WINTER />
          </RoundButton>
        </StyleComponent.BackgroundContainer>
      )}
    </div>
  );
};

export default Background;
