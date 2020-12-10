// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/store/modules';
import Desmos from 'desmos';
import * as GraphAction from '@src/store/modules/graph';
import * as StyleComponent from './style';

interface Props {
  visible: boolean;
}

const SubSection = ({ visible }: Props) => {
  const { latex } = useSelector((state: RootState) => state.mathQuillReducer);
  const dispatch = useDispatch();

  const graphRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const calculator = Desmos.GraphingCalculator(graphRef.current, {
      expressions: false,
      settingsMenu: false,
      zoomButtons: false,
      trace: false,
      border: false,
      showGrid: false,
    });
    calculator.setExpression({
      id: 'graph1',
      latex,
    });

    return () => calculator.destroy();
  }, [visible, latex]);

  const onClickHandler = () => {
    dispatch(GraphAction.clickButton());
  };

  return (
    <StyleComponent.RightArea show={visible}>
      <StyleComponent.Title onClick={onClickHandler}>
        <div className="edge" />
        <div className="title">Graph</div>
      </StyleComponent.Title>
      <StyleComponent.GraphContainer ref={graphRef} />
    </StyleComponent.RightArea>
  );
};

export default SubSection;
