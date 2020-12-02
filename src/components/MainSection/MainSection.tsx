import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { RootState } from '@src/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import { change } from '@src/store/modules/mathQuill';
import MainSectionTemplate from './MainSectionTemplate';
import MathQuill from './MathQuill';
import Latex from './LatexSection';
import Tab from './Tab';

const MainSection = () => {
  const { latex } = useSelector((state: RootState) => state.mathQuillReducer);
  const dispatch = useDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(change(e.target.value));
  };

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'box',
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const [height, setHeight] = useState(300);
  const maxHeight = 800;
  const minHeight = 100;

  const [, resizing] = useDrop({
    accept: 'resize',
    hover(item, monitor) {
      const dy = Math.abs(monitor.getDifferenceFromInitialOffset().y / 10);
      console.log(dy);
    },
  });

  const isActive = canDrop && isOver;

  return (
    <MainSectionTemplate
      mathQuill={
        <MathQuill isActive={isActive} canDrop={canDrop} latex={latex} />
      }
      latex={<Latex value={latex} onChange={changeHandler} />}
      tab={<Tab />}
      resizing={resizing}
      height={height}
    />
  );
};

export default MainSection;
