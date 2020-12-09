// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useRef } from 'react';
import Desmos from 'desmos';
import * as StyleComponent from './style';

interface Props {
  visible: boolean;
}

const SubSection = ({ visible }: Props) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  console.log(canvasRef);
  const calculator = Desmos.GraphingCalculator(canvasRef.current);
  calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });

  // const html = elt.innerHTML;

  // const createMarkup = () => {
  //   console.log(html);
  //   return { __html: `${html}` };
  // };

  return (
    <StyleComponent.RightArea show={visible}>
      <StyleComponent.GraphContainer ref={canvasRef} />
    </StyleComponent.RightArea>
  );
};

export default SubSection;
