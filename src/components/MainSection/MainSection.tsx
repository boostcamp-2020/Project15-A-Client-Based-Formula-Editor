import React from 'react';
import { useDrop } from 'react-dnd';
import MainSectionTemplate from './MainSectionTemplate';
import MathQuill from './MathQuill/index';
import Latex from './LatexSection/index';
import Tab from './Tab/index';

const MainSection = () => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'box',
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const [, resizeDrop] = useDrop({
    accept: 'resize',
    hover(item, monitor) {
      const test = 1;
    },
  });

  const isActive = canDrop && isOver;

  return (
    <MainSectionTemplate
      mathQuill={<MathQuill isActive={isActive} canDrop={canDrop} />}
      latex={<Latex />}
      tab={<Tab />}
    />
  );
};

export default MainSection;
