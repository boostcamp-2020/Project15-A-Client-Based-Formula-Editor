import React, { useRef } from 'react';
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
import { closeDropdown } from '@src/store/modules/drawerDropdown';
import {
  drawingSnow,
  deleteWinterAnimation,
} from '@src/utils/drawingSnowAnimation';
import { drawingRain } from '@src/utils/drawingRainAnimation';
import * as StyleComponent from './style';

const Background = () => {
  const {
    isBackgroundDropdownShow,
    backgroundCanvas,
    winterDropdownShow,
    summerDropdownShow,
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
      dispatch(summerDropdown(false));
      deleteWinterAnimation();
    }
  };
  const onClickSummerHandler = () => {
    const canvas = backgroundCanvas.current;
    const context = canvas.getContext('2d');
    if (winterDropdownShow) {
      dispatch(winterDropdown(false));
      deleteWinterAnimation();
    }
    if (!summerDropdownShow) {
      dispatch(summerDropdown(true));
      drawingRain(context, canvas.width, canvas.height);
    }
  };
  const onClickWinterHandler = () => {
    const canvas = backgroundCanvas.current;
    const context = canvas.getContext('2d');
    if (summerDropdownShow) {
      dispatch(summerDropdown(false));
    }
    if (!winterDropdownShow) {
      dispatch(winterDropdown(true));
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
