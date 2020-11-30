import MULTPLY from '@src/utils/svg/leftsection/inputsection/multiply.svg';
import ROOT from '@src/utils/svg/leftsection/inputsection/root.svg';
import POW from '@src/utils/svg/leftsection/inputsection/pow.svg';
import INTEGRAL from '@src/utils/svg/leftsection/inputsection/integral.svg';
import SIGMA from '@src/utils/svg/leftsection/inputsection/sigma.svg';
import GLOHO from '@src/utils/svg/leftsection/inputsection/galho.svg';
import SIN from '@src/utils/svg/leftsection/inputsection/sin.svg';

export interface InputLatex {
  name: string;
  svg: string;
  latex: string;
}
export const InputLatexContent: InputLatex[] = [
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
