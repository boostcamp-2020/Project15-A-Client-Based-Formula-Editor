import MULTPLY from '@src/utils/svg/leftsection/inputsection/multiply.svg';
import ROOT from '@src/utils/svg/leftsection/inputsection/root.svg';
import POW from '@src/utils/svg/leftsection/inputsection/pow.svg';
import INTEGRAL from '@src/utils/svg/leftsection/inputsection/integral.svg';
import SIGMA from '@src/utils/svg/leftsection/inputsection/sigma.svg';
import GLOHO from '@src/utils/svg/leftsection/inputsection/galho.svg';
import SIN from '@src/utils/svg/leftsection/inputsection/sin.svg';
import DECORATION from '@src/utils/svg/leftsection/inputsection/decoration.svg';
import LIMIT from '@src/utils/svg/leftsection/inputsection/limit.svg';
import OPERATOR from '@src/utils/svg/leftsection/inputsection/operator.svg';
import MATRIX from '@src/utils/svg/leftsection/inputsection/matrix.svg';
import INPUTDRAW from '@src/utils/svg/leftsection/inputsection/inputdraw.svg';

export interface InputLatex {
  name: string;
  svg: string;
  latex: string;
}
export const InputLatexTopContent: InputLatex[] = [
  {
    name: 'multiply',
    svg: MULTPLY,
    latex: '\frac{ }{ }',
  },
  {
    name: 'root',
    svg: ROOT,
    latex: '\\sqrt{ }',
  },
  {
    name: 'pow',
    svg: POW,
    latex: '\\combi{ }^{ }',
  },
  {
    name: 'integral',
    svg: INTEGRAL,
    latex: '\\int _{ }^{ }',
  },
  {
    name: 'sigma',
    svg: SIGMA,
    latex: '\\sum _{ }^{ }',
  },
  {
    name: 'galho',
    svg: GLOHO,
    latex: 'left{combi{ }\right}',
  },
];
export const InputLatexBottomContent: InputLatex[] = [
  {
    name: 'sin',
    svg: SIN,
    latex: 'sin ^{ }',
  },
  {
    name: 'decoration',
    svg: DECORATION,
    latex: 'ddot{ }',
  },
  {
    name: 'limit',
    svg: LIMIT,
    latex: 'lim _{ }^{ }combi{ }',
  },
  {
    name: 'operator',
    svg: OPERATOR,
    latex: 'deltaequal ',
  },
  {
    name: 'matrix',
    svg: MATRIX,
    latex: '\begin{matrix}&\\&end{matrix}',
  },
  {
    name: 'inputdraw',
    svg: INPUTDRAW,
    latex: '\begin{matrix}&\\&end{matrix}',
  },
];
