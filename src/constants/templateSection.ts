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
    latex: 'sqrt{\frac{ }{ }}',
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
    latex: 'left(\\frac{ }{ }\\right)^2',
  },
  {
    name: 'combi5',
    svg: SVG.combi.COMBI_5,
    latex: '\\frac{1}{\\combi{ }^{ }}',
  },
  {
    name: 'combi6',
    svg: SVG.combi.COMBI_6,
    latex: '\\frac{\\combi{ }^{ }}{\\combi{ }^{ }}',
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
];

export default templateSection;
