import React from 'react';
import colors from '@src/utils/colors';
import DRAWER from '@src/utils/svg/toolbar/drawer.svg';
import BACKGROUND from '@src/utils/svg/background/background_icon.svg';
import CLEAR from '@src/utils/svg/toolbar/clear.svg';
import BACK from '@src/utils/svg/toolbar/back.svg';
import FORWORD from '@src/utils/svg/toolbar/forward.svg';
import ToolBarButton from '@src/components/Common/ToolbarButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, rootState } from '@src/store/modules';
import { dropdown } from '@src/store/modules/drawerDropdown';
import { backgroundDropdown } from '@src/store/modules/backgroundDropdown';
import DropDown from '@src/components/Common/DropDown';
import FontDropDown from '@src/components/Toolbar/FontDropDown';
import FontColorDropdown from '@src/components/Toolbar/FontColorDropdown';
import { RoundButton } from '@src/components/Common/RoundButton/style';
import GraphButton from '@src/components/Toolbar/GraphButton';
import AlignButton from '@src/components/Toolbar/AlignDropDown';
import { decline } from '@src/store/modules/fontDecline';
import { clear } from '@src/store/modules/mathQuill';

import * as StyledComponent from './style';

const ToolBar = () => {
  const { isDropdownShow } = useSelector(
    (state: rootState) => state.drawerDropdownHandler
  );
  const { isBackgroundDropdownShow } = useSelector(
    (state: rootState) => state.BackgroundDropdownHandler
  );
  const { isDecline } = useSelector((state: rootState) => state.declineHandler);
  const { mathQuiiFunc } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );

  const dispatch = useDispatch();
  const onClickDrawerHandler = () => {
    dispatch(dropdown(!isDropdownShow));
  };
  const onClickDeclineHandler = () => {
    dispatch(decline({ isDecline: !isDecline, fontDecline: 'normal' }));
  };
  const onClickBackgroundHandler = () => {
    dispatch(backgroundDropdown(!isBackgroundDropdownShow));
  };
  const onClickClearHandler = () => {
    console.log('clear');
    dispatch(clear());
  };
  const onClickBackHandler = () => {
    console.log('back');
  };
  const onClickForwardHandler = () => {
    console.log('forward');
  };
  const buttonAttributes = [
    { Svg: DRAWER, onClick: onClickDrawerHandler, id: 1 },
    { Svg: BACKGROUND, onClick: onClickBackgroundHandler, id: 2 },
    { Svg: '', onClick: onClickDeclineHandler, id: 2 },
  ];
  const buttonOptions = [
    { Svg: BACK, onClick: onClickBackHandler, id: 1 },
    { Svg: FORWORD, onClick: onClickForwardHandler, id: 2 },
    { Svg: CLEAR, onClick: onClickClearHandler, id: 3 },
  ];
  return (
    <StyledComponent.ToolbarContainer>
      <div className="attributes">
        <FontDropDown />
        <FontColorDropdown />
        <AlignButton />
        <RoundButton onClick={buttonAttributes[2].onClick}>
          <div className="title">F</div>
        </RoundButton>
        <RoundButton onClick={buttonAttributes[0].onClick}>
          <DRAWER />
        </RoundButton>
        <RoundButton onClick={buttonAttributes[1].onClick}>
          <BACKGROUND />
        </RoundButton>
        <GraphButton />
      </div>

      <div className="options">
        {buttonOptions.map((value) => {
          return (
            <ToolBarButton
              key={value.id}
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
