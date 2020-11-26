import React from 'react';
import colors from '@src/utils/colors';
import DECLINEICON from '@src/utils/svg/decline-text.svg';
import DRAWER from '@src/utils/svg/drawer.svg';
import BACKGROUND from '@src/utils/svg/background/background_icon.svg';
import CLEAR from '@src/utils/svg/clear.svg';
import BACK from '@src/utils/svg/back.svg';
import FORWORD from '@src/utils/svg/forward.svg';
import ToolBarButton from '@src/components/common/toolbarbutton';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '@src/store/modules';
import { dropdown } from '@src/store/modules/drawerDropdown';
import {
  backgroundDropdown,
  BackgroundState,
} from '@src/store/modules/backgroundDropdown';
import DropDown from '@src/components/common/dropdown';
import FontDropDown from '@src/components/toolbar/FontDropDown';
import FontColorDropdown from '@src/components/toolbar/FontColorDropdown';
import * as StyledComponent from './style';

const ToolBar = () => {
  const { isDropdownShow } = useSelector(
    (state: rootState) => state.drawerDropdownHandler
  );
  const { isBackgroundDropdownShow } = useSelector(
    (state: rootState) => state.BackgroundDropdownHandler
  );
  const dispatch = useDispatch();
  const onClickDrawerHandler = () => {
    dispatch(dropdown(!isDropdownShow));
  };
  const onClickDeclineHandler = () => {
    console.log('decline');
  };
  const onClickBackgroundHandler = () => {
    dispatch(backgroundDropdown(!isBackgroundDropdownShow));
  };
  const onClickClearHandler = () => {
    console.log('clear');
  };
  const onClickBackHandler = () => {
    console.log('back');
  };
  const onClickForwardHandler = () => {
    console.log('forward');
  };
  const buttonAttributes = [
    { Svg: DECLINEICON, onClick: onClickDeclineHandler },
    { Svg: DRAWER, onClick: onClickDrawerHandler },
    { Svg: BACKGROUND, onClick: onClickBackgroundHandler },
  ];
  const buttonOptions = [
    { Svg: BACK, onClick: onClickBackHandler },
    { Svg: FORWORD, onClick: onClickForwardHandler },
    { Svg: CLEAR, onClick: onClickClearHandler },
  ];
  return (
    <StyledComponent.ToolbarContainer>
      <div className="attributes">
        <FontDropDown />
        <FontColorDropdown />
        {buttonAttributes.map((value) => {
          return (
            <ToolBarButton
              key={`button-${value}`}
              color={colors.mainGreen}
              Svg={value.Svg}
              onClick={value.onClick}
            />
          );
        })}
      </div>
      <div className="options">
        {buttonOptions.map((value) => {
          return (
            <ToolBarButton
              key={`button-${value}`}
              color={colors.mainGreen}
              Svg={value.Svg}
              onClick={value.onClick}
            />
          );
        })}
      </div>
      {isDropdownShow && <DropDown click="drawer" />}
      {isBackgroundDropdownShow && <DropDown click="background" />}
    </StyledComponent.ToolbarContainer>
  );
};
export default ToolBar;
