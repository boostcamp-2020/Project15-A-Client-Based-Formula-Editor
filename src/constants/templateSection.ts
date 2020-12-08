import { SVG } from '@src/utils/svg/leftsection/templatesection';

export interface InputMath {
  name: string;
  svg: string;
  latex: string;
}
export const fraction: InputMath[] = [
  {
    name: 'fraction1',
    svg: SVG.fraction.FRACTION,
    latex: '\\frac{dy}{dx}',
  },
  {
    name: 'fraction2',
    svg: SVG.fraction.FRACTION_2,
    latex: '\\frac{\\triangle y}{\\triangle x}',
  },
];

export const sqrt: InputMath[] = [
  {
    name: 'sqrt1',
    svg: SVG.sqrt.SQRT,
    latex: '\\sqrt{\\frac{ }{ }}',
  },
  {
    name: 'sqrt2',
    svg: SVG.sqrt.SQRT_2,
    latex: '\\frac{\\sqrt{ }}{\\sqrt{ }}',
  },
];

export const combi: InputMath[] = [
  {
    name: 'combi1',
    svg: SVG.combi.COMBI,
    latex: 'A^c',
  },
  {
    name: 'combi2',
    svg: SVG.combi.COMBI_2,
    latex: 'x^2',
  },
  {
    name: 'combi3',
    svg: SVG.combi.COMBI_3,
    latex: '\\left(\\right)^2',
  },
  {
    name: 'combi4',
    svg: SVG.combi.COMBI_4,
    latex: '\\left(\\frac{ }{ }\\right)^2',
  },
  {
    name: 'combi5',
    svg: SVG.combi.COMBI_5,
    latex: '\\frac{1}{^{ }}',
  },
  {
    name: 'combi6',
    svg: SVG.combi.COMBI_6,
    latex: '\\frac{^{ }}{^{ }}',
  },
];

export const integral: InputMath[] = [
  {
    name: 'integral1',
    svg: SVG.integral.INTEGRAL,
    latex: '\\frac{dy}{dx}',
  },
  {
    name: 'integral2',
    svg: SVG.integral.INTEGRAL_2,
    latex: '\\frac{\\triangle y}{\\triangle x}',
  },
  {
    name: 'integral3',
    svg: SVG.integral.INTEGRAL_3,
    latex: '\\int _{\\ }^{\\ }f\\left(x\\right)dx',
  },
  {
    name: 'integral4',
    svg: SVG.integral.INTEGRAL_4,
    latex: '\\frac{d}{dx}\\int _a^sf\\left(t\\right)dt',
  },
];
const templateSection = [
  {
    name: 'mathFraction',
    value: fraction,
  },
  {
    name: 'sqrt',
    value: sqrt,
  },
  {
    name: 'combi',
    value: combi,
  },
  {
    name: 'integral',
    value: integral,
  },
  // {
  //   name: 'sigma',
  //   value: sigma,
  // },
  // {
  //   name: 'limit',
  //   value: limit,
  // },
  // {
  //   name: 'sin',
  //   value: trigonometric,
  // },
  // {
  //   name: 'bracket',
  //   value: bracket,
  // },
  // {
  //   name: 'decoration',
  //   value: deco,
  // },
  // {
  //   name: 'operator',
  //   value: operator,
  // },
  // {
  //   name: 'matrix',
  //   value: matrix,
  // },
];

export default templateSection;
