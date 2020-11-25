import React from 'react';
import colors from '@src/utils/colors';
import DECLINEICON from '@src/utils/svg/decline-text.svg';
import DRAWER from '@src/utils/svg/drawer.svg';
import ToolBarButton from '@src/components/common/toolbarbutton';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '@src/store/modules';
import { ChangeDropdownDrawer } from '@src/store/modules/drawerDropdown';
import DropDown from '@src/components/common/dropdown';

const ToolBar = () => {
  const { isDropdownShow } = useSelector(
    (state: rootState) => state.drawerDropdownHandler
  );
  const dispatch = useDispatch();
  const onClickDrawerHandler = () => {
    dispatch(ChangeDropdownDrawer(!isDropdownShow));
  };
  const onClickDeclineHandler = () => {
    console.log('decline click');
  };
  return (
    <>
      <ToolBarButton
        color={colors.mainGreen}
        Svg={DECLINEICON}
        width="30"
        height="30"
        onClick={onClickDeclineHandler}
      />
      {isDropdownShow ? <DropDown click="drawer" /> : ''}

      <ToolBarButton
        color={colors.mainGreen}
        Svg={DRAWER}
        width="30"
        height="30"
        onClick={onClickDrawerHandler}
      />
    </>
  );
};
export default ToolBar;
