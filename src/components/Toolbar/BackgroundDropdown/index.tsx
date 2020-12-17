import React, { useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState } from '@src/store/modules';
import SUMMER from '@src/utils/svg/background/summer.svg';
import WINTER from '@src/utils/svg/background/winter.svg';
import BACKGROUND from '@src/utils/svg/background/background_icon.svg';
import { RoundButton } from '@src/components/Common/RoundButton/style';
import {
  showBackgroundDropdown,
  showWinter,
  showSummer,
} from '@src/store/modules/backgroundDropdown';
import {
  drawingSnow,
  deleteWinterAnimation,
} from '@src/utils/drawingSnowAnimation';
import {
  drawingRain,
  deleteSummerAnimation,
} from '@src/utils/drawingRainAnimation';
import { closePaint } from '@src/store/modules/paintDropdown';
import * as StyleComponent from './style';

const Background = () => {
  const {
    backgroundDropdown,
    backgroundCanvas,
    winterBackground,
    summerBackground,
  } = useSelector(
    (state: RootState) => state.backgroundDropdownReducer,
    shallowEqual
  );

  const { paintDropdown } = useSelector(
    (state: RootState) => state.paintDropdownReducer
  );
  const dispatch = useDispatch();

  const onClickBackgroundHandler = () => {
    if (!paintDropdown) {
      dispatch(showBackgroundDropdown());
    }
  };

  const onClickSummerHandler = () => {
    const canvas = backgroundCanvas.current;
    const context = canvas.getContext('2d');
    dispatch(showWinter(false));
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    if (summerBackground) {
      deleteSummerAnimation();
      drawingRain(context, canvas.width, canvas.height);
      deleteWinterAnimation();
    } else {
      dispatch(showSummer(true));
      drawingRain(context, canvas.width, canvas.height);
      deleteWinterAnimation();
    }
  };

  const onClickWinterHandler = () => {
    const canvas = backgroundCanvas.current;
    const context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    dispatch(showSummer(false));
    if (winterBackground) {
      deleteWinterAnimation();
      drawingSnow(context, canvas.width, canvas.height);
      deleteSummerAnimation();
    } else {
      dispatch(showWinter(true));
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
      {backgroundDropdown && (
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
