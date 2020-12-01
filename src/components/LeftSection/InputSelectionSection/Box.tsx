import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { useDrag } from 'react-dnd';

const style: React.CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

interface BoxProps {
  name: string;
  latex: string;
}

export const Box = ({ name, latex }: BoxProps) => {
  const { mathQuiiFunc } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );

  const handleClientOffset = (x: number, y: number) => {
    mathQuiiFunc.dropEmbedded(x, y, {
      htmlString: `<span>3</span>`,
      text() {
        return 'custom_embed';
      },
      latex() {
        return '\\sqrt';
      },
    });
  };

  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'box' },
    end: (item, monitor) => {
      console.log(item.name);
      const offset = monitor.getClientOffset();
      console.log(offset.x, offset.y);
      handleClientOffset(offset.x, offset.y);
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag} style={{ ...style, opacity }}>
      {name}
    </div>
  );
};
