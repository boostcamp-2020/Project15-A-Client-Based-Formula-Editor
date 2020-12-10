import { SVG } from '@src/utils/svg/leftsection/mathsection';

export interface InputMath {
  name: string;
  svg?: string;
  symbol?: string;
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
    latex: '^{ }',
  },
  {
    name: 'combi2',
    svg: SVG.combi.COMBI_DOWN,
    latex: '{ }_{ }',
  },
  {
    name: 'combi3',
    svg: SVG.combi.COMBI_RIGHT,
    latex: '{ }_{ }^{ }',
  },
  {
    name: 'combi4',
    svg: SVG.combi.COMBI_LEFT,
    latex: '_{  }^{  }{  }',
  },
  {
    name: 'combi5',
    svg: SVG.combi.COMBI_DOWN_BOTH,
    latex: '{ _{  }{\\  }_{  } }',
  },
  {
    name: 'combi6',
    svg: SVG.combi.COMBI_ALL,
    latex: '_{ }^{ }{\\ }_{ }^{ }',
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
    latex: '\\iint {  } ',
  },
  {
    name: 'integral4',
    svg: SVG.integral.DOUBLE_INTEGRAL_2,
    latex: '\\iint _{  }^{  }{  } ',
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

export const bracket: InputMath[] = [
  {
    name: 'bracket1',
    svg: SVG.bracket.PARENTHESES,
    latex: '\\left( \\right)',
  },
  {
    name: 'bracket2',
    svg: SVG.bracket.SQUARE_BRACKET,
    latex: '\\left[\\right]',
  },
  {
    name: 'bracket3',
    svg: SVG.bracket.CURLY_BRACKET,
    latex: '\\left{\\right}',
  },
  {
    name: 'bracket4',
    svg: SVG.bracket.ANGLE_BRACKET,
    latex: '\\left<\\right>',
  },
  {
    name: 'bracket5',
    svg: SVG.bracket.LOWER_BOUND,
    latex: '\\left\\lfloor \\right\\rfloor',
  },
  {
    name: 'bracket6',
    svg: SVG.bracket.UPPER_BOUND,
    latex: '\\left\\lceil \\right\\rceil',
  },
  {
    name: 'bracket7',
    svg: SVG.bracket.ABSOLUTE,
    latex: '\\left|\\right|',
  },
  {
    name: 'bracket8',
    svg: SVG.bracket.ABSOLUTE_2,
    latex: '\\left|\\left|\\right|\\right|',
  },
  {
    name: 'bracket9',
    svg: SVG.bracket.ABSOLUTE_3,
    latex: '[[]]',
  },
  {
    name: 'bracket10',
    svg: SVG.bracket.SEPARATED_PARENTHESES,
    latex: '\\left(|\\right)',
  },
  {
    name: 'bracket11',
    svg: SVG.bracket.DELIMITED_BRACES,
    latex: '\\left\\{|\\right\\}',
  },
  {
    name: 'bracket12',
    svg: SVG.bracket.DELIMITED_ANGLE_BRACKET,
    latex: '<|>',
  },
  {
    name: 'bracket13',
    svg: SVG.bracket.DELIMITED_ANGLE_BRACKET_2,
    latex: '<||>',
  },
];

export const trigonometric: InputMath[] = [
  {
    name: 'fx',
    svg: SVG.trigonometric.F_FUNC,
    latex: 'f(x)',
  },
  {
    name: 'gx',
    svg: SVG.trigonometric.G_FUNC,
    latex: 'g(x)',
  },
  {
    name: 'hx',
    svg: SVG.trigonometric.H_FUNC,
    latex: 'h(x)',
  },
  {
    name: 'fx2',
    svg: SVG.trigonometric.F_FUNC_2,
    latex: 'f^{ }\\left(x\\right)',
  },
  {
    name: 'gx2',
    svg: SVG.trigonometric.G_FUNC_2,
    latex: 'g^{ }\\left(x\\right)',
  },
  {
    name: 'hx2',
    svg: SVG.trigonometric.H_FUNC_2,
    latex: 'h^{ }\\left(x\\right)',
  },
  {
    name: 'sin',
    svg: SVG.trigonometric.SIN,
    latex: '\\sin',
  },
  {
    name: 'cos',
    svg: SVG.trigonometric.COS,
    latex: '\\cos',
  },
  {
    name: 'tan',
    svg: SVG.trigonometric.TAN,
    latex: '\\tan',
  },
  {
    name: 'csc',
    svg: SVG.trigonometric.CSC,
    latex: '\\csc',
  },
  {
    name: 'sec',
    svg: SVG.trigonometric.SEC,
    latex: '\\sec',
  },
  {
    name: 'cot',
    svg: SVG.trigonometric.COT,
    latex: '\\cot',
  },
  {
    name: 'sin2',
    svg: SVG.trigonometric.SIN_2,
    latex: '\\sin ^{ }',
  },
  {
    name: 'cos2',
    svg: SVG.trigonometric.COS_2,
    latex: '\\cos ^{ }',
  },
  {
    name: 'tan2',
    svg: SVG.trigonometric.TAN_2,
    latex: '\\tan ^{ }',
  },
  {
    name: 'csc2',
    svg: SVG.trigonometric.CSC_2,
    latex: '\\csc ^{ }',
  },
  {
    name: 'sec2',
    svg: SVG.trigonometric.SEC_2,
    latex: '\\sec ^{ }',
  },
  {
    name: 'cot2',
    svg: SVG.trigonometric.COT_2,
    latex: '\\cot ^{ }',
  },
];

export const deco: InputMath[] = [
  {
    name: 'dot',
    svg: SVG.deco.DOT,
    latex: '\\dot{ }',
  },
  {
    name: 'dot2',
    svg: SVG.deco.DOUBLE_DOT,
    latex: '\\ddot{ }',
  },
  {
    name: 'dot3',
    svg: SVG.deco.TRIPLE_DOT,
    latex: '\\dddot{ }',
  },
  {
    name: 'hat',
    svg: SVG.deco.HAT,
    latex: '\\hat{ }',
  },
  {
    name: 'check',
    svg: SVG.deco.CHECK,
    latex: '\\check{ }',
  },
  {
    name: 'acute',
    svg: SVG.deco.ACUTE,
    latex: '\\acute{ }',
  },
  {
    name: 'grave',
    svg: SVG.deco.GRAVE,
    latex: '\\grave{ }',
  },
  {
    name: 'breve',
    svg: SVG.deco.BREVE,
    latex: '\\breve{ }',
  },
  {
    name: 'tilde',
    svg: SVG.deco.TILDE,
    latex: '\\tilde{ }',
  },
  {
    name: 'overline',
    svg: SVG.deco.OVERLINE,
    latex: '\\overline{ }',
  },
  {
    name: 'bbar',
    svg: SVG.deco.BBAR,
    latex: '\\bbar{ }',
  },
  {
    name: 'overbrace',
    svg: SVG.deco.OVERBRACE,
    latex: '\\overbrace{ }{\\ }',
  },
  {
    name: 'underbrace',
    svg: SVG.deco.UNDERBRACE,
    latex: '\\underbrace{\\ }{ }',
  },
  {
    name: 'overbrace2',
    svg: SVG.deco.OVERBRACE2,
    latex: '\\overbrace{ }{ }',
  },
  {
    name: 'underbrace2',
    svg: SVG.deco.UNDERBRACE2,
    latex: '\\underbrace{ }{ }',
  },
  {
    name: 'overleftarrow',
    svg: SVG.deco.OVERLEFTARROW,
    latex: '\\overleftarrow{ }',
  },
  {
    name: 'overrightarrow',
    svg: SVG.deco.OVERRIGHTARROW,
    latex: '\\overrightarrow{ }',
  },
  {
    name: 'overleftrightarrow',
    svg: SVG.deco.OVERLEFTRIGHTAAROW,
    latex: '\\overleftrightarrow{ }',
  },
  {
    name: 'overleftharpoonup',
    svg: SVG.deco.OVERLEFTHARPOONUP,
    latex: '\\overleftharpoonup{ }',
  },
  {
    name: 'overrightharpoonup',
    svg: SVG.deco.OVERRIGHTHARPOONUP,
    latex: '\\overrightharpoonup{ }',
  },
  {
    name: 'overline_2',
    svg: SVG.deco.OVERLINE,
    latex: '\\overline{ }',
  },
  {
    name: 'underline',
    svg: SVG.deco.UNDERLINE,
    latex: '\\underline { }',
  },
  {
    name: 'boxed',
    svg: SVG.deco.BOXED,
    latex: '\\boxed{ }',
  },
];

export const limit: InputMath[] = [
  {
    name: 'log',
    svg: SVG.limit.LOG,
    latex: '\\log _{ } ',
  },
  {
    name: 'log2',
    svg: SVG.limit.LOG_2,
    latex: '\\log ',
  },
  {
    name: 'ln',
    svg: SVG.limit.LN,
    latex: '\\ln ',
  },
  {
    name: 'limit',
    svg: SVG.limit.LIM,
    latex: '\\lim _{ }^{ }',
  },
  {
    name: 'limit2',
    svg: SVG.limit.LIM_2,
    latex: '\\lim _{\\to }^{ }',
  },
  {
    name: 'min',
    svg: SVG.limit.MIN,
    latex: '\\min _{ }^{ }',
  },
  {
    name: 'max',
    svg: SVG.limit.MAX,
    latex: '\\max _{ }^{ }',
  },
];

export const operator: InputMath[] = [
  {
    name: 'colon',
    svg: SVG.symbol.COLON_EQUAL,
    latex: ':=',
  },
  {
    name: 'equal',
    svg: SVG.symbol.EQUAL,
    latex: '==',
  },
  {
    name: 'plusequal',
    svg: SVG.symbol.PLUS_EQUAL,
    latex: '+=',
  },
  {
    name: 'minusqual',
    svg: SVG.symbol.MINUS_EQUAL,
    latex: '-=',
  },
  {
    name: 'defequal',
    svg: SVG.symbol.DEF_EQUAL,
    latex: '\\defequal',
  },
  {
    name: 'mequal',
    svg: SVG.symbol.M_EQUAL,
    latex: '\\mequal',
  },
  {
    name: 'deltaequal',
    svg: SVG.symbol.DELTA_EQUAL,
    latex: '\\deltaequal',
  },
  {
    name: 'xleftarrow',
    svg: SVG.symbol.X_LEFT_ARROW,
    latex: '\\xleftarrow {\\ }{ }',
  },
  {
    name: 'xrightarrow',
    svg: SVG.symbol.X_RIGHT_ARROW,
    latex: '\\xrightarrow {\\ }{ }',
  },
  {
    name: 'xleftarrow2',
    svg: SVG.symbol.X_LEFT_ARROW_2,
    latex: '\\xleftarrow { }{\\ }',
  },
  {
    name: 'xrightarrow2',
    svg: SVG.symbol.X_RIGHT_ARROW_2,
    latex: '\\xrightarrow { }{\\ }',
  },
  {
    name: 'xleftarrow3',
    svg: SVG.symbol.X_LEFT_ARROW_3,
    latex: '\\xleftarrow { }{ }',
  },
  {
    name: 'xrightarrow3',
    svg: SVG.symbol.X_RIGHT_ARROW_3,
    latex: '\\xrightarrow { }{ }',
  },
  {
    name: 'xleftarrow4',
    svg: SVG.symbol.X_LEFT_ARROW_4,
    latex: '\\Xleftarrow {\\ }{ }',
  },
  {
    name: 'xrightarrow4',
    svg: SVG.symbol.X_RIGHT_ARROW_4,
    latex: '\\Xrightarrow {\\ }{ }',
  },
  {
    name: 'xleftarrow5',
    svg: SVG.symbol.X_LEFT_ARROW_5,
    latex: '\\Xleftarrow { }{\\ }',
  },
  {
    name: 'xrightarrow5',
    svg: SVG.symbol.X_RIGHT_ARROW_5,
    latex: '\\Xrightarrow {\\ }{ }',
  },
  {
    name: 'xleftarrow6',
    svg: SVG.symbol.X_LEFT_ARROW_6,
    latex: '\\Xleftarrow { }{ }',
  },
  {
    name: 'xrightarrow6',
    svg: SVG.symbol.X_RIGHT_ARROW_6,
    latex: '\\Xrightarrow { }{ }',
  },
  {
    name: 'xleftrightarrow',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW,
    latex: '\\xleftrightarrow {\\ }{ }',
  },
  {
    name: 'xleftrightarrow2',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW_2,
    latex: '\\xleftrightarrow { }{\\ }',
  },
  {
    name: 'xleftrightarrow3',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW_3,
    latex: '\\xleftrightarrow { }{ }',
  },
  {
    name: 'xleftrightarrow4',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW_4,
    latex: '\\Xleftrightarrow {\\ }{ }',
  },
  {
    name: 'xleftrightarrow5',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW_5,
    latex: '\\Xleftrightarrow { }{\\ }',
  },
  {
    name: 'xleftrightarrow6',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW_6,
    latex: '\\Xleftrightarrow { }{ }',
  },
];

export const matrix: InputMath[] = [
  {
    name: 'matrix',
    svg: SVG.matrix.MATRIX_2X1,
    latex: '\\begin{matrix}&\\end{matrix}',
  },
  {
    name: 'matrix2',
    svg: SVG.matrix.MATRIX_1X2,
    latex: '\\begin{matrix}\\end{matrix}',
  },
  {
    name: 'matrix3',
    svg: SVG.matrix.MATRIX_2X2,
    latex: '\\begin{matrix}&\\\\&\\end{matrix}',
  },
  {
    name: 'matrix4',
    svg: SVG.matrix.MATRIX_3X2,
    latex: '\\begin{matrix}&&\\\\&&\\end{matrix}',
  },
  {
    name: 'matrix5',
    svg: SVG.matrix.MATRIX_2X3,
    latex: '\\begin{matrix}&\\\\&\\\\&\\end{matrix}',
  },
  {
    name: 'matrix6',
    svg: SVG.matrix.MATRIX_3X3,
    latex: '\\begin{matrix}&&\\\\&&\\\\&&\\end{matrix}',
  },
  {
    name: 'case',
    svg: SVG.matrix.CASES,
    latex: '\\begin{cases}\\\\\\end{cases}',
  },
  {
    name: 'case2',
    svg: SVG.matrix.CASES_2,
    latex: '\\begin{cases}\\\\\\\\\\end{cases}',
  },
  {
    name: 'pmatrix',
    svg: SVG.matrix.PMATRIX,
    latex: '\\begin{pmatrix}&\\\\&\\end{pmatrix}',
  },
  {
    name: 'bmatrix',
    svg: SVG.matrix.BMATRIX,
    latex: '\\begin{bmatrix}&\\\\&\\end{bmatrix}',
  },
  {
    name: 'vmatrix',
    svg: SVG.matrix.VMATRIX,
    latex: '\\begin{vmatrix}&\\\\&\\end{vmatrix}',
  },
];

export const specialsymbol: InputMath[] = [
  {
    name: '1',
    symbol: '①',
    latex: '①',
  },
  {
    name: '2',
    symbol: '②',
    latex: '②',
  },
  {
    name: '3',
    symbol: '③',
    latex: '③',
  },
  {
    name: '4',
    symbol: '④',
    latex: '④',
  },
  {
    name: '5',
    symbol: '⑤',
    latex: '⑤',
  },
  {
    name: '6',
    symbol: '⑥',
    latex: '⑥',
  },
  {
    name: '7',
    symbol: '⑦',
    latex: '⑦',
  },
  {
    name: '8',
    symbol: '⑧',
    latex: '⑧',
  },
  {
    name: '9',
    symbol: '⑨',
    latex: '⑨',
  },
  {
    name: '10',
    symbol: '⑩',
    latex: '⑩',
  },

  {
    name: 'a',
    symbol: 'ⓐ',
    latex: 'ⓐ',
  },
  {
    name: 'b',
    symbol: 'ⓑ',
    latex: 'ⓑ',
  },
  {
    name: 'c',
    symbol: 'ⓒ',
    latex: 'ⓒ',
  },
  {
    name: 'd',
    symbol: 'ⓓ',
    latex: 'ⓓ',
  },
  {
    name: 'e',
    symbol: 'ⓔ',
    latex: 'ⓔ',
  },
  {
    name: 'f',
    symbol: 'ⓕ',
    latex: 'ⓕ',
  },

  {
    name: 'g',
    symbol: 'ⓖ',
    latex: 'ⓖ',
  },
  {
    name: 'h',
    symbol: 'ⓗ',
    latex: 'ⓗ',
  },
  {
    name: 'i',
    symbol: 'ⓘ',
    latex: 'ⓘ',
  },
  {
    name: 'j',
    symbol: 'ⓙ',
    latex: 'ⓙ',
  },
  {
    name: '(a)',
    symbol: '⒜',
    latex: '⒜',
  },
  {
    name: '(b)',
    symbol: '⒝',
    latex: '⒝',
  },
  {
    name: '(c)',
    symbol: '⒞',
    latex: '⒞',
  },
  {
    name: '(d)',
    symbol: '⒟',
    latex: '⒟',
  },
];

const mathSection = [
  {
    name: 'mathFraction',
    value: mathFraction,
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
    value: deco,
  },
  {
    name: 'operator',
    value: operator,
  },
  {
    name: 'matrix',
    value: matrix,
  },
  {
    name: 'specialsymbol',
    value: specialsymbol,
  },
];
export default mathSection;
