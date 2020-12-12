import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import * as StyleComponent from './style';

const Background = () => {
  const {
    isBackgroundDropdownShow,
    backgroundCanvas,
    winterDropdownShow,
    summerDropdownShow,
  } = useSelector((state: RootState) => state.BackgroundDropdownHandler);

  const dispatch = useDispatch();

  const onClickBackgroundHandler = () => {
    dispatch(backgroundDropdown(!isBackgroundDropdownShow));
    dispatch(winterDropdown(false));
    dispatch(summerDropdown(false));
    deleteWinterAnimation();
    deleteSummerAnimation();
  };
  const onClickSummerHandler = () => {
    const canvas = backgroundCanvas.current;
    const context = canvas.getContext('2d');
    dispatch(winterDropdown(false));
    if (summerDropdownShow) {
      deleteSummerAnimation();
      deleteWinterAnimation();
      drawingRain(canvas, context, canvas.width, canvas.height);
    } else {
      dispatch(summerDropdown(true));
      deleteWinterAnimation();
      deleteSummerAnimation();
      drawingRain(canvas, context, canvas.width, canvas.height);
    }
  };
  const onClickWinterHandler = () => {
    const canvas = backgroundCanvas.current;
    const context = canvas.getContext('2d');
    dispatch(summerDropdown(false));
    if (winterDropdownShow) {
      deleteWinterAnimation();
      deleteSummerAnimation();
      drawingSnow(context, canvas.width, canvas.height);
    } else {
      dispatch(winterDropdown(true));
      deleteSummerAnimation();
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
