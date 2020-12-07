/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import ERASE from '@src/utils/svg/toolbar/erase.svg';
import { RoundButton } from '@src/components/Common/RoundButton/style';
import { dropdown, changeLatex } from '@src/store/modules/drawerDropdown';
import DRAWER from '@src/utils/svg/toolbar/drawer.svg';
import setColors, { moveHandler } from '@src/utils/setColor';
import html2canvas from 'html2canvas';

import * as StyleComponent from './style';

const Drawer = () => {
  const dispatch = useDispatch();
  const color = ['black', 'yellow', 'red', 'green'];
  const { mathQuillContainer } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  let canvas: any;
  const plus = () => {
    console.log('1');
  };
  const onClickHandler = async (e: React.MouseEvent<HTMLElement>) => {
    const colors = setColors(e.target);
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

  const { isDropdownShow, latexContainer } = useSelector(
    (state: RootState) => state.drawerDropdownHandler
  );
  let latexSection: any;
  const onClickDrawerHandler = async () => {
    dispatch(dropdown(!isDropdownShow));
    const src = mathQuillContainer.current;

    canvas = await html2canvas(src);
    if (!isDropdownShow) {
      src.appendChild(canvas);
      dispatch(changeLatex(src.childNodes[0]));
      src.removeChild(src.childNodes[0]);
    } else {
      src.appendChild(latexContainer);
      src.removeChild(src.childNodes[0]);
    }
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
