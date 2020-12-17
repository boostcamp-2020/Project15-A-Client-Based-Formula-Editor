/* eslint-disable no-nested-ternary */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line react/jsx-wrap-multilines
import React, { useState, useRef, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { RootState } from '@src/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import { change } from '@src/store/modules/mathQuill';
import { getMathQuillContainer } from '@src/store/modules/saveMode';
import { getCanvas } from '@src/store/modules/backgroundDropdown';
import Canvas from '@src/components/Common/Canvas';
import Alert from '@src/components/Alert';
import CropSection from './CropSection';
import MainSectionTemplate from './MainSectionTemplate';
import MathQuill from './MathQuill';
import Latex from './LatexSection';
import Tab from './Tab';

let curPosY: number = 0;
let totalLength: number = 0;
let curPercent: number = 25;
interface Props {
  visible: boolean;
}
const MainSection = ({ visible }: Props) => {
  const { latex } = useSelector((state: RootState) => state.mathQuillReducer);
  const { cropModal } = useSelector(
    (state: RootState) => state.saveModeReducer
  );
  
  const {
    backgroundDropdown,
  } = useSelector((state: RootState) => state.backgroundDropdownReducer);
  
  const { saveButtonActive } = useSelector(
    (state: RootState) => state.saveModeReducer
  );
  
  const { paintDropdown } = useSelector(
    (state: RootState) => state.paintDropdownReducer
  );
  
  const dispatch = useDispatch();
  
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(change(e.target.value));
  };

  const mainSectionRef = useRef<HTMLDivElement>(null);
  const backgroundCanvas = useRef<HTMLCanvasElement>(null);


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
        mathQuill={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <MathQuill
            isBackgroundDropdownShow={backgroundDropdown}
            isActive={isActive}
            canDrop={canDrop}
            latex={latex}
            dragndrop={drop}
            paintDropdown={paintDropdown}
          />
        }
        canvas={
          backgroundDropdown ? (
            <Canvas backgroundCanvas={backgroundCanvas} show="background" />
          ) : paintDropdown ? (
            <Canvas backgroundCanvas={backgroundCanvas} show="drawer" />
          ) : undefined
        }
        latex={<Latex value={latex} onChange={changeHandler} />}
        tab={<Tab />}
        resizing={resizing}
        height={height}
        show={visible}
      />
      {cropModal && saveButtonActive && <CropSection height={height} visible={visible} />}
    </>
  );
};

export default MainSection;
