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
    latex: '/',
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
    svg: SVG.integral.DOUBLE_INTEGRAL,
    latex: '\\iint _{\\ }^{\\ }',
  },
  {
    name: 'integral4',
    svg: SVG.integral.DOUBLE_INTEGRAL_2,
    latex: '\\iint _{ }^{ }',
  },
  {
    name: 'integral5',
    svg: SVG.integral.LINE_INTEGRAL,
    latex: '\\oint _{\\ }^{\\ }',
  },
  {
    name: 'integral6',
    svg: SVG.integral.LINE_INTEGRAL_2,
    latex: '\\oint _{ }^{ }',
  },
  {
    name: 'integral7',
    svg: SVG.integral.SURFACE_INTEGRAL,
    latex: '\\oiint _{\\ }^{\\ }',
  },
  {
    name: 'integral8',
    svg: SVG.integral.SURFACE_INTEGRAL_2,
    latex: '\\oiint _{ }^{ }',
  },
  {
    name: 'integral9',
    svg: SVG.integral.VOLUMN_INTEGRAL,
    latex: '\\oiiint _{\\ }^{\\ }',
  },
  {
    name: 'integral10',
    svg: SVG.integral.VOLUMN_INTEGRAL_2,
    latex: '\\oiiint _{ }^{ }',
  },
  {
    name: 'integral11',
    svg: SVG.integral.INTEGRAL_THEOREM,
    latex: '\\left\\lceil \\right\\rceil _{ }^{ }',
  },
];

export const sigma: InputMath[] = [
  {
    name: 'sigma1',
    svg: SVG.largeOperator.SIMGA,
    latex: '\\sum _{\\ }^{\\ }',
  },
  {
    name: 'sigma2',
    svg: SVG.largeOperator.SIMGA_2,
    latex: '\\sum _{ }^{ }',
  },
  {
    name: 'pi',
    svg: SVG.largeOperator.PI,
    latex: '\\prod _{\\ }^{\\ }',
  },
  {
    name: 'pi2',
    svg: SVG.largeOperator.PI_2,
    latex: '\\prod _{ }^{ }',
  },
  {
    name: 'union',
    svg: SVG.largeOperator.UNION,
    latex: '\\bigcup _{\\ }^{\\ }',
  },
  {
    name: 'union2',
    svg: SVG.largeOperator.UNION_2,
    latex: '\\bigcup _{ }^{ }',
  },
  {
    name: 'intersection',
    svg: SVG.largeOperator.INTERSECTION,
    latex: '\\bigcap _{\\ }^{\\ }',
  },
  {
    name: 'intersection2',
    svg: SVG.largeOperator.INTERSECTION_2,
    latex: '\\bigcap _{ }^{ }',
  },
  {
    name: 'vee',
    svg: SVG.largeOperator.VEE,
    latex: '\\bigvee _{\\ }^{\\ }',
  },
  {
    name: 'vee2',
    svg: SVG.largeOperator.VEE_2,
    latex: '\\bigvee _{ }^{ }',
  },
  {
    name: 'wedge',
    svg: SVG.largeOperator.WEDGE,
    latex: ' \\bigwedge _{\\ }^{\\ }',
  },
  {
    name: 'wedge2',
    svg: SVG.largeOperator.WEDGE_2,
    latex: ' \\bigwedge _{ }^{ }',
  },
];
