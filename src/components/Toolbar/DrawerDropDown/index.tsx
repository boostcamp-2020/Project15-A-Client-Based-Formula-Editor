import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import ERASE from '@src/utils/svg/toolbar/erase.svg';
import { RoundButton } from '@src/components/Common/RoundButton/style';
import { dropdown } from '@src/store/modules/drawerDropdown';
import { closeDropdown } from '@src/store/modules/backgroundDropdown';
import DRAWER from '@src/utils/svg/toolbar/drawer.svg';
import setColors, { moveHandler } from '@src/utils/setColor';
import * as StyleComponent from './style';

const Drawer = () => {
  const ref = useRef();

  const { isDropdownShow, latexContainer, isClick } = useSelector(
    (state: RootState) => state.drawerDropdownHandler
  );
  const { isBackgroundDropdownShow } = useSelector(
    (state: RootState) => state.BackgroundDropdownHandler
  );
  const { backgroundCanvas } = useSelector(
    (state: RootState) => state.BackgroundDropdownHandler
  );
  const dispatch = useDispatch();
  const color = ['black', 'yellow', 'red', 'green', 'white'];
  const [contextValue, setContext] = useState();
  const [colorValue, setColor] = useState('');

  const onClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const canvas = backgroundCanvas.current;
    const contexts = canvas.getContext('2d');
    const [colors, context] = setColors(e.target, contexts);
    setContext(context);
    setColor(colors);
  };
  const mouseDownHandler = (e: any) => {
    console.log('down');
  };

  const mouseUpHandler = (e: any) => {
    console.log('up');
    console.log(e);
    const canvas = backgroundCanvas.current;
    const context = contextValue as any;
    moveHandler(e, canvas, context, ref.current);
  };
  const mouseMoveHandler = (e: any) => {
    console.log('move');
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

  const onClickDrawerHandler = () => {
    if (isBackgroundDropdownShow) {
      dispatch(closeDropdown());
    }
    dispatch(dropdown(!isDropdownShow));
  };
  const onClickClearHandler = () => {
    console.log('tmp');
  };
  useEffect(() => {
    document.addEventListener('mouseup', mouseUpHandler);
  }, [mouseMoveHandler]);
  useEffect(() => {
    document.addEventListener('mousemove', mouseMoveHandler);
    return () => document.removeEventListener('mousemove', mouseMoveHandler);
  }, [mouseMoveHandler]);
  useEffect(() => {
    document.addEventListener('mousedown', mouseDownHandler);

    return () => {
      document.removeEventListener('mousedown', mouseDownHandler);
    };
  }, [mouseDownHandler]);

  return (
    <div>
      <RoundButton onClick={onClickDrawerHandler}>
        <DRAWER />
      </RoundButton>
      {isDropdownShow && (
        <StyleComponent.DrawerContainer>
          {DrawerItem}
          <button type="button" onClick={onClickClearHandler}>
            <ERASE />
          </button>
          <input type="range" ref={ref} min="1" max="5" />
        </StyleComponent.DrawerContainer>
      )}
    </div>
  );
};

export default Drawer;
