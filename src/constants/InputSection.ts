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
import ARROW from '@src/utils/svg/leftsection/inputsection/arrow.svg';
import INQUALITY from '@src/utils/svg/leftsection/inputsection/inequality.svg';
import NOTOPERATOR from '@src/utils/svg/leftsection/inputsection/notoperator.svg';
import FIGURE from '@src/utils/svg/leftsection/inputsection/figure.svg';
import UNIT from '@src/utils/svg/leftsection/inputsection/unit.svg';
import SPECIALSYMBOL from '@src/utils/svg/leftsection/inputsection/specialsymbol.svg';
import PLUS from '@src/utils/svg/leftsection/inputsection/plus.svg';
import MINUS from '@src/utils/svg/leftsection/inputsection/minus.svg';
import MULTIPLE from '@src/utils/svg/leftsection/inputsection/multiple.svg';
import DIVISION from '@src/utils/svg/leftsection/inputsection/division.svg';
import GREECE from '@src/utils/svg/leftsection/inputsection/greece.svg';
import FONT from '@src/utils/svg/leftsection/inputsection/font.svg';
import NullPreview from '@src/utils/svg/latex/nullPreview.png';
import { tabReducer } from '@src/store/modules/tab';

export interface InputLatex {
  name: string;
  svg: string;
  latex: string;
  isPossible?: boolean;
}
export const InputLatexTopContent: InputLatex[] = [
  {
    name: 'mathFraction',
    svg: MULTPLY,
    latex: '\\frac{ }{ }',
    isPossible: true,
  },
  {
    name: 'sqrt',
    svg: ROOT,
    latex: '\\sqrt{ }',
    isPossible: true,
  },
  {
    name: 'combi',
    svg: POW,
    latex: '^{ }',
    isPossible: true,
  },
  {
    name: 'integral',
    svg: INTEGRAL,
    latex: '\\int _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'sigma',
    svg: SIGMA,
    latex: '\\sum _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'bracket',
    svg: GLOHO,
    latex: '\\left\\{\\right\\}',
    isPossible: true,
  },
  {
    name: 'sin',
    svg: SIN,
    latex: '\\sin ^{ }',
    isPossible: true,
  },
  {
    name: 'decoration',
    svg: DECORATION,
    latex: '\\dot{ }\\dot{ }',
    isPossible: true,
  },
  {
    name: 'limit',
    svg: LIMIT,
    latex: '\\lim _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'operator',
    svg: OPERATOR,
    latex: '\\triangleq',
    isPossible: false,
  },
  {
    name: 'matrix',
    svg: MATRIX,
    latex: '\\begin{pmatrix}  &  \\  &  \\end{pmatrix}',
    isPossible: false,
  },
  {
    name: 'inputdraw',
    svg: INPUTDRAW,
    latex:
      '\\begin{grid}\\cell{0000}&\\cell{0000}\\\\cell{0000}&\\cell{0000}\\end{grid}',
    isPossible: false,
  },
];

export const InputLatexMathTopContent: InputLatex[] = [
  {
    name: 'arrow',
    svg: ARROW,
    latex: '\\gets',
    isPossible: true,
  },
  {
    name: 'inequality',
    svg: INQUALITY,
    latex: '<',
    isPossible: true,
  },
  {
    name: 'notoperator',
    svg: NOTOPERATOR,
    latex: '\\nless ',
    isPossible: true,
  },
  {
    name: 'figure',
    svg: FIGURE,
    latex: '∟',
    isPossible: true,
  },
  {
    name: 'unit',
    svg: UNIT,
    latex: '㎠',
    isPossible: true,
  },
  {
    name: 'specialsymbol',
    svg: SPECIALSYMBOL,
    latex: '①',
    isPossible: true,
  },

  {
    name: 'greece',
    svg: GREECE,
    latex: '\\alpha ',
    isPossible: true,
  },
  {
    name: 'misc',
    svg: FONT,
    latex: '\\epsilon',
    isPossible: true,
  },
];
export const InputCalculation: InputLatex[] = [
  {
    name: 'division',
    svg: DIVISION,
    latex: '\\div ',
    isPossible: true,
  },
  {
    name: 'plus',
    svg: PLUS,
    latex: '+',
    isPossible: true,
  },
  {
    name: 'minus',
    svg: MINUS,
    latex: '-',
    isPossible: true,
  },
  {
    name: 'multiple',
    svg: MULTIPLE,
    latex: '\\times ',
    isPossible: true,
  },
];
