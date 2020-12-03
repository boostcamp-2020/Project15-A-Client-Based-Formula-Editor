import { SVG } from '@src/utils/svg/leftsection/mathsection';

export interface InputMath {
  name: string;
  svg: string;
  latex: string;
}
export const mathFraction: InputMath[] = [
  {
    name: 'fraction',
    svg: SVG.fraction.FRACTION,
    latex: '\\frac{}{}',
  },
  {
    name: 'slash',
    svg: SVG.fraction.SLASH,
    latex: '/ ',
  },
];

export const sqrt: InputMath[] = [
  {
    name: 'sqrt1',
    svg: SVG.sqrt.SQRT,
    latex: '\\sqrt{ } ',
  },
  {
    name: 'sqrt2',
    svg: SVG.sqrt.SQRT_WITH_DEGREE,
    latex: '\\sqrt[]{} ',
  },
];

export const combi: InputMath[] = [
  {
    name: 'combi1',
    svg: SVG.combi.COMBI,
    latex: 'combi{ }^{ }',
  },
  {
    name: 'combi2',
    svg: SVG.combi.COMBI_DOWN,
    latex: 'combi{ }_{ }',
  },
  {
    name: 'combi3',
    svg: SVG.combi.COMBI_RIGHT,
    latex: '\\combi{ }_{ }^{ }',
  },
  {
    name: 'combi4',
    svg: SVG.combi.COMBI_LEFT,
    latex: '\\combi{\\ }_{ }^{ }\\combi{ }',
  },
  {
    name: 'combi5',
    svg: SVG.combi.COMBI_DOWN_BOTH,
    latex: '\\combi{\\ }_{ }\\combi{ }_{ }',
  },
  {
    name: 'combi6',
    svg: SVG.combi.COMBI_ALL,
    latex: '\\combi{\\ }_{ }^{ }combi{ }_{ }^{ }',
  },
];

export const integral: InputMath[] = [
  {
    name: 'integral1',
    svg: SVG.integral.INTEGRAL,
    latex: '\\int _{\\ }^{\\ }',
  },
  {
    name: 'integral2',
    svg: SVG.integral.DEFINITE_INTEGRAL,
    latex: '\\int _{ }^{ }',
  },
  {
    name: 'integral3',
    svg: SVG.integral.INTEGRAL,
    latex: '\\iint _{\\ }^{\\ }',
  },
  {
    name: 'integral4',
    svg: SVG.integral.INTEGRAL,
    latex: '\\iint _{ }^{ }',
  },
  {
    name: 'integral5',
    svg: SVG.integral.INTEGRAL,
    latex: '\\oint _{\\ }^{\\ }',
  },
  {
    name: 'integral6',
    svg: SVG.integral.INTEGRAL,
    latex: '\\oint _{ }^{ }',
  },
  {
    name: 'integral7',
    svg: SVG.integral.INTEGRAL,
    latex: '\\oiint _{\\ }^{\\ }',
  },
  {
    name: 'integral8',
    svg: SVG.integral.INTEGRAL,
    latex: '\\oiint _{ }^{ }',
  },

  {
    name: 'integral9',
    svg: SVG.integral.INTEGRAL,
    latex: '\\oiiint _{\\ }^{\\ }',
  },
  {
    name: 'integral10',
    svg: SVG.integral.INTEGRAL,
    latex: '\\oiiint _{ }^{ }',
  },
  {
    name: 'integral11',
    svg: SVG.integral.INTEGRAL,
    latex: ' \\left\\lceil \\right\\rceil _{ }^{ }',
  },
];
