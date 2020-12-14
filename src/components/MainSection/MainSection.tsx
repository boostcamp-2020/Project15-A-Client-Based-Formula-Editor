/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line react/jsx-wrap-multilines
import React, { useState, useRef, useEffect} from 'react';
import { useDrop } from 'react-dnd';
import { RootState } from '@src/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import { change } from '@src/store/modules/mathQuill';
import { getMathQuillContainer } from '@src/store/modules/getMathQuill';
import {getCanvas} from '@src/store/modules/backgroundDropdown';
import Canvas from '@src/components/Common/Canvas';
import Alert from '@src/components/Alert'
import CropSection from './CropSection';
import MainSectionTemplate from './MainSectionTemplate';
import MathQuill from './MathQuill';
import Latex from './LatexSection';
import Tab from './Tab';

let curPosY: number = 0;
let totalLength: number = 0;
let curPercent: number = 25;

const MainSection = () => {
  const { latex } = useSelector((state: RootState) => state.mathQuillReducer);
  const { click } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const { isBackgroundDropdownShow,winterDropdownShow, summerDropdownShow} = useSelector(
    (state: RootState) => state.BackgroundDropdownHandler
  );
  const { saveClick } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const {isDropdownShow} = useSelector(
    (state:RootState) => state.drawerDropdownHandler
  )
  const dispatch = useDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(change(e.target.value));
  };
  
  const mainSectionRef = useRef<HTMLDivElement>(null);
  const backgroundCanvas = useRef<any>(null);
  const canvas = backgroundCanvas.current;


  const { mathQuiiFunc } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );

  const handleClientOffset = (x: number, y: number, latexString: string) => {
    mathQuiiFunc.clickAt(x, y);
    mathQuiiFunc.write(latexString);
  };

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'box',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    drop(item: { name: string; type: string; latex: string }, monitor) {
      const clientOffset = monitor.getClientOffset();
      handleClientOffset(clientOffset.x, clientOffset.y, item.latex);
    },
  });

  const heightInfo = { initial: 25 };
  const [height, setHeight] = useState(heightInfo.initial);

  const [, resizing] = useDrop({
    accept: 'resize',
    collect: (monitor) => ({
      canResizing: monitor.isOver(),
      endResizing: monitor.canDrop(),
    }),
    drop() {
      curPosY = 0;
      totalLength = 0;
      curPercent = height;
    },
    hover(item, monitor) {
      const dy = monitor.getDifferenceFromInitialOffset().y;
      if (curPosY === 0) {
        curPosY = monitor.getClientOffset().y - 105;
      }

      if (totalLength === 0) {
        const test = (curPosY / (100 - curPercent)) * 100;
        totalLength = test;
      }

      const tmp = Math.round(100 - ((curPosY + dy) / totalLength) * 100);

      if (dy % 15 === 0 && tmp !== height) setHeight(tmp);
    },
  });

  const isActive = canDrop && isOver;

  useEffect(() => {
    dispatch(getMathQuillContainer(mainSectionRef));
    dispatch(getCanvas(backgroundCanvas));

  }, []);

  return (
    <>
      <MainSectionTemplate
        mainSectionRef={mainSectionRef}
        alert={<Alert />}
        mathQuill={(
          <MathQuill
            isBackgroundDropdownShow={isBackgroundDropdownShow}
            isActive={isActive}
            canDrop={canDrop}
            latex={latex}
            dragndrop={drop}
            isDropdownShow={isDropdownShow}
          />
        )}
        canvas={isBackgroundDropdownShow? (
          <Canvas backgroundCanvas={backgroundCanvas} show="background" />
        ):  (isDropdownShow? <Canvas backgroundCanvas={backgroundCanvas} show="drawer" />:undefined)}
        latex={<Latex value={latex} onChange={changeHandler} />}
        tab={<Tab />}
        resizing={resizing}
        height={height}
      />
    
      {click && saveClick &&  <CropSection /> }
    </>
  );
};

export default MainSection;
