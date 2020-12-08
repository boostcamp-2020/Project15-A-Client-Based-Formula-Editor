/* eslint-disable react/button-has-type */
/* eslint-disable prefer-destructuring */
/* eslint-disable consistent-return */
import React, { useEffect, useState, useRef, useCallback } from 'react';
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
  const ref = useRef();
  const { isDropdownShow, latexContainer, isClick } = useSelector(
    (state: RootState) => state.drawerDropdownHandler
  );
  const [contextValue, setContext] = useState();
  const [clicks, setClick] = useState(true);
  const [colorValue, setColor] = useState('');
  const dispatch = useDispatch();
  const color = ['black', 'yellow', 'red', 'green', 'white'];

  const { mathQuillContainer } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const onClickHandler = async (e: React.MouseEvent<HTMLElement>) => {
    // const canvas = mathQuillContainer.current.children[0];
    // const contexts = canvas.getContext('2d');
    // const [colors, context] = setColors(e.target, contexts);
    // setContext(context);
    // setColor(colors);
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
  const onClickClearHandler = () => {
    (contextValue as any).fillStyle = '#ffffff';
  };
  const onClickDrawerHandler = async () => {
    dispatch(dropdown(!isDropdownShow));
    const src = mathQuillContainer.current;

    const canvasSection = await html2canvas(src);
    if (!isDropdownShow) {
      src.appendChild(canvasSection);
      dispatch(changeLatex(src.childNodes[0]));
      src.removeChild(src.childNodes[0]);
    } else {
      src.appendChild(latexContainer);
      src.removeChild(src.childNodes[0]);
    }
  };
  const mouseDownHandler = () => {
    (contextValue as any).fillStyle = colorValue;
    setClick(true);
  };
  const mouseUpHandler = () => {
    setClick(false);
  };
  // useEffect(() => {
  //   document.addEventListener('mousedown', mouseDownHandler, true);
  //   document.addEventListener('mousemove', (e) => {
  //     moveHandler(e, contextValue, ref.current);
  //   });
  //   return () => {
  //     document.removeEventListener('mousemove', (e) => {
  //       moveHandler(e, contextValue, ref.current);
  //     });
  //     document.removeEventListener('mousedown', mouseDownHandler, true);
  //   };
  // }, [mouseDownHandler]);

  // useEffect(() => {
  //   const moveMouseUpHandler = () => {
  //     (contextValue as any).fillStyle = 'transparent';
  //   };

  //   document.addEventListener('mouseup', moveMouseUpHandler);
  //   return () => {
  //     document.removeEventListener('mouseup', moveMouseUpHandler);
  //   };
  // }, [mouseUpHandler]);
  return (
    <div>
      <RoundButton onClick={onClickDrawerHandler}>
        <DRAWER />
      </RoundButton>
      {isDropdownShow && (
        <StyleComponent.DrawerContainer>
          {DrawerItem}
          <button onClick={onClickClearHandler}>
            <ERASE />
          </button>

          <input type="range" ref={ref} min="1" max="5" />
        </StyleComponent.DrawerContainer>
      )}
    </div>
  );
};

export default Drawer;
