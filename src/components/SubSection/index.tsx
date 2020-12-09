// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useRef, useEffect } from 'react';
import Desmos from 'desmos';
import * as StyleComponent from './style';

interface Props {
  visible: boolean;
}

const SubSection = ({ visible }: Props) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const calculator = Desmos.GraphingCalculator(canvasRef.current, {
    expressions: false,
    settingsMenu: false,
    zoomButtons: false,
    trace: false,
    border: false,
    lockViewport: true,
  });
  calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });

  const onClickHandler = () => {
    calculator.destroy();
  };

  return (
    <StyleComponent.RightArea show={visible}>
      <StyleComponent.Title onClick={onClickHandler}>
        <div className="edge" />
        <div className="title">Graph</div>
      </StyleComponent.Title>
      <StyleComponent.GraphContainer ref={canvasRef} />
    </StyleComponent.RightArea>
  );
};

export default SubSection;
