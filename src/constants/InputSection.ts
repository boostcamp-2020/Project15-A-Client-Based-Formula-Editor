import MULTPLY from '@src/utils/svg/leftsection/InputSection/multiply.svg';
import ROOT from '@src/utils/svg/leftsection/InputSection/root.svg';
import POW from '@src/utils/svg/leftsection/InputSection/pow.svg';
import INTEGRAL from '@src/utils/svg/leftsection/InputSection/integral.svg';
import SIGMA from '@src/utils/svg/leftsection/InputSection/sigma.svg';
import GLOHO from '@src/utils/svg/leftsection/InputSection/galho.svg';
import SIN from '@src/utils/svg/leftsection/InputSection/sin.svg';

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
