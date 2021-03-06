import { SVG } from '@src/utils/svg/leftsection/mathsection';

export interface InputMath {
  name: string;
  svg?: string;
  symbol?: string;
  latex: string;
  isPossible?: boolean;
}
export const mathFraction: InputMath[] = [
  {
    name: 'fraction',
    svg: SVG.fraction.FRACTION,
    latex: '\\frac{}{}',
    isPossible: true,
  },
  {
    name: 'slash',
    svg: SVG.fraction.SLASH,
    latex: '/',
    isPossible: true,
  },
];

export const sqrt: InputMath[] = [
  {
    name: 'sqrt1',
    svg: SVG.sqrt.SQRT,
    latex: '\\sqrt{ } ',
    isPossible: true,
  },
  {
    name: 'sqrt2',
    svg: SVG.sqrt.SQRT_WITH_DEGREE,
    latex: '\\sqrt[]{} ',
    isPossible: true,
  },
];

export const combi: InputMath[] = [
  {
    name: 'combi1',
    svg: SVG.combi.COMBI,
    latex: 'x^{ }',
    isPossible: true,
  },
  {
    name: 'combi2',
    svg: SVG.combi.COMBI_DOWN,
    latex: 'x_{ }',
    isPossible: true,
  },
  {
    name: 'combi4',
    svg: SVG.combi.COMBI_LEFT,
    latex: '_{  }^{  }x',
    isPossible: true,
  },
  {
    name: 'combi5',
    svg: SVG.combi.COMBI_DOWN_BOTH,
    latex: '{ _{  }x_{  } }',
    isPossible: false,
  },
  {
    name: 'combi6',
    svg: SVG.combi.COMBI_ALL,
    latex: '_{ }^{ }\\overline{ }_{ }^{ }',
    isPossible: false,
  },
];

export const integral: InputMath[] = [
  {
    name: 'integral1',
    svg: SVG.integral.INTEGRAL,
    latex: '\\int _{\\ }^{\\ }',
    isPossible: true,
  },
  {
    name: 'integral2',
    svg: SVG.integral.DEFINITE_INTEGRAL,
    latex: '\\int _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'integral3',
    svg: SVG.integral.DOUBLE_INTEGRAL,
    latex: '\\iint {  } ',
    isPossible: false,
  },
  {
    name: 'integral4',
    svg: SVG.integral.DOUBLE_INTEGRAL_2,
    latex: '\\iint _{  }^{  }{  } ',
    isPossible: false,
  },
  {
    name: 'integral5',
    svg: SVG.integral.LINE_INTEGRAL,
    latex: '\\oint _{\\ }^{\\ }',
    isPossible: true,
  },
  {
    name: 'integral6',
    svg: SVG.integral.LINE_INTEGRAL_2,
    latex: '\\oint _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'integral7',
    svg: SVG.integral.SURFACE_INTEGRAL,
    latex: '\\oiint _{\\ }^{\\ }',
    isPossible: false,
  },
  {
    name: 'integral8',
    svg: SVG.integral.SURFACE_INTEGRAL_2,
    latex: '\\oiint _{ }^{ }',
    isPossible: false,
  },
  {
    name: 'integral9',
    svg: SVG.integral.VOLUMN_INTEGRAL,
    latex: '\\oiiint _{\\ }^{\\ }',
    isPossible: false,
  },
  {
    name: 'integral10',
    svg: SVG.integral.VOLUMN_INTEGRAL_2,
    latex: '\\oiiint _{ }^{ }',
    isPossible: false,
  },
];

export const sigma: InputMath[] = [
  {
    name: 'sigma1',
    svg: SVG.largeOperator.SIMGA,
    latex: '\\sum _{\\ }^{\\ }',
    isPossible: true,
  },
  {
    name: 'sigma2',
    svg: SVG.largeOperator.SIMGA_2,
    latex: '\\sum _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'pi',
    svg: SVG.largeOperator.PI,
    latex: '\\prod _{\\ }^{\\ }',
    isPossible: true,
  },
  {
    name: 'pi2',
    svg: SVG.largeOperator.PI_2,
    latex: '\\prod _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'union',
    svg: SVG.largeOperator.UNION,
    latex: '\\bigcup _{\\ }^{\\ }',
    isPossible: true,
  },
  {
    name: 'union2',
    svg: SVG.largeOperator.UNION_2,
    latex: '\\bigcup _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'intersection',
    svg: SVG.largeOperator.INTERSECTION,
    latex: '\\bigcap _{\\ }^{\\ }',
    isPossible: true,
  },
  {
    name: 'intersection2',
    svg: SVG.largeOperator.INTERSECTION_2,
    latex: '\\bigcap _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'vee',
    svg: SVG.largeOperator.VEE,
    latex: '\\bigvee _{\\ }^{\\ }',
    isPossible: true,
  },
  {
    name: 'vee2',
    svg: SVG.largeOperator.VEE_2,
    latex: '\\bigvee _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'wedge',
    svg: SVG.largeOperator.WEDGE,
    latex: ' \\bigwedge _{\\ }^{\\ }',
    isPossible: true,
  },
  {
    name: 'wedge2',
    svg: SVG.largeOperator.WEDGE_2,
    latex: ' \\bigwedge _{ }^{ }',
    isPossible: true,
  },
];

export const bracket: InputMath[] = [
  {
    name: 'bracket1',
    svg: SVG.bracket.PARENTHESES,
    latex: '\\left( \\right)',
    isPossible: true,
  },
  {
    name: 'bracket2',
    svg: SVG.bracket.SQUARE_BRACKET,
    latex: '\\left[\\right]',
    isPossible: true,
  },
  {
    name: 'bracket3',
    svg: SVG.bracket.CURLY_BRACKET,
    latex: '\\left{\\right}',
    isPossible: false,
  },
  {
    name: 'bracket4',
    svg: SVG.bracket.ANGLE_BRACKET,
    latex: '\\left<\\right>',
    isPossible: false,
  },
  {
    name: 'bracket5',
    svg: SVG.bracket.LOWER_BOUND,
    latex: '\\left\\lfloor \\right\\rfloor',
    isPossible: false,
  },
  {
    name: 'bracket6',
    svg: SVG.bracket.UPPER_BOUND,
    latex: '\\left\\lceil \\right\\rceil',
    isPossible: false,
  },
  {
    name: 'bracket7',
    svg: SVG.bracket.ABSOLUTE,
    latex: '\\left|\\right|',
    isPossible: true,
  },
  {
    name: 'bracket8',
    svg: SVG.bracket.ABSOLUTE_2,
    latex: '\\left|\\left|\\right|\\right|',
    isPossible: true,
  },
  {
    name: 'bracket9',
    svg: SVG.bracket.ABSOLUTE_3,
    latex: '[[]]',
    isPossible: true,
  },
  {
    name: 'bracket10',
    svg: SVG.bracket.SEPARATED_PARENTHESES,
    latex: '\\left(|\\right)',
    isPossible: true,
  },
  {
    name: 'bracket11',
    svg: SVG.bracket.DELIMITED_BRACES,
    latex: '\\left\\{|\\right\\}',
    isPossible: true,
  },
  {
    name: 'bracket12',
    svg: SVG.bracket.DELIMITED_ANGLE_BRACKET,
    latex: '<|>',
    isPossible: true,
  },
  {
    name: 'bracket13',
    svg: SVG.bracket.DELIMITED_ANGLE_BRACKET_2,
    latex: '<||>',
    isPossible: true,
  },
];

export const trigonometric: InputMath[] = [
  {
    name: 'fx',
    svg: SVG.trigonometric.F_FUNC,
    latex: 'f(x)',
    isPossible: true,
  },
  {
    name: 'gx',
    svg: SVG.trigonometric.G_FUNC,
    latex: 'g(x)',
    isPossible: true,
  },
  {
    name: 'hx',
    svg: SVG.trigonometric.H_FUNC,
    latex: 'h(x)',
    isPossible: true,
  },
  {
    name: 'fx2',
    svg: SVG.trigonometric.F_FUNC_2,
    latex: 'f^{ }\\left(x\\right)',
    isPossible: true,
  },
  {
    name: 'gx2',
    svg: SVG.trigonometric.G_FUNC_2,
    latex: 'g^{ }\\left(x\\right)',
    isPossible: true,
  },
  {
    name: 'hx2',
    svg: SVG.trigonometric.H_FUNC_2,
    latex: 'h^{ }\\left(x\\right)',
    isPossible: true,
  },
  {
    name: 'sin',
    svg: SVG.trigonometric.SIN,
    latex: '\\sin',
    isPossible: true,
  },
  {
    name: 'cos',
    svg: SVG.trigonometric.COS,
    latex: '\\cos',
    isPossible: true,
  },
  {
    name: 'tan',
    svg: SVG.trigonometric.TAN,
    latex: '\\tan',
    isPossible: true,
  },
  {
    name: 'csc',
    svg: SVG.trigonometric.CSC,
    latex: '\\csc',
    isPossible: true,
  },
  {
    name: 'sec',
    svg: SVG.trigonometric.SEC,
    latex: '\\sec',
    isPossible: true,
  },
  {
    name: 'cot',
    svg: SVG.trigonometric.COT,
    latex: '\\cot',
    isPossible: true,
  },
  {
    name: 'sin2',
    svg: SVG.trigonometric.SIN_2,
    latex: '\\sin ^{ }',
    isPossible: true,
  },
  {
    name: 'cos2',
    svg: SVG.trigonometric.COS_2,
    latex: '\\cos ^{ }',
    isPossible: true,
  },
  {
    name: 'tan2',
    svg: SVG.trigonometric.TAN_2,
    latex: '\\tan ^{ }',
    isPossible: true,
  },
  {
    name: 'csc2',
    svg: SVG.trigonometric.CSC_2,
    latex: '\\csc ^{ }',
    isPossible: true,
  },
  {
    name: 'sec2',
    svg: SVG.trigonometric.SEC_2,
    latex: '\\sec ^{ }',
    isPossible: true,
  },
  {
    name: 'cot2',
    svg: SVG.trigonometric.COT_2,
    latex: '\\cot ^{ }',
    isPossible: true,
  },
];

export const deco: InputMath[] = [
  {
    name: 'dot',
    svg: SVG.deco.DOT,
    latex: '\\dot{ }',
    isPossible: true,
  },
  {
    name: 'dot2',
    svg: SVG.deco.DOUBLE_DOT,
    latex: '\\ddot{ }',
    isPossible: false,
  },
  {
    name: 'dot3',
    svg: SVG.deco.TRIPLE_DOT,
    latex: '\\dddot{ }',
    isPossible: false,
  },
  {
    name: 'hat',
    svg: SVG.deco.HAT,
    latex: '\\hat{ }',
    isPossible: true,
  },
  {
    name: 'check',
    svg: SVG.deco.CHECK,
    latex: '\\check{ }',
    isPossible: false,
  },
  {
    name: 'acute',
    svg: SVG.deco.ACUTE,
    latex: '\\acute{ }',
    isPossible: false,
  },
  {
    name: 'grave',
    svg: SVG.deco.GRAVE,
    latex: '\\grave{ }',
    isPossible: false,
  },
  {
    name: 'breve',
    svg: SVG.deco.BREVE,
    latex: '\\breve{ }',
    isPossible: false,
  },
  {
    name: 'tilde',
    svg: SVG.deco.TILDE,
    latex: '\\tilde{ }',
    isPossible: true,
  },
  {
    name: 'overline',
    svg: SVG.deco.OVERLINE,
    latex: '\\overline{ }',
    isPossible: true,
  },
  {
    name: 'bbar',
    svg: SVG.deco.BBAR,
    latex: '\\bbar{ }',
    isPossible: false,
  },
  {
    name: 'overbrace',
    svg: SVG.deco.OVERBRACE,
    latex: '\\overbrace{ }{\\ }',
    isPossible: false,
  },
  {
    name: 'underbrace',
    svg: SVG.deco.UNDERBRACE,
    latex: '\\underbrace{\\ }{ }',
    isPossible: false,
  },
  {
    name: 'overbrace2',
    svg: SVG.deco.OVERBRACE2,
    latex: '\\overbrace{ }{ }',
    isPossible: false,
  },
  {
    name: 'underbrace2',
    svg: SVG.deco.UNDERBRACE2,
    latex: '\\underbrace{ }{ }',
    isPossible: false,
  },
  {
    name: 'overleftarrow',
    svg: SVG.deco.OVERLEFTARROW,
    latex: '\\overleftarrow{ }',
    isPossible: true,
  },
  {
    name: 'overrightarrow',
    svg: SVG.deco.OVERRIGHTARROW,
    latex: '\\overrightarrow{ }',
    isPossible: true,
  },
  {
    name: 'overleftrightarrow',
    svg: SVG.deco.OVERLEFTRIGHTAAROW,
    latex: '\\overleftrightarrow{ }',
    isPossible: false,
  },
  {
    name: 'overleftharpoonup',
    svg: SVG.deco.OVERLEFTHARPOONUP,
    latex: '\\overleftharpoonup{ }',
    isPossible: false,
  },
  {
    name: 'overrightharpoonup',
    svg: SVG.deco.OVERRIGHTHARPOONUP,
    latex: '\\overrightharpoonup{ }',
    isPossible: false,
  },
  {
    name: 'overline_2',
    svg: SVG.deco.OVERLINE,
    latex: '\\overline{ }',
    isPossible: false,
  },
  {
    name: 'underline',
    svg: SVG.deco.UNDERLINE,
    latex: '\\underline { }',
    isPossible: false,
  },
  {
    name: 'boxed',
    svg: SVG.deco.BOXED,
    latex: '\\boxed{ }',
    isPossible: false,
  },
];

export const limit: InputMath[] = [
  {
    name: 'log',
    svg: SVG.limit.LOG,
    latex: '\\log _{ } ',
    isPossible: true,
  },
  {
    name: 'log2',
    svg: SVG.limit.LOG_2,
    latex: '\\log ',
    isPossible: true,
  },
  {
    name: 'ln',
    svg: SVG.limit.LN,
    latex: '\\ln ',
    isPossible: true,
  },
  {
    name: 'limit',
    svg: SVG.limit.LIM,
    latex: '\\lim _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'limit2',
    svg: SVG.limit.LIM_2,
    latex: '\\lim _{\\to }^{ }',
    isPossible: true,
  },
  {
    name: 'min',
    svg: SVG.limit.MIN,
    latex: '\\min _{ }^{ }',
    isPossible: true,
  },
  {
    name: 'max',
    svg: SVG.limit.MAX,
    latex: '\\max _{ }^{ }',
    isPossible: true,
  },
];

export const operator: InputMath[] = [
  {
    name: 'colon',
    svg: SVG.symbol.COLON_EQUAL,
    latex: ':=',
    isPossible: true,
  },
  {
    name: 'equal',
    svg: SVG.symbol.EQUAL,
    latex: '==',
    isPossible: true,
  },
  {
    name: 'plusequal',
    svg: SVG.symbol.PLUS_EQUAL,
    latex: '+=',
    isPossible: true,
  },
  {
    name: 'minusqual',
    svg: SVG.symbol.MINUS_EQUAL,
    latex: '-=',
    isPossible: true,
  },
  {
    name: 'defequal',
    svg: SVG.symbol.DEF_EQUAL,
    latex: '\\defequal',
    isPossible: true,
  },
  {
    name: 'mequal',
    svg: SVG.symbol.M_EQUAL,
    latex: '\\mequal',
    isPossible: true,
  },
  {
    name: 'deltaequal',
    svg: SVG.symbol.DELTA_EQUAL,
    latex: '\\deltaequal',
    isPossible: true,
  },
  {
    name: 'xleftarrow',
    svg: SVG.symbol.X_LEFT_ARROW,
    latex: '\\xleftarrow {\\ }{ }',
    isPossible: true,
  },
  {
    name: 'xrightarrow',
    svg: SVG.symbol.X_RIGHT_ARROW,
    latex: '\\xrightarrow {\\ }{ }',
    isPossible: true,
  },
  {
    name: 'xleftarrow2',
    svg: SVG.symbol.X_LEFT_ARROW_2,
    latex: '\\xleftarrow { }{\\ }',
    isPossible: true,
  },
  {
    name: 'xrightarrow2',
    svg: SVG.symbol.X_RIGHT_ARROW_2,
    latex: '\\xrightarrow { }{\\ }',
    isPossible: true,
  },
  {
    name: 'xleftarrow3',
    svg: SVG.symbol.X_LEFT_ARROW_3,
    latex: '\\xleftarrow { }{ }',
    isPossible: true,
  },
  {
    name: 'xrightarrow3',
    svg: SVG.symbol.X_RIGHT_ARROW_3,
    latex: '\\xrightarrow { }{ }',
    isPossible: true,
  },
  {
    name: 'xleftarrow4',
    svg: SVG.symbol.X_LEFT_ARROW_4,
    latex: '\\Xleftarrow {\\ }{ }',
    isPossible: true,
  },
  {
    name: 'xrightarrow4',
    svg: SVG.symbol.X_RIGHT_ARROW_4,
    latex: '\\Xrightarrow {\\ }{ }',
    isPossible: true,
  },
  {
    name: 'xleftarrow5',
    svg: SVG.symbol.X_LEFT_ARROW_5,
    latex: '\\Xleftarrow { }{\\ }',
    isPossible: true,
  },
  {
    name: 'xrightarrow5',
    svg: SVG.symbol.X_RIGHT_ARROW_5,
    latex: '\\Xrightarrow {\\ }{ }',
    isPossible: true,
  },
  {
    name: 'xleftarrow6',
    svg: SVG.symbol.X_LEFT_ARROW_6,
    latex: '\\Xleftarrow { }{ }',
    isPossible: true,
  },
  {
    name: 'xrightarrow6',
    svg: SVG.symbol.X_RIGHT_ARROW_6,
    latex: '\\Xrightarrow { }{ }',
    isPossible: true,
  },
  {
    name: 'xleftrightarrow',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW,
    latex: '\\xleftrightarrow {\\ }{ }',
    isPossible: true,
  },
  {
    name: 'xleftrightarrow2',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW_2,
    latex: '\\xleftrightarrow { }{\\ }',
    isPossible: true,
  },
  {
    name: 'xleftrightarrow3',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW_3,
    latex: '\\xleftrightarrow { }{ }',
    isPossible: true,
  },
  {
    name: 'xleftrightarrow4',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW_4,
    latex: '\\Xleftrightarrow {\\ }{ }',
    isPossible: true,
  },
  {
    name: 'xleftrightarrow5',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW_5,
    latex: '\\Xleftrightarrow { }{\\ }',
    isPossible: true,
  },
  {
    name: 'xleftrightarrow6',
    svg: SVG.symbol.X_LEFT_RIGHT_ARROW_6,
    latex: '\\Xleftrightarrow { }{ }',
    isPossible: true,
  },
];

export const matrix: InputMath[] = [
  {
    name: 'matrix',
    svg: SVG.matrix.MATRIX_2X1,
    latex: '\\begin{matrix}&\\end{matrix}',
    isPossible: true,
  },
  {
    name: 'matrix2',
    svg: SVG.matrix.MATRIX_1X2,
    latex: '\\begin{matrix}\\end{matrix}',
    isPossible: true,
  },
  {
    name: 'matrix3',
    svg: SVG.matrix.MATRIX_2X2,
    latex: '\\begin{matrix}&\\\\&\\end{matrix}',
    isPossible: true,
  },
  {
    name: 'matrix4',
    svg: SVG.matrix.MATRIX_3X2,
    latex: '\\begin{matrix}&&\\\\&&\\end{matrix}',
    isPossible: true,
  },
  {
    name: 'matrix5',
    svg: SVG.matrix.MATRIX_2X3,
    latex: '\\begin{matrix}&\\\\&\\\\&\\end{matrix}',
    isPossible: true,
  },
  {
    name: 'matrix6',
    svg: SVG.matrix.MATRIX_3X3,
    latex: '\\begin{matrix}&&\\\\&&\\\\&&\\end{matrix}',
    isPossible: true,
  },
  {
    name: 'case',
    svg: SVG.matrix.CASES,
    latex: '\\begin{cases}\\\\\\end{cases}',
    isPossible: true,
  },
  {
    name: 'case2',
    svg: SVG.matrix.CASES_2,
    latex: '\\begin{cases}\\\\\\\\\\end{cases}',
    isPossible: true,
  },
  {
    name: 'pmatrix',
    svg: SVG.matrix.PMATRIX,
    latex: '\\begin{pmatrix}&\\\\&\\end{pmatrix}',
    isPossible: true,
  },
  {
    name: 'bmatrix',
    svg: SVG.matrix.BMATRIX,
    latex: '\\begin{bmatrix}&\\\\&\\end{bmatrix}',
    isPossible: true,
  },
  {
    name: 'vmatrix',
    svg: SVG.matrix.VMATRIX,
    latex: '\\begin{vmatrix}&\\\\&\\end{vmatrix}',
    isPossible: true,
  },
];

export const specialsymbol: InputMath[] = [
  {
    name: '1',
    symbol: '①',
    latex: '①',
    isPossible: true,
  },
  {
    name: '2',
    symbol: '②',
    latex: '②',
    isPossible: true,
  },
  {
    name: '3',
    symbol: '③',
    latex: '③',
    isPossible: true,
  },
  {
    name: '4',
    symbol: '④',
    latex: '④',
    isPossible: true,
  },
  {
    name: '5',
    symbol: '⑤',
    latex: '⑤',
    isPossible: true,
  },
  {
    name: '6',
    symbol: '⑥',
    latex: '⑥',
    isPossible: true,
  },
  {
    name: '7',
    symbol: '⑦',
    latex: '⑦',
    isPossible: true,
  },
  {
    name: '8',
    symbol: '⑧',
    latex: '⑧',
    isPossible: true,
  },
  {
    name: '9',
    symbol: '⑨',
    latex: '⑨',
    isPossible: true,
  },
  {
    name: '10',
    symbol: '⑩',
    latex: '⑩',
    isPossible: true,
  },

  {
    name: 'a',
    symbol: 'ⓐ',
    latex: 'ⓐ',
    isPossible: true,
  },
  {
    name: 'b',
    symbol: 'ⓑ',
    latex: 'ⓑ',
    isPossible: true,
  },
  {
    name: 'c',
    symbol: 'ⓒ',
    latex: 'ⓒ',
    isPossible: true,
  },
  {
    name: 'd',
    symbol: 'ⓓ',
    latex: 'ⓓ',
    isPossible: true,
  },
  {
    name: 'e',
    symbol: 'ⓔ',
    latex: 'ⓔ',
    isPossible: true,
  },
  {
    name: 'f',
    symbol: 'ⓕ',
    latex: 'ⓕ',
    isPossible: true,
  },

  {
    name: 'g',
    symbol: 'ⓖ',
    latex: 'ⓖ',
    isPossible: true,
  },
  {
    name: 'h',
    symbol: 'ⓗ',
    latex: 'ⓗ',
    isPossible: true,
  },
  {
    name: 'i',
    symbol: 'ⓘ',
    latex: 'ⓘ',
    isPossible: true,
  },
  {
    name: 'j',
    symbol: 'ⓙ',
    latex: 'ⓙ',
    isPossible: true,
  },
  {
    name: '(a)',
    symbol: '⒜',
    latex: '⒜',
    isPossible: true,
  },
  {
    name: '(b)',
    symbol: '⒝',
    latex: '⒝',
    isPossible: true,
  },
  {
    name: '(c)',
    symbol: '⒞',
    latex: '⒞',
    isPossible: true,
  },
  {
    name: '(d)',
    symbol: '⒟',
    latex: '⒟',
    isPossible: true,
  },
];

export const unit: InputMath[] = [
  {
    name: '밀리미터',
    symbol: '㎜',
    latex: '㎜',
    isPossible: true,
  },
  {
    name: '센티미터',
    symbol: '㎝',
    latex: '㎝',
    isPossible: true,
  },
  {
    name: '킬로미터',
    symbol: '㎞',
    latex: '㎞',
    isPossible: true,
  },
  {
    name: '밀리그램',
    symbol: '㎎',
    latex: '㎎',
    isPossible: true,
  },
  {
    name: '킬로그램',
    symbol: '㎏',
    latex: '㎏',
    isPossible: true,
  },
  {
    name: '평방센티',
    symbol: '㎠',
    latex: '㎠',
    isPossible: true,
  },
  {
    name: '평방미터',
    symbol: '㎡',
    latex: '㎡',
    isPossible: true,
  },
  {
    name: '평방킬로미터',
    symbol: '㎢',
    latex: '㎢',
    isPossible: true,
  },
  {
    name: '입방센티',
    symbol: '㎤',
    latex: '㎤',
    isPossible: true,
  },
  {
    name: '입방미터',
    symbol: '㎥',
    latex: '㎥',
    isPossible: true,
  },
  {
    name: '입방킬로미터',
    symbol: '㎦',
    latex: '㎦',
    isPossible: true,
  },
  {
    name: '데시리터',
    symbol: '㎗',
    latex: '㎗',
    isPossible: true,
  },
  {
    name: '밀리리터',
    symbol: '㎖',
    latex: '㎖',
    isPossible: true,
  },
  {
    name: '리터',
    symbol: 'ℓ',
    latex: 'ℓ',
    isPossible: true,
  },
  {
    name: '섭씨온도',
    symbol: '℃',
    latex: '℃',
    isPossible: true,
  },
  {
    name: '화씨온도',
    symbol: '℉',
    latex: '℉',
    isPossible: true,
  },

  {
    name: '천분율',
    symbol: '‰',
    latex: '‰',
    isPossible: true,
  },
];

export const misc: InputMath[] = [
  {
    name: 'misc',
    symbol: '∀',
    latex: '\\forall ',
    isPossible: true,
  },
  {
    name: 'misc2',
    symbol: 'ð',
    latex: 'ð ',
    isPossible: true,
  },
  {
    name: 'misc3',
    symbol: 'ℊ',
    latex: 'ℊ',
    isPossible: true,
  },
  {
    name: 'misc4',
    symbol: '℩',
    latex: '℩',
    isPossible: true,
  },
  {
    name: 'misc5',
    symbol: 'ι',
    latex: '\\iota',
    isPossible: true,
  },
  {
    name: 'misc6',
    symbol: 'j',
    latex: 'j',
    isPossible: true,
  },
  {
    name: 'misc8',
    symbol: 'ℓ',
    latex: '\\ell',
    isPossible: true,
  },
  {
    name: 'misc9',
    symbol: 'ϰ',
    latex: '\\varkappa',
    isPossible: true,
  },
  {
    name: 'misc10',
    symbol: 'ℏ',
    latex: '\\hbar',
    isPossible: true,
  },
  {
    name: 'misc11',
    symbol: 'ơ',
    latex: '\\sigma',
    isPossible: true,
  },
  {
    name: 'misc12',
    symbol: 'ℱ',
    latex: 'ℱ',
    isPossible: true,
  },
  {
    name: 'misc13',
    symbol: 'ℒ',
    latex: 'ℒ',
    isPossible: true,
  },
  {
    name: 'misc14',
    symbol: '∂',
    latex: '\\partial',
    isPossible: true,
  },
  {
    name: 'misc15',
    symbol: '∁',
    latex: '∁',
    isPossible: true,
  },
  {
    name: 'misc16',
    symbol: 'ℑ',
    latex: '\\Im',
    isPossible: true,
  },
  {
    name: 'misc17',
    symbol: '℘',
    latex: '\\wp',
    isPossible: true,
  },
  {
    name: 'misc18',
    symbol: 'ℬ',
    latex: 'ℬ',
    isPossible: true,
  },
  {
    name: 'misc19',
    symbol: 'ℇ',
    latex: 'ℇ',
    isPossible: true,
  },
  {
    name: 'misc21',
    symbol: '𝕳',
    latex: '𝕳',
    isPossible: true,
  },
  {
    name: 'misc22',
    symbol: '℧',
    latex: '℧',
    isPossible: true,
  },
  {
    name: 'misc23',
    symbol: 'Å',
    latex: '\\AA',
    isPossible: true,
  },
  {
    name: 'misc24',
    symbol: 'ℰ',
    latex: 'ℰ',
    isPossible: true,
  },
  {
    name: 'misc25',
    symbol: '℮',
    latex: '℮',
    isPossible: true,
  },
  {
    name: 'misc26',
    symbol: 'ℵ',
    latex: '\\aleph',
    isPossible: true,
  },
  {
    name: 'misc27',
    symbol: 'ℶ',
    latex: 'ℶ',
    isPossible: true,
  },
  {
    name: 'misc28',
    symbol: 'ℷ',
    latex: 'ℷ',
    isPossible: true,
  },
  {
    name: 'misc29',
    symbol: 'ℸ',
    latex: 'ℸ',
    isPossible: true,
  },
];
export const arrow: InputMath[] = [
  {
    name: 'arrow1',
    symbol: '←',
    latex: '\\gets',
    isPossible: true,
  },
  {
    name: 'arrow2',
    symbol: '→',
    latex: '\\to ',
    isPossible: true,
  },
  {
    name: 'arrow3',
    symbol: '↑',
    latex: '\\uparrow ',
    isPossible: true,
  },
  {
    name: 'arrow4',
    symbol: '↓',
    latex: '\\downarrow ',
    isPossible: true,
  },
  {
    name: 'arrow5',
    symbol: '↘︎',
    latex: '\\searrow ',
    isPossible: true,
  },
  {
    name: 'arrow6',
    symbol: '⟷',
    latex: '\\leftrightarrow ',
    isPossible: true,
  },
  {
    name: 'arrow7',
    symbol: '⟸',
    latex: '\\Leftarrow ',
    isPossible: true,
  },
  {
    name: 'arrow8',
    symbol: '⟹',
    latex: '\\Rightarrow',
    isPossible: true,
  },
  {
    name: 'arrow9',
    symbol: '⥣',
    latex: '\\Uparrow ',
    isPossible: true,
  },
  {
    name: 'arrow10',
    symbol: '⇓',
    latex: '\\Downarrow',
    isPossible: true,
  },
  {
    name: 'arrow11',
    symbol: '↺',
    latex: '↺',
    isPossible: true,
  },
  {
    name: 'arrow12',
    symbol: '↻',
    latex: '↻',
    isPossible: true,
  },
  {
    name: 'arrow13',
    symbol: '⇈',
    latex: '⇈',
    isPossible: true,
  },
  {
    name: 'arrow14',
    symbol: '⇊',
    latex: '⇊',
    isPossible: true,
  },
];
export const inequality: InputMath[] = [
  {
    name: 'inequality1',
    symbol: '=',
    latex: '=',
    isPossible: true,
  },
  {
    name: 'inequality2',
    symbol: '<',
    latex: '<',
    isPossible: true,
  },
  {
    name: 'inequality3',
    symbol: '>',
    latex: '>',
    isPossible: true,
  },
  {
    name: 'inequality4',
    symbol: '≤',
    latex: '≤',
    isPossible: true,
  },
  {
    name: 'inequality5',
    symbol: '≥',
    latex: '≥',
    isPossible: true,
  },
  {
    name: 'inequality6',
    symbol: '≲',
    latex: '≲',
    isPossible: true,
  },
  {
    name: 'inequality7',
    symbol: '≳',
    latex: '≳',
    isPossible: true,
  },
  {
    name: 'inequality8',
    symbol: '⊂',
    latex: '⊂',
    isPossible: true,
  },
  {
    name: 'inequality9',
    symbol: '⊃',
    latex: '⊃',
    isPossible: true,
  },
  {
    name: 'inequality10',
    symbol: '⊆',
    latex: '⊆',
    isPossible: true,
  },
  {
    name: 'inequality11',
    symbol: '⊇',
    latex: '⊇',
    isPossible: true,
  },
  {
    name: 'inequality12',
    symbol: '⊊',
    latex: '⊊',
    isPossible: true,
  },
  {
    name: 'inequality13',
    symbol: '⊋',
    latex: '⊋',
    isPossible: true,
  },
  {
    name: 'inequality14',
    symbol: '≻',
    latex: '≻',
    isPossible: true,
  },
  {
    name: 'inequality15',
    symbol: '≺',
    latex: '≺',
    isPossible: true,
  },
];
export const notoperator: InputMath[] = [
  {
    name: 'notoperator1',
    symbol: '≮',
    latex: '≮',
    isPossible: true,
  },
  {
    name: 'notoperator2',
    symbol: '≯',
    latex: '≯',
    isPossible: true,
  },
  {
    name: 'notoperator3',
    symbol: '⊄',
    latex: '⊄',
    isPossible: true,
  },
  {
    name: 'notoperator4',
    symbol: '⊅',
    latex: '⊅',
    isPossible: true,
  },
  {
    name: 'notoperator5',
    symbol: '⊈',
    latex: '⊈',
    isPossible: true,
  },
  {
    name: 'notoperator6',
    symbol: '⊉',
    latex: '⊉',
    isPossible: true,
  },
  {
    name: 'notoperator7',
    symbol: '≰',
    latex: '≰',
    isPossible: true,
  },
  {
    name: 'notoperator8',
    symbol: '≱',
    latex: '≱',
    isPossible: true,
  },
];
export const figure: InputMath[] = [
  {
    name: 'figure1',
    symbol: '∟',
    latex: '∟',
    isPossible: true,
  },
  {
    name: 'figure2',
    symbol: '∠',
    latex: '∠',
    isPossible: true,
  },
  {
    name: 'figure3',
    symbol: '∢',
    latex: '∢',
    isPossible: true,
  },
  {
    name: 'figure4',
    symbol: '∴',
    latex: '∴',
    isPossible: true,
  },
  {
    name: 'figure5',
    symbol: '∵',
    latex: '∵',
    isPossible: true,
  },
  {
    name: 'figure6',
    symbol: '∶',
    latex: '∶',
    isPossible: true,
  },
  {
    name: 'figure7',
    symbol: '∷',
    latex: '∷',
    isPossible: true,
  },
];
export const greece: InputMath[] = [
  {
    name: 'greece1',
    symbol: '𝛼',
    latex: '\\alpha',
    isPossible: true,
  },
  {
    name: 'greece2',
    symbol: '𝛽',
    latex: '\\beta',
    isPossible: true,
  },
  {
    name: 'greece3',
    symbol: '𝛾',
    latex: '\\gamma',
    isPossible: true,
  },
  {
    name: 'greece4',
    symbol: '𝛿',
    latex: '\\delta',
    isPossible: true,
  },
  {
    name: 'greece5',
    symbol: '𝜀',
    latex: '\\epsilon',
    isPossible: true,
  },
  {
    name: 'greece6',
    symbol: '𝜁',
    latex: '\\zeta',
    isPossible: true,
  },
  {
    name: 'greece7',
    symbol: '𝜂',
    latex: '\\eta',
    isPossible: true,
  },
  {
    name: 'greece8',
    symbol: '𝜃',
    latex: '\\theta',
    isPossible: true,
  },
  {
    name: 'greece9',
    symbol: '𝜋',
    latex: '\\pi',
    isPossible: true,
  },
  {
    name: 'greece10',
    symbol: '𝜎',
    latex: '\\sigma',
    isPossible: true,
  },
];
export const dictionary: InputMath[] = [
  {
    name: '다항식과비례식',
    symbol: 'a^2+2ab+b^2=\\left(a+b\\right)^2',
    latex: 'a^2+2ab+b^2=\\left(a+b\\right)^2',
    isPossible: true,
  },
  {
    name: '다항식과비례식2',
    symbol: '',
    latex: 'a^2-2ab+b^2=\\left(a-b\\right)^2',
    isPossible: true,
  },
  {
    name: '다항식과비례식3',
    symbol: '',
    latex: 'a^2-b^2=\\left(a+b\\right)\\left(a-b\\right)',
    isPossible: true,
  },
  {
    name: '다항식과비례식4',
    symbol: '',
    latex: 'x^2+\\left(a+b\\right)x+ab=\\left(x+a\\right)\\left(x+b\\right)',
    isPossible: true,
  },
  {
    name: '다항식과비례식5',
    symbol: '',
    latex:
      'acx^2+\\left(ad+bc\\right)x+bd=\\left(ax+b\\right)\\left(cx+d\\right)',
    isPossible: true,
  },
  {
    name: '다항식과비례식6',
    symbol: '',
    latex: 'a^3+b^3=\\left(a+b\\right)\\left(a^2-ab+b^2\\right)',
    isPossible: true,
  },
  {
    name: '다항식과비례식7',
    symbol: '',
    latex: 'a^3-b^3=\\left(a-b\\right)\\left(a^2+ab+b^2\\right)',
    isPossible: true,
  },
  {
    name: '다항식과비례식8',
    symbol: '',
    latex: 'a^3+3a^2b+3ab^2+b^3=\\left(a+b\\right)^3',
    isPossible: true,
  },
  {
    name: '다항식과비례식9',
    symbol: '',
    latex: 'a^3-3a^2b+3ab^2-b^3=\\left(a-b\\right)^3',
    isPossible: true,
  },
  {
    name: '다항식과비례식10',
    symbol: '',
    latex: 'a^2+b^2+c^2+2ab+2bc+2ca=\\left(a+b+c\\right)^2',
    isPossible: true,
  },
  {
    name: '다항식과비례식11',
    symbol: '',
    latex:
      'a^2+b^2+c^2+ab+bc+ca =\\frac{1}{2}\\left[\\left(a+b\\right)^2+\\left(b+c\\right)^2+\\left(c+a\\right)^2\\right]',
    isPossible: true,
  },
  {
    name: '다항식과비례식12',
    symbol: '',
    latex:
      'a^2+b^2+c^2-ab-bc-ca =\\frac{1}{2}\\left[\\left(a-b\\right)^2+\\left(b-c\\right)^2+\\left(c-a\\right)^2\\right]',
    isPossible: true,
  },
  {
    name: '방정식과부등식1',
    symbol: '',
    latex: 'ax^2+bx+c=0',
    isPossible: true,
  },
  {
    name: '방정식과부등식2',
    symbol: '',
    latex: 'x=\\frac{-bpm sqrt{b^2-4ac}}{2a}',
    isPossible: true,
  },
  {
    name: '방정식과부등식3',
    symbol: '',
    latex: 'D=b^2-4ac',
    isPossible: true,
  },
  {
    name: '방정식과부등식4',
    symbol: '',
    latex:
      'D=b^2-4ac\\Leftrightarrow ax^2+bx+c=a\\left(x+\\frac{b}{2a}\\right)^2\\left(a\\ne 0\\right)',
    isPossible: true,
  },
  {
    name: '방정식과부등식5',
    symbol: '',
    latex:
      '\\alpha +\\beta =-\\frac{b}{a},\\alpha \\beta =\\frac{c}{a},\\left|\\alpha -\\beta \\right|=\\frac{\\sqrt{b^2-4ac}}{\\left|\\alpha \\right|}',
    isPossible: true,
  },
  {
    name: '방정식과부등식6',
    symbol: '',
    latex:
      '\\alpha +\\beta +\\gamma =-\\frac{b}{a},\\alpha \\beta +\\beta \\gamma +\\gamma \\alpha =\\frac{c}{a},\\alpha \\beta \\gamma =-\\frac{d}{a}',
    isPossible: true,
  },
  {
    name: '방정식과부등식7',
    symbol: '',
    latex:
      '\\left(x-\\alpha \\right)\\left(x-\\beta \\right)>0\\quad \\Leftrightarrow \\quad x<\\alpha \\quad or\\quad x>\\beta ',
    isPossible: true,
  },
  {
    name: '방정식과부등식8',
    symbol: '',
    latex:
      '\\left(x-\\alpha \\right)\\left(x-\\beta \\right)<0\\quad \\Leftrightarrow \\quad \\alpha <x<\\beta ',
    isPossible: true,
  },
  {
    name: '방정식과부등식9',
    symbol: '',
    latex:
      '\\frac{a+b}{2}\\ge \\sqrt{ab}\\ge \\frac{2ab}{a+b}\\left(a>0,b>0\\right)',
    isPossible: true,
  },
  {
    name: '좌표평면1',
    symbol: '',
    latex: 'PQ=\\sqrt{\\left(x_2-x_1\\right)^2+\\left(y_2-y_1\\right)^2}',
    isPossible: true,
  },
  {
    name: '좌표평면2',
    symbol: '',
    latex:
      'PQ=\\sqrt{\\left(x_2-x_1\\right)^2+\\left(y_2-y_1\\right)^2+\\left(z_2-z_1\\right)^2}',
    isPossible: true,
  },
  {
    name: '좌표평면3',
    symbol: '',
    latex: 'P\\left(\\frac{mx_2+nx_1}{m+n},\\frac{my_2+ny_1}{m+n}\\right)',
    isPossible: true,
  },
  {
    name: '좌표평면4',
    symbol: '',
    latex: 'M\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)',
    isPossible: true,
  },
  {
    name: '좌표평면5',
    symbol: '',
    latex: 'Q\\left(\\frac{mx_2-nx_1}{m-n},\\frac{my_2-ny_1}{m-n}\\right)',
    isPossible: true,
  },
  {
    name: '기하',
    symbol: '',
    latex: '\frac{a}{sin A}=\frac{b}{sin B}=\frac{c}{sin C}=2R',
    isPossible: true,
  },
  {
    name: '기하1',
    symbol: '',
    latex: 'a=bcos C+ccos B\\ b=ccos A+acos C\\ c=acos B+bcos A',
    isPossible: true,
  },
  {
    name: '기하3',
    symbol: '',
    latex: 'S=\\frac{1}{2}bcsin A',
    isPossible: true,
  },
  {
    name: '기하4',
    symbol: '',
    latex:
      'S=sqrt{s\\left(s-a\\right)\\left(s-b\\right)\\left(s-c\\right)},\\left(2s=a+b+c\\right)',
    isPossible: true,
  },
  {
    name: '기하5',
    symbol: '',
    latex: '\\left(\\frac{x_1+x_2+x_3}{3},\\frac{y_1+y_2+y_3}{3}\\right)',
    isPossible: true,
  },
  {
    name: '기하6',
    symbol: '',
    latex: 'y-y_1=\\frac{y_2-y_1}{x_2-x_1}\\left(x-x_1\\right)',
    isPossible: true,
  },
  {
    name: '기하7',
    symbol: '',
    latex: '\\frac{x}{a}+\\frac{y}{b}=1',
    isPossible: true,
  },
  {
    name: '기하8',
    symbol: '',
    latex: 'd=\\frac{\\left|ax_1+by_1+c\\right|}{\\sqrt{a^2+b^2}}',
    isPossible: true,
  },
  {
    name: '기하9',
    symbol: '',
    latex:
      '\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1\\quad \\left(a>b>0,k^2=a^2-b^2\\right)',
    isPossible: true,
  },
  {
    name: '기하10',
    symbol: '',
    latex: '\\frac{x_1x}{a^2}+\\frac{y_1y}{b^2}=1',
    isPossible: true,
  },
  {
    name: '기하11',
    symbol: '',
    latex: 'y=mx\\pm \\sqrt{a^2m^2+b^2}',
    isPossible: true,
  },
  {
    name: '기하12',
    symbol: '',
    latex: '\\left(x-a\\right)^2+\\left(y-b\\right)^2=r^2',
    isPossible: true,
  },
  {
    name: '기하13',
    symbol: '',
    latex: 'x_1x+y_1y=r^2',
    isPossible: true,
  },
  {
    name: '기하14',
    symbol: '',
    latex: 'y=mx\\pm r\\sqrt{m^2+1}',
    isPossible: true,
  },
  {
    name: '기하15',
    symbol: '',
    latex:
      '\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1\\quad \\left(a>b>0,k^2=a^2+b^2\\right)',
    isPossible: true,
  },
  {
    name: '기하16',
    symbol: '',
    latex: 'y=\\pm \\frac{b}{a}x',
    isPossible: true,
  },
  {
    name: '기하17',
    symbol: '',
    latex: '\\frac{x_1x}{a^2}-\\frac{y_1y}{b^2}=1',
    isPossible: true,
  },
  {
    name: '기하18',
    symbol: '',
    latex: 'y=mx\\pm \\sqrt{a^2m^2-b^2}',
    isPossible: true,
  },
  {
    name: '기하19',
    symbol: '',
    latex: '\\left(x-a\\right)^2+\\left(y-b\\right)^2+\\left(z-c\\right)^2=r^2',
    isPossible: true,
  },
  {
    name: '함수1',
    symbol: '',
    latex:
      '\\csc \\theta =\\frac{1}{\\sin \\theta },\\sec \\theta =\\frac{1}{\\cos \\theta },\\cot \\theta =\\frac{1}{\\tan \\theta }',
    isPossible: true,
  },
  {
    name: '함수2',
    symbol: '',
    latex:
      '\\tan \\theta =\\frac{\\sin \\theta }{\\cos \\theta },\\cot \\theta =\\frac{\\cos \\theta }{\\sin \\theta }',
    isPossible: true,
  },
  {
    name: '함수3',
    symbol: '',
    latex: '\\sin \\left(-\\theta \\right)=-\\sin \\theta',
    isPossible: true,
  },
  {
    name: '함수4',
    symbol: '',
    latex:
      '\\cos \\left(\\alpha +\\beta \\right)=\\cos \\alpha \\cos \\beta -\\sin \\alpha \\sin \\beta ',
    isPossible: true,
  },
  {
    name: '함수6',
    symbol: '',
    latex:
      '\\cos 2\\alpha =\\cos ^2\\alpha -\\sin ^2\\alpha =2\\cos ^2\\alpha -1=1-2\\sin ^2\\alpha ',
    isPossible: true,
  },

  {
    name: '극한과 로그1',
    symbol: '',
    latex:
      'a^x=b\\Leftrightarrow x=\\log _ab\\quad \\left(a>0,a\\ne 1,b>0\\right)',
    isPossible: true,
  },
  {
    name: '극한과 로그2',
    symbol: '',
    latex: '\\log _aa=1,\\log _a1=0',
    isPossible: true,
  },
  {
    name: '극한과 로그3',
    symbol: '',
    latex: '\\log _axy=\\log _ax+\\log _ay',
    isPossible: true,
  },
  {
    name: '극한과 로그4',
    symbol: '',
    latex: '\\log _a\\frac{x}{y}=\\log _ax-\\log _ay',
    isPossible: true,
  },
  {
    name: '극한과 로그5',
    symbol: '',
    latex: '\\log _ax^n=n\\log _ax',
    isPossible: true,
  },
  {
    name: '극한과 로그6',
    symbol: '',
    latex: '\\log _ab=\\frac{\\log _cb}{\\log _ca}',
    isPossible: true,
  },
  {
    name: '극한과 로그7',
    symbol: '',
    latex: '\\log _ab=\\frac{1}{\\log _ba}',
    isPossible: true,
  },
  {
    name: '극한과 로그8',
    symbol: '',
    latex: '\\lim _{x\\to 0}^{ }\\frac{\\sin x}{x}=1',
    isPossible: true,
  },
  {
    name: '극한과 로그9',
    symbol: '',
    latex: '\\lim _{x\\to \\infty }^{ }\\left(1+\\frac{1}{x}\\right)^x=e',
    isPossible: true,
  },
  {
    name: '극한과 로그10',
    symbol: '',
    latex: '\\lim _{x\\to 0}^{ }\\left(1+x\\right)^{\\frac{1}{x}}=e',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터5',
    symbol: '',
    latex:
      "F'\\left(x\\right)=f\\left(x\\right)\\Leftrightarrow \\int _{ }^{ }f\\left(x\\right)dx=F\\left(x\\right)+C",
    isPossible: true,
  },
  {
    name: '미분/적분/벡터6',
    symbol: '',
    latex: '\\int _{ }^{ }kdx=kx+C\\left(k는\\quad 상수\\right)',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터7',
    symbol: '',
    latex:
      '\\int _{ }^{ }x^ndx=\\frac{1}{n+1}x^{n+1}+C\\quad \\left(n은\\quad 양의\\quad 정수\\right)',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터8',
    symbol: '',
    latex:
      '\\int _{ }^{ }k\\cdot f\\left(x\\right)dx=k\\int _{ }^{ }f\\left(x\\right)dx\\quad \\left(k는\\quad 상수\\right)',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터9',
    symbol: '',
    latex:
      '\\int _{ }^{ }\\left(f\\left(x\\right)\\pm g\\left(x\\right)\\right)dx=\\int _{ }^{ }f\\left(x\\right)dx\\pm \\int _{ }^{ }g\\left(x\\right)dx\\quad \\left(복호동순\\right)',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터11',
    symbol: '',
    latex:
      '\\int _a^bf\\left(x\\right)dx=\\left[F\\left(x\\right)\\right]_a^b=F\\left(a\\right)-F\\left(b\\right)',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터12',
    symbol: '',
    latex:
      '\\int _a^bkf\\left(x\\right)dx=k\\int _a^bf\\left(x\\right)dx\\quad \\left(k는\\quad 상수\\right)',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터13',
    symbol: '',
    latex:
      '\\int _a^b\\left(f\\left(x\\right)\\pm g\\left(x\\right)\\right)dx=\\int _a^bf\\left(x\\right)dx\\pm \\int _a^bg\\left(x\\right)dx \\left(복호동순\\right)',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터14',
    symbol: '',
    latex:
      '\\int _a^bf\\left(x\\right)dx=\\int _a^cf\\left(x\\right)dx+\\int _c^bkf\\left(x\\right)dx',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터15',
    symbol: '',
    latex:
      '\\lim _{n\\to \\infty }^{ }\\sum _{k=1}^nf\\left(a+\\frac{\\left(b-a\\right)k}{n}\\right)\\cdot \\frac{b-a}{n}=\\int _a^bf\\left(x\\right)dx',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터17',
    symbol: '',
    latex:
      '\\lim _{n\\to \\infty }^{ }\\sum _{k=1}^nf\\left(a+\\frac{pk}{n}\\right)\\cdot \\frac{q}{n} =q\\int _a^1f\\left(a+px\\right)dx\\quad \\left(p=b-a\\right)',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터18',
    symbol: '',
    latex: 'S=\\int _a^bf\\left(x\\right)dx',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터19',
    symbol: '',
    latex: 'S=\\int _a^bf\\left(y\\right)dy',
    isPossible: true,
  },
  {
    name: '미분/적분/벡터20',
    symbol: '',
    latex:
      'V=\\int _a^b\\pi y^2dx=\\pi \\int _a^b\\left\\{f\\left(x\\right)\\right\\}^2dx',
    isPossible: true,
  },
  {
    name: '확률/통계',
    symbol: '',
    latex:
      '_nP_r=n\\left(n-1\\right)\\left(n-2\\right)\\times ....\\times \\left(n-r+1\\right)',
    isPossible: true,
  },
  {
    name: '확률/통계2',
    symbol: '',
    latex: '_nP_r=\\frac{n!}{\\left(n-r\\right)!}',
    isPossible: true,
  },
  {
    name: '확률/통계3',
    symbol: '',
    latex: '_n\\prod _{ }^{ }\\ _r=n^r',
    isPossible: true,
  },
  {
    name: '확률/통계4',
    symbol: '',
    latex: '_nC_r=\\frac{_nP_r}{r!}=\\frac{n!}{r!\\left(n-r\\right)!}',
    isPossible: true,
  },
  {
    name: '확률/통계5',
    symbol: '',
    latex: 'nH_r=_{n+r-1}C_r',
    isPossible: true,
  },
  {
    name: '확률/통계7',
    symbol: '',
    latex:
      '\\sigma ^2=\\frac{1}{n}\\sum _{i=1}^n\\left(x_i-m\\right)^2=\\frac{1}{n}\\sum _{i=1}^nx_i^2-m^2',
    isPossible: true,
  },
  {
    name: '확률/통계8',
    symbol: '',
    latex:
      '\\sigma ^2=\\frac{1}{N}\\sum _{i=1}^n\\left(x_i-m\\right)^2f_i=\\frac{1}{N}\\sum _{i=1}^nx_i^2f_i-m^2 \\left(N=\\sum _{i=1}^nf_i\\right)',
    isPossible: true,
  },
  {
    name: '수열',
    symbol: '',
    latex: 'a_n=a+\\left(n-1\\right)d',
    isPossible: true,
  },
  {
    name: '수열2',
    symbol: '',
    latex: 'x=\\frac{a+b}{2}',
    isPossible: true,
  },
  {
    name: '수열3',
    symbol: '',
    latex: '2a_{n+1}=a_n+a_{n+2}',
    isPossible: true,
  },
  {
    name: '수열4',
    symbol: '',
    latex: 'S_n=\\frac{n\\left(a+1\\right)}{2}',
    isPossible: true,
  },
  {
    name: '수열5',
    symbol: '',
    latex: 'S_n=\\frac{n\\left\\{2a+\\left(n-1\\right)d\\right\\}}{2}',
    isPossible: true,
  },
  {
    name: '수열6',
    symbol: '',
    latex: 'x=\\frac{2ab}{a+b}',
    isPossible: true,
  },
  {
    name: '수열7',
    symbol: '',
    latex: '\\frac{2}{a_{n+1}}=\\frac{1}{a_n}+\\frac{1}{a_{n+2}}',
    isPossible: true,
  },
  {
    name: '수열8',
    symbol: '',
    latex: 'a_n=ar^{n-1}\\quad \\left(단,\\quad r\\ne 0\\right)',
    isPossible: true,
  },
  {
    name: '수열9',
    symbol: '',
    latex: 'x=\\pm \\sqrt{ab}',
    isPossible: true,
  },
  {
    name: '수열10',
    symbol: '',
    latex: '\\left(a_{n+1}\\right)^2=a_na_{n+2}',
    isPossible: true,
  },
  {
    name: '수열11',
    symbol: '',
    latex:
      'S_n=\\frac{a\\left(r^n-1\\right)}{r-1}\\quad \\left(단,\\quad r\\ne 1\\right)',
    isPossible: true,
  },
  {
    name: '수열12',
    symbol: '',
    latex: 'S_n=na\\quad \\left(단,\\quad r=1\\right)',
    isPossible: true,
  },
  {
    name: '수열13',
    symbol: '',
    latex:
      '\\sum _{k=1}^nk^2=\\frac{n\\left(n+1\\right)\\left(2n+1\\right)}{6}',
    isPossible: true,
  },
  {
    name: '수열14',
    symbol: '',
    latex:
      '\\sum _{k=1}^nk^3=\\left\\{\\frac{n\\left(n+1\\right)}{2}\\right\\}^2=\\left(1+2+3+....+n\\right)^2',
    isPossible: true,
  },
  {
    name: '수열15',
    symbol: '',
    latex:
      'a_n=a_1+\\left(b_1+b_2+b_3+....+b_{n-1}\\right)=a_1+\\sum _{k=1}^{n-1}b',
    isPossible: true,
  },
  {
    name: '수열16',
    symbol: '',
    latex: '_{k\\sum _{ }^{ }k=\\frac{n\\left(n+1\\right)}{2}}',
    isPossible: true,
  },
];
const division: InputMath[] = [
  {
    name: 'division',
    symbol: '÷',
    latex: '\\div ',
  },
];
const plus: InputMath[] = [
  {
    name: 'plus',
    symbol: '+',
    latex: '+',
  },
];
const minus: InputMath[] = [
  {
    name: 'minus',
    symbol: '-',
    latex: '-',
  },
];
const multiple: InputMath[] = [
  {
    name: 'multiple',
    symbol: '×',
    latex: '\\times ',
  },
];
const mathSection = [
  {
    name: 'mathFraction',
    value: mathFraction,
    isPossible: true,
  },
  {
    name: 'sqrt',
    value: sqrt,
    isPossible: true,
  },
  {
    name: 'combi',
    value: combi,
    isPossible: true,
  },
  {
    name: 'integral',
    value: integral,
    isPossible: true,
  },
  {
    name: 'sigma',
    value: sigma,
    isPossible: true,
  },
  {
    name: 'limit',
    value: limit,
    isPossible: true,
  },
  {
    name: 'sin',
    value: trigonometric,
    isPossible: true,
  },
  {
    name: 'bracket',
    value: bracket,
    isPossible: true,
  },
  {
    name: 'decoration',
    value: deco,
    isPossible: true,
  },
  {
    name: 'operator',
    value: operator,
    isPossible: true,
  },
  {
    name: 'matrix',
    value: matrix,
    isPossible: true,
  },
  {
    name: 'specialsymbol',
    value: specialsymbol,
    isPossible: true,
  },
  {
    name: 'unit',
    value: unit,
    isPossible: true,
  },
  { name: 'misc', value: misc },
  { name: 'dictionary', value: dictionary },
  { name: 'arrow', value: arrow },
  { name: 'inequality', value: inequality },
  { name: 'notoperator', value: notoperator },
  { name: 'figure', value: figure },
  { name: 'division', value: division },
  { name: 'plus', value: plus },
  { name: 'minus', value: minus },
  { name: 'multiple', value: multiple },
  { name: 'greece', value: greece },
];
export default mathSection;
