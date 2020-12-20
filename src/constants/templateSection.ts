import { SVG } from '@src/utils/svg/leftsection/templatesection';

export interface InputMath {
  name: string;
  svg: string;
  latex: string;
  isPossible: boolean;
}
export const fraction: InputMath[] = [
  {
    name: 'fraction1',
    svg: SVG.fraction.FRACTION,
    latex: '\\frac{dy}{dx}',
    isPossible: true,
  },
  {
    name: 'fraction2',
    svg: SVG.fraction.FRACTION_2,
    latex: '\\frac{\\triangle y}{\\triangle x}',
    isPossible: true,
  },
];

export const sqrt: InputMath[] = [
  {
    name: 'sqrt1',
    svg: SVG.sqrt.SQRT,
    latex: '\\sqrt{\\frac{ }{ }}',
    isPossible: true,
  },
  {
    name: 'sqrt2',
    svg: SVG.sqrt.SQRT_2,
    latex: '\\frac{\\sqrt{ }}{\\sqrt{ }}',
    isPossible: true,
  },
];

export const combi: InputMath[] = [
  {
    name: 'combi1',
    svg: SVG.combi.COMBI,
    latex: 'A^c',
    isPossible: true,
  },
  {
    name: 'combi2',
    svg: SVG.combi.COMBI_2,
    latex: 'x^2',
    isPossible: true,
  },
  {
    name: 'combi3',
    svg: SVG.combi.COMBI_3,
    latex: '\\left(\\right)^2',
    isPossible: true,
  },
  {
    name: 'combi4',
    svg: SVG.combi.COMBI_4,
    latex: '\\left(\\frac{ }{ }\\right)^2',
    isPossible: true,
  },
  {
    name: 'combi5',
    svg: SVG.combi.COMBI_5,
    latex: '\\frac{1}{^{ }}',
    isPossible: true,
  },
  {
    name: 'combi6',
    svg: SVG.combi.COMBI_6,
    latex: '\\frac{^{ }}{^{ }}',
    isPossible: true,
  },
];

export const integral: InputMath[] = [
  {
    name: 'integral1',
    svg: SVG.integral.INTEGRAL,
    latex: '\\frac{dy}{dx}',
    isPossible: true,
  },
  {
    name: 'integral2',
    svg: SVG.integral.INTEGRAL_2,
    latex: '\\frac{\\triangle y}{\\triangle x}',
    isPossible: true,
  },
  {
    name: 'integral3',
    svg: SVG.integral.INTEGRAL_3,
    latex: '\\int _{\\ }^{\\ }f\\left(x\\right)dx',
    isPossible: true,
  },
  {
    name: 'integral4',
    svg: SVG.integral.INTEGRAL_4,
    latex: '\\frac{d}{dx}\\int _a^sf\\left(t\\right)dt',
    isPossible: true,
  },
];

export const sigma: InputMath[] = [
  {
    name: 'sigma1',
    svg: SVG.largeOperator.LAREGE_OPERATOR,
    latex: '\\sum _{i=0}^n',
    isPossible: true,
  },
  {
    name: 'sigma2',
    svg: SVG.largeOperator.LAREGE_OPERATOR_2,
    latex: '\\sum _{k=1}^n',
    isPossible: true,
  },
  {
    name: 'sigma3',
    svg: SVG.largeOperator.LAREGE_OPERATOR_3,
    latex: '\\sum _{k=1}^{infty }',
    isPossible: true,
  },
  {
    name: 'sigma4',
    svg: SVG.largeOperator.LAREGE_OPERATOR_4,
    latex: '\\sum _{k=1}^{\\infty }\\left(\\frac{1}{n}\\right)^n',
    isPossible: true,
  },
  {
    name: 'sigma5',
    svg: SVG.largeOperator.LAREGE_OPERATOR_5,
    latex: '\\sum _{k=1}^{\\infty }\\log ',
    isPossible: true,
  },
];

export const bracket: InputMath[] = [
  {
    name: 'bracekt1',
    svg: SVG.bracket.BRACKET,
    latex: '\\left|x\\right|',
    isPossible: true,
  },
  {
    name: 'bracekt2',
    svg: SVG.bracket.BRACKET_2,
    latex: '\\left|f(x)\\right|',
    isPossible: true,
  },
  {
    name: 'bracekt3',
    svg: SVG.bracket.BRACKET_3,
    latex: 'f\\left(\\left|x\\right|\\right)',
    isPossible: true,
  },
  {
    name: 'bracekt4',
    svg: SVG.bracket.BRACKET_4,
    latex: '\\left[\\right]_a^b',
    isPossible: true,
  },
];

export const trigonometric: InputMath[] = [
  {
    name: 'func1',
    svg: SVG.trigonometric.FUNC,
    latex: '\\left(f\\circ g\\right)\\left(x\\right)',
    isPossible: true,
  },
  {
    name: 'func2',
    svg: SVG.trigonometric.FUNC_2,
    latex: '\\left(f\\circ f\\right)\\circ f',
    isPossible: true,
  },
  {
    name: 'func3',
    svg: SVG.trigonometric.FUNC_3,
    latex: 'f^{-1}',
    isPossible: true,
  },
  {
    name: 'func4',
    svg: SVG.trigonometric.FUNC_4,
    latex: '\\left(f^{-1}\\right)^{-1}',
    isPossible: true,
  },
  {
    name: 'func5',
    svg: SVG.trigonometric.FUNC_5,
    latex: `f'\\left(x\\right)`,
    isPossible: true,
  },
  {
    name: 'func6',
    svg: SVG.trigonometric.SIN,
    latex: '\\sin \\theta ',
    isPossible: true,
  },
  {
    name: 'func7',
    svg: SVG.trigonometric.COS,
    latex: '\\cos \\theta ',
    isPossible: true,
  },
  {
    name: 'func8',
    svg: SVG.trigonometric.TAN,
    latex: '\\tan \\theta',
    isPossible: true,
  },
];

export const decoration: InputMath[] = [
  {
    name: 'deco1',
    svg: SVG.deco.DECO,
    latex: '\\overline {AB}',
    isPossible: true,
  },
  {
    name: 'deco2',
    svg: SVG.deco.DECO_2,
    latex: '\\overline {X}',
    isPossible: true,
  },
  {
    name: 'deco3',
    svg: SVG.deco.DECO_3,
    latex: '\\overrightarrow{AB}',
    isPossible: true,
  },
];
export const limit: InputMath[] = [
  {
    name: 'limit1',
    svg: SVG.limit.LIMIT,
    latex: 'a^{\\log _bx}',
    isPossible: true,
  },
  {
    name: 'limit2',
    svg: SVG.limit.LIMIT_2,
    latex: '\\lim _{n\\to \\infty }^{ }',
    isPossible: true,
  },
  {
    name: 'limit3',
    svg: SVG.limit.LIMIT_3,
    latex: '\\lim _{n\\to \\infty }^{ }\\left(a_n\\pm b_n\\right)',
    isPossible: true,
  },
  {
    name: 'limit5',
    svg: SVG.limit.LIMIT_5,
    latex: '\\lim _{n\\to \\infty }^{ }\\left(1+\\frac{1}{n}\\right)^n',
    isPossible: true,
  },
  {
    name: 'limit6',
    svg: SVG.limit.LIMIT_6,
    latex: '\\lim _{n\\to \\infty }^{ }\\sum _{k=1}^n',
    isPossible: true,
  },
];

export const operator: InputMath[] = [
  {
    name: 'operator1',
    svg: SVG.symbol.SYMBOL,
    latex: '\\xrightarrow {yields}{\\ }',
    isPossible: true,
  },
  {
    name: 'operator2',
    svg: SVG.symbol.SYMBOL_2,
    latex: '\\xrightarrow {\\triangle }{\\ }',
    isPossible: true,
  },
  {
    name: 'operator3',
    svg: SVG.symbol.SYMBOL_3,
    latex: '\\Xrightarrow {부정}{\\ }',
    isPossible: true,
  },
];
export const matrix: InputMath[] = [
  {
    name: 'matrix1',
    svg: SVG.matrix.MATRIX,
    latex: '\\begin{pmatrix}&\\\\&\\end{pmatrix}',
    isPossible: true,
  },
  {
    name: 'matrix2',
    svg: SVG.matrix.MATRIX_2,
    latex: '\\begin{pmatrix}a_{11}&a_{12}\\\\a_{21}&a_{22}\\end{pmatrix}',
    isPossible: true,
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
  {
    name: 'sigma',
    value: sigma,
  },
  {
    name: 'limit',
    value: limit,
  },
  {
    name: 'sin',
    value: trigonometric,
  },
  {
    name: 'bracket',
    value: bracket,
  },
  {
    name: 'decoration',
    value: decoration,
  },
  {
    name: 'operator',
    value: operator,
  },
  {
    name: 'matrix',
    value: matrix,
  },
];

export default templateSection;
