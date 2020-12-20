import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/store/modules';
import { mathQuill, change } from '@src/store/modules/mathQuill';
import { addStyles, EditableMathField, MathField } from 'react-mathquill';
import * as StyleComponent from './style';

addStyles();

interface Props {
  isActive: boolean;
  canDrop: boolean;
  latex: string;
  isBackgroundDropdownShow: boolean;
  dragndrop: any;
  paintDropdown: boolean;
}

const EditableMathExample = ({
  isActive,
  canDrop,
  latex,
  isBackgroundDropdownShow,
  dragndrop,
  paintDropdown,
}: Props) => {
  const { fontDecline } = useSelector(
    (state: RootState) => state.fontDeclineReducer
  );
  const { fontAlign } = useSelector(
    (state: RootState) => state.fontAlignReducer
  );
  const { selectedFontSize } = useSelector(
    (state: RootState) => state.fontSizeDropdownReducer
  );
  const { fontColor } = useSelector(
    (state: RootState) => state.fontColorDropdownReducer
  );
  const dispatch = useDispatch();

  const handleMathQuill = (mathquill: any) => {
    dispatch(mathQuill(mathquill));
  };

  const changeHandler = useCallback((mathField: MathField) => {
    dispatch(change(mathField.latex()));
  }, []);
  return (
    <StyleComponent.MathField
      isActive={isActive}
      canDrop={canDrop}
      isDecline={fontDecline}
      fontAlign={fontAlign}
      fontSize={selectedFontSize}
      fontColor={fontColor}
      isBackgroundDropdownShow={isBackgroundDropdownShow}
      paintDropdown={paintDropdown}
      ref={dragndrop}
    >
      <EditableMathField
        latex={latex}
        onChange={changeHandler}
        mathquillDidMount={(mathField) => {
          handleMathQuill(mathField);
        }}
      />
    </StyleComponent.MathField>
  );
};

export default EditableMathExample;
