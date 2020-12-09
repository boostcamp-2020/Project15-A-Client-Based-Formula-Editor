import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import ERASE from '@src/utils/svg/toolbar/erase.svg';
import { RoundButton } from '@src/components/Common/RoundButton/style';
import { dropdown, closeDropdown } from '@src/store/modules/drawerDropdown';
import DRAWER from '@src/utils/svg/toolbar/drawer.svg';
import outsideClick from '@src/hooks/useOutSideClick';
import * as StyleComponent from './style';

const Drawer = () => {
  const color = ['black', 'yellow', 'red', 'green'];
  const onClickHandler = () => {
    console.log('?');
  };
  const DrawerItem = color.map(
    (value): JSX.Element => {
      return (
        <StyleComponent.DrawerDiv
          key={value.toString()}
          onClick={onClickHandler}
          color={value}
        />
      );
    }
  );

  const dispatch = useDispatch();

  const { isDropdownShow } = useSelector(
    (state: RootState) => state.drawerDropdownHandler
  );
  const onClickDrawerHandler = () => {
    dispatch(dropdown(!isDropdownShow));
  };
  return (
    <div>
      <RoundButton onClick={onClickDrawerHandler}>
        <DRAWER />
      </RoundButton>
      {isDropdownShow && (
        <StyleComponent.DrawerContainer>
          {DrawerItem}
          <ERASE />
          <input type="range" />
        </StyleComponent.DrawerContainer>
      )}
    </div>
  );
};

export default Drawer;
