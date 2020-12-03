import FRACTION from '@src/utils/svg/leftsection/mathsection/fraction.svg';
import SLASH from '@src/utils/svg/leftsection/mathsection/slash.svg';
import SQRT from '@src/utils/svg/leftsection/mathsection/sqrt.svg';
import COMBI from '@src/utils/svg/leftsection/mathsection/combi.svg';

export interface InputMath {
  name: string;
  svg: string;
  latex: string;
}
export const fraction: InputMath[] = [
  {
    name: 'fraction',
    svg: FRACTION,
    latex: '\\frac{}{}',
  },
  {
    name: 'slash',
    svg: SLASH,
    latex: '/ ',
  },
];

export const sqrt: InputMath[] = [
  {
    name: 'sqrt1',
    svg: SQRT,
    latex: '\\sqrt{ } ',
  },
  {
    name: 'sqrt2',
    svg: SQRT,
    latex: '\\sqrt[]{} ',
  },
];

export const combi: InputMath[] = [
  {
    name: 'combi1',
    svg: COMBI,
    latex: 'combi{ }^{ }',
  },
  {
    name: 'combi2',
    svg: COMBI,
    latex: 'combi{ }_{ }',
  },
  {
    name: 'combi3',
    svg: COMBI,
    latex: 'combi{ }^{ }',
  },
  {
    name: 'combi4',
    svg: COMBI,
    latex: '\\combi{ }_{ }^{ }',
  },
  {
    name: 'combi5',
    svg: COMBI,
    latex: '\\combi{\\ }_{ }^{ }\\combi{ }',
  },
  {
    name: 'combi6',
    svg: COMBI,
    latex: '\\combi{\\ }_{ }\\combi{ }_{ }',
  },
  {
    name: 'combi7',
    svg: COMBI,
    latex: '\\combi{\\ }_{ }^{ }combi{ }_{ }^{ }',
  },
];
