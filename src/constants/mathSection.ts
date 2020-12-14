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

export const unit: InputMath[] = [
  {
    name: '밀리미터',
    symbol: '㎜',
    latex: '㎜',
  },
  {
    name: '센티미터',
    symbol: '㎝',
    latex: '㎝',
  },
  {
    name: '킬로미터',
    symbol: '㎞',
    latex: '㎞',
  },
  {
    name: '밀리그램',
    symbol: '㎎',
    latex: '㎎',
  },
  {
    name: '킬로그램',
    symbol: '㎏',
    latex: '㎏',
  },
  {
    name: '평방센티',
    symbol: '㎠',
    latex: '㎠',
  },
  {
    name: '평방미터',
    symbol: '㎡',
    latex: '㎡',
  },
  {
    name: '평방킬로미터',
    symbol: '㎢',
    latex: '㎢',
  },
  {
    name: '입방센티',
    symbol: '㎤',
    latex: '㎤',
  },
  {
    name: '입방미터',
    symbol: '㎥',
    latex: '㎥',
  },
  {
    name: '입방킬로미터',
    symbol: '㎦',
    latex: '㎦',
  },
  {
    name: '데시리터',
    symbol: '㎗',
    latex: '㎗',
  },
  {
    name: '밀리리터',
    symbol: '㎖',
    latex: '㎖',
  },
  {
    name: '리터',
    symbol: 'ℓ',
    latex: 'ℓ',
  },
  {
    name: '섭씨온도',
    symbol: '℃',
    latex: '℃',
  },
  {
    name: '화씨온도',
    symbol: '℉',
    latex: '℉',
  },

  {
    name: '천분율',
    symbol: '‰',
    latex: '‰',
  },
];

export const misc: InputMath[] = [
  {
    name: 'misc',
    symbol: '∀',
    latex: '\\forall ',
  },
  {
    name: 'misc2',
    symbol: 'ð',
    latex: 'ð ',
  },
  {
    name: 'misc3',
    symbol: 'ℊ',
    latex: 'ℊ',
  },
  {
    name: 'misc4',
    symbol: '℩',
    latex: '℩',
  },
  {
    name: 'misc5',
    symbol: 'ι',
    latex: '\\iota',
  },
  {
    name: 'misc6',
    symbol: 'j',
    latex: 'j',
  },
  {
    name: 'misc8',
    symbol: 'ℓ',
    latex: '\\ell',
  },
  {
    name: 'misc9',
    symbol: 'ϰ',
    latex: '\\varkappa',
  },
  {
    name: 'misc10',
    symbol: 'ℏ',
    latex: '\\hbar',
  },
  {
    name: 'misc11',
    symbol: 'ơ',
    latex: '\\sigma',
  },
  {
    name: 'misc12',
    symbol: 'ℱ',
    latex: 'ℱ',
  },
  {
    name: 'misc13',
    symbol: 'ℒ',
    latex: 'ℒ',
  },
  {
    name: 'misc14',
    symbol: '∂',
    latex: '\\partial',
  },
  {
    name: 'misc15',
    symbol: '∁',
    latex: '∁',
  },
  {
    name: 'misc16',
    symbol: 'ℑ',
    latex: '\\Im',
  },
  {
    name: 'misc17',
    symbol: '℘',
    latex: '\\wp',
  },
  {
    name: 'misc18',
    symbol: 'ℬ',
    latex: 'ℬ',
  },
  {
    name: 'misc19',
    symbol: 'ℇ',
    latex: 'ℇ',
  },
  {
    name: 'misc21',
    symbol: '𝕳',
    latex: '𝕳',
  },
  {
    name: 'misc22',
    symbol: '℧',
    latex: '℧',
  },
  {
    name: 'misc23',
    symbol: 'Å',
    latex: '\\AA',
  },
  {
    name: 'misc24',
    symbol: 'ℰ',
    latex: 'ℰ',
  },
  {
    name: 'misc25',
    symbol: '℮',
    latex: '℮',
  },
  {
    name: 'misc26',
    symbol: 'ℵ',
    latex: '\\aleph',
  },
  {
    name: 'misc27',
    symbol: 'ℶ',
    latex: 'ℶ',
  },
  {
    name: 'misc28',
    symbol: 'ℷ',
    latex: 'ℷ',
  },
  {
    name: 'misc29',
    symbol: 'ℸ',
    latex: 'ℸ',
  },
];
export const dictionary: InputMath[] = [
  {
    name: '다항식과비례식',
    symbol: 'a^2+2ab+b^2=\\left(a+b\\right)^2',
    latex: 'a^2+2ab+b^2=\\left(a+b\\right)^2',
  },
  {
    name: '다항식과비례식2',
    symbol: '',
    latex: 'a^2-2ab+b^2=\\left(a-b\\right)^2',
  },
  {
    name: '다항식과비례식3',
    symbol: '',
    latex: 'a^2-b^2=\\left(a+b\\right)\\left(a-b\\right)',
  },
  {
    name: '다항식과비례식4',
    symbol: '',
    latex: 'x^2+\\left(a+b\\right)x+ab=\\left(x+a\\right)\\left(x+b\\right)',
  },
  {
    name: '다항식과비례식5',
    symbol: '',
    latex:
      'acx^2+\\left(ad+bc\\right)x+bd=\\left(ax+b\\right)\\left(cx+d\\right)',
  },
  {
    name: '다항식과비례식6',
    symbol: '',
    latex: 'a^3+b^3=\\left(a+b\\right)\\left(a^2-ab+b^2\\right)',
  },
  {
    name: '다항식과비례식7',
    symbol: '',
    latex: 'a^3-b^3=\\left(a-b\\right)\\left(a^2+ab+b^2\\right)',
  },
  {
    name: '다항식과비례식8',
    symbol: '',
    latex: 'a^3+3a^2b+3ab^2+b^3=\\left(a+b\\right)^3',
  },
  {
    name: '다항식과비례식9',
    symbol: '',
    latex: 'a^3-3a^2b+3ab^2-b^3=\\left(a-b\\right)^3',
  },
  {
    name: '다항식과비례식10',
    symbol: '',
    latex: 'a^2+b^2+c^2+2ab+2bc+2ca=\\left(a+b+c\\right)^2',
  },
  {
    name: '다항식과비례식11',
    symbol: '',
    latex:
      'a^2+b^2+c^2+ab+bc+ca =\\frac{1}{2}\\left[\\left(a+b\\right)^2+\\left(b+c\\right)^2+\\left(c+a\\right)^2\\right]',
  },
  {
    name: '다항식과비례식12',
    symbol: '',
    latex:
      'a^2+b^2+c^2-ab-bc-ca =\\frac{1}{2}\\left[\\left(a-b\\right)^2+\\left(b-c\\right)^2+\\left(c-a\\right)^2\\right]',
  },
  {
    name: '방정식과부등식1',
    symbol: '',
    latex: 'ax^2+bx+c=0',
  },
  {
    name: '방정식과부등식2',
    symbol: '',
    latex: 'x=\\frac{-bpm sqrt{b^2-4ac}}{2a}',
  },
  {
    name: '방정식과부등식3',
    symbol: '',
    latex: 'D=b^2-4ac',
  },
  {
    name: '방정식과부등식4',
    symbol: '',
    latex:
      'D=b^2-4ac\\Leftrightarrow ax^2+bx+c=a\\left(x+\\frac{b}{2a}\\right)^2\\left(a\\ne 0\\right)',
  },
  {
    name: '방정식과부등식5',
    symbol: '',
    latex:
      '\\alpha +\\beta =-\\frac{b}{a},\\alpha \\beta =\\frac{c}{a},\\left|\\alpha -\\beta \\right|=\\frac{\\sqrt{b^2-4ac}}{\\left|\\alpha \\right|}',
  },
  {
    name: '방정식과부등식6',
    symbol: '',
    latex:
      '\\alpha +\\beta +\\gamma =-\\frac{b}{a},\\alpha \\beta +\\beta \\gamma +\\gamma \\alpha =\\frac{c}{a},\\alpha \\beta \\gamma =-\\frac{d}{a}',
  },
  {
    name: '방정식과부등식7',
    symbol: '',
    latex:
      '\\left(x-\\alpha \\right)\\left(x-\\beta \\right)>0\\quad \\Leftrightarrow \\quad x<\\alpha \\quad or\\quad x>\\beta ',
  },
  {
    name: '방정식과부등식8',
    symbol: '',
    latex:
      '\\left(x-\\alpha \\right)\\left(x-\\beta \\right)<0\\quad \\Leftrightarrow \\quad \\alpha <x<\\beta ',
  },
  {
    name: '방정식과부등식9',
    symbol: '',
    latex:
      '\\frac{a+b}{2}\\ge \\sqrt{ab}\\ge \\frac{2ab}{a+b}\\left(a>0,b>0\\right)',
  },
  {
    name: '좌표평면1',
    symbol: '',
    latex: 'PQ=\\sqrt{\\left(x_2-x_1\\right)^2+\\left(y_2-y_1\\right)^2}',
  },
  {
    name: '좌표평면2',
    symbol: '',
    latex:
      'PQ=\\sqrt{\\left(x_2-x_1\\right)^2+\\left(y_2-y_1\\right)^2+\\left(z_2-z_1\\right)^2}',
  },
  {
    name: '좌표평면3',
    symbol: '',
    latex: 'P\\left(\\frac{mx_2+nx_1}{m+n},\\frac{my_2+ny_1}{m+n}\\right)',
  },
  {
    name: '좌표평면4',
    symbol: '',
    latex: 'M\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)',
  },
  {
    name: '좌표평면5',
    symbol: '',
    latex: 'Q\\left(\\frac{mx_2-nx_1}{m-n},\\frac{my_2-ny_1}{m-n}\\right)',
  },
  {
    name: '기하',
    symbol: '',
    latex: '\frac{a}{sin A}=\frac{b}{sin B}=\frac{c}{sin C}=2R',
  },
  {
    name: '기하1',
    symbol: '',
    latex: 'a=bcos C+ccos B\\ b=ccos A+acos C\\ c=acos B+bcos A',
  },
  {
    name: '기하3',
    symbol: '',
    latex: 'S=\\frac{1}{2}bcsin A',
  },
  {
    name: '기하4',
    symbol: '',
    latex:
      'S=sqrt{s\\left(s-a\\right)\\left(s-b\\right)\\left(s-c\\right)},\\left(2s=a+b+c\\right)',
  },
  {
    name: '기하5',
    symbol: '',
    latex: '\\left(\\frac{x_1+x_2+x_3}{3},\\frac{y_1+y_2+y_3}{3}\\right)',
  },
  {
    name: '기하6',
    symbol: '',
    latex: 'y-y_1=\\frac{y_2-y_1}{x_2-x_1}\\left(x-x_1\\right)',
  },
  {
    name: '기하7',
    symbol: '',
    latex: '\\frac{x}{a}+\\frac{y}{b}=1',
  },
  {
    name: '기하8',
    symbol: '',
    latex: 'd=\\frac{\\left|ax_1+by_1+c\\right|}{\\sqrt{a^2+b^2}}',
  },
  {
    name: '기하9',
    symbol: '',
    latex:
      '\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1\\quad \\left(a>b>0,k^2=a^2-b^2\\right)',
  },
  {
    name: '기하10',
    symbol: '',
    latex: '\\frac{x_1x}{a^2}+\\frac{y_1y}{b^2}=1',
  },
  {
    name: '기하11',
    symbol: '',
    latex: 'y=mx\\pm \\sqrt{a^2m^2+b^2}',
  },
  {
    name: '기하12',
    symbol: '',
    latex: '\\left(x-a\\right)^2+\\left(y-b\\right)^2=r^2',
  },
  {
    name: '기하13',
    symbol: '',
    latex: 'x_1x+y_1y=r^2',
  },
  {
    name: '기하14',
    symbol: '',
    latex: 'y=mx\\pm r\\sqrt{m^2+1}',
  },
  {
    name: '기하15',
    symbol: '',
    latex:
      '\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1\\quad \\left(a>b>0,k^2=a^2+b^2\\right)',
  },
  {
    name: '기하16',
    symbol: '',
    latex: 'y=\\pm \\frac{b}{a}x',
  },
  {
    name: '기하17',
    symbol: '',
    latex: '\\frac{x_1x}{a^2}-\\frac{y_1y}{b^2}=1',
  },
  {
    name: '기하18',
    symbol: '',
    latex: 'y=mx\\pm \\sqrt{a^2m^2-b^2}',
  },
  {
    name: '기하19',
    symbol: '',
    latex: '\\left(x-a\\right)^2+\\left(y-b\\right)^2+\\left(z-c\\right)^2=r^2',
  },
  {
    name: '함수1',
    symbol: '',
    latex:
      '\\csc \\theta =\\frac{1}{\\sin \\theta },\\sec \\theta =\\frac{1}{\\cos \\theta },\\cot \\theta =\\frac{1}{\\tan \\theta }',
  },
  {
    name: '함수2',
    symbol: '',
    latex:
      '\\tan \\theta =\\frac{\\sin \\theta }{\\cos \\theta },\\cot \\theta =\\frac{\\cos \\theta }{\\sin \\theta }',
  },
  {
    name: '함수3',
    symbol: '',
    latex: '\\sin \\left(-\\theta \\right)=-\\sin \\theta',
  },
  {
    name: '함수4',
    symbol: '',
    latex:
      '\\cos \\left(\\alpha +\\beta \\right)=\\cos \\alpha \\cos \\beta -\\sin \\alpha \\sin \\beta ',
  },
  {
    name: '함수6',
    symbol: '',
    latex:
      '\\cos 2\\alpha =\\cos ^2\\alpha -\\sin ^2\\alpha =2\\cos ^2\\alpha -1=1-2\\sin ^2\\alpha ',
  },

  {
    name: '극한과 로그1',
    symbol: '',
    latex:
      'a^x=b\\Leftrightarrow x=\\log _ab\\quad \\left(a>0,a\\ne 1,b>0\\right)',
  },
  {
    name: '극한과 로그2',
    symbol: '',
    latex: '\\log _aa=1,\\log _a1=0',
  },
  {
    name: '극한과 로그3',
    symbol: '',
    latex: '\\log _axy=\\log _ax+\\log _ay',
  },
  {
    name: '극한과 로그4',
    symbol: '',
    latex: '\\log _a\\frac{x}{y}=\\log _ax-\\log _ay',
  },
  {
    name: '극한과 로그5',
    symbol: '',
    latex: '\\log _ax^n=n\\log _ax',
  },
  {
    name: '극한과 로그6',
    symbol: '',
    latex: '\\log _ab=\\frac{\\log _cb}{\\log _ca}',
  },
  {
    name: '극한과 로그7',
    symbol: '',
    latex: '\\log _ab=\\frac{1}{\\log _ba}',
  },
  {
    name: '극한과 로그8',
    symbol: '',
    latex: '\\lim _{x\\to 0}^{ }\\frac{\\sin x}{x}=1',
  },
  {
    name: '극한과 로그9',
    symbol: '',
    latex: '\\lim _{x\\to \\infty }^{ }\\left(1+\\frac{1}{x}\\right)^x=e',
  },
  {
    name: '극한과 로그10',
    symbol: '',
    latex: '\\lim _{x\\to 0}^{ }\\left(1+x\\right)^{\\frac{1}{x}}=e',
  },
  {
    name: '미분/적분/벡터5',
    symbol: '',
    latex:
      "F'\\left(x\\right)=f\\left(x\\right)\\Leftrightarrow \\int _{ }^{ }f\\left(x\\right)dx=F\\left(x\\right)+C",
  },
  {
    name: '미분/적분/벡터6',
    symbol: '',
    latex: '\\int _{ }^{ }kdx=kx+C\\left(k는\\quad 상수\\right)',
  },
  {
    name: '미분/적분/벡터7',
    symbol: '',
    latex:
      '\\int _{ }^{ }x^ndx=\\frac{1}{n+1}x^{n+1}+C\\quad \\left(n은\\quad 양의\\quad 정수\\right)',
  },
  {
    name: '미분/적분/벡터8',
    symbol: '',
    latex:
      '\\int _{ }^{ }k\\cdot f\\left(x\\right)dx=k\\int _{ }^{ }f\\left(x\\right)dx\\quad \\left(k는\\quad 상수\\right)',
  },
  {
    name: '미분/적분/벡터9',
    symbol: '',
    latex:
      '\\int _{ }^{ }\\left(f\\left(x\\right)\\pm g\\left(x\\right)\\right)dx=\\int _{ }^{ }f\\left(x\\right)dx\\pm \\int _{ }^{ }g\\left(x\\right)dx\\quad \\left(복호동순\\right)',
  },
  {
    name: '미분/적분/벡터11',
    symbol: '',
    latex:
      '\\int _a^bf\\left(x\\right)dx=\\left[F\\left(x\\right)\\right]_a^b=F\\left(a\\right)-F\\left(b\\right)',
  },
  {
    name: '미분/적분/벡터12',
    symbol: '',
    latex:
      '\\int _a^bkf\\left(x\\right)dx=k\\int _a^bf\\left(x\\right)dx\\quad \\left(k는\\quad 상수\\right)',
  },
  {
    name: '미분/적분/벡터13',
    symbol: '',
    latex:
      '\\int _a^b\\left(f\\left(x\\right)\\pm g\\left(x\\right)\\right)dx=\\int _a^bf\\left(x\\right)dx\\pm \\int _a^bg\\left(x\\right)dx \\left(복호동순\\right)',
  },
  {
    name: '미분/적분/벡터14',
    symbol: '',
    latex:
      '\\int _a^bf\\left(x\\right)dx=\\int _a^cf\\left(x\\right)dx+\\int _c^bkf\\left(x\\right)dx',
  },
  {
    name: '미분/적분/벡터15',
    symbol: '',
    latex:
      '\\lim _{n\\to \\infty }^{ }\\sum _{k=1}^nf\\left(a+\\frac{\\left(b-a\\right)k}{n}\\right)\\cdot \\frac{b-a}{n}=\\int _a^bf\\left(x\\right)dx',
  },
  {
    name: '미분/적분/벡터17',
    symbol: '',
    latex:
      '\\lim _{n\\to \\infty }^{ }\\sum _{k=1}^nf\\left(a+\\frac{pk}{n}\\right)\\cdot \\frac{q}{n} =q\\int _a^1f\\left(a+px\\right)dx\\quad \\left(p=b-a\\right)',
  },
  {
    name: '미분/적분/벡터18',
    symbol: '',
    latex: 'S=\\int _a^bf\\left(x\\right)dx',
  },
  {
    name: '미분/적분/벡터19',
    symbol: '',
    latex: 'S=\\int _a^bf\\left(y\\right)dy',
  },
  {
    name: '미분/적분/벡터20',
    symbol: '',
    latex:
      'V=\\int _a^b\\pi y^2dx=\\pi \\int _a^b\\left\\{f\\left(x\\right)\\right\\}^2dx',
  },
  {
    name: '확률/통계',
    symbol: '',
    latex:
      '_nP_r=n\\left(n-1\\right)\\left(n-2\\right)\\times ....\\times \\left(n-r+1\\right)',
  },
  {
    name: '확률/통계2',
    symbol: '',
    latex: '_nP_r=\\frac{n!}{\\left(n-r\\right)!}',
  },
  {
    name: '확률/통계3',
    symbol: '',
    latex: '_n\\prod _{ }^{ }\\ _r=n^r',
  },
  {
    name: '확률/통계4',
    symbol: '',
    latex: '_nC_r=\\frac{_nP_r}{r!}=\\frac{n!}{r!\\left(n-r\\right)!}',
  },
  {
    name: '확률/통계5',
    symbol: '',
    latex: 'nH_r=_{n+r-1}C_r',
  },
  {
    name: '확률/통계7',
    symbol: '',
    latex:
      '\\sigma ^2=\\frac{1}{n}\\sum _{i=1}^n\\left(x_i-m\\right)^2=\\frac{1}{n}\\sum _{i=1}^nx_i^2-m^2',
  },
  {
    name: '확률/통계8',
    symbol: '',
    latex:
      '\\sigma ^2=\\frac{1}{N}\\sum _{i=1}^n\\left(x_i-m\\right)^2f_i=\\frac{1}{N}\\sum _{i=1}^nx_i^2f_i-m^2 \\left(N=\\sum _{i=1}^nf_i\\right)',
  },
  {
    name: '수열',
    symbol: '',
    latex: 'a_n=a+\\left(n-1\\right)d',
  },
  {
    name: '수열2',
    symbol: '',
    latex: 'x=\\frac{a+b}{2}',
  },
  {
    name: '수열3',
    symbol: '',
    latex: '2a_{n+1}=a_n+a_{n+2}',
  },
  {
    name: '수열4',
    symbol: '',
    latex: 'S_n=\\frac{n\\left(a+1\\right)}{2}',
  },
  {
    name: '수열5',
    symbol: '',
    latex: 'S_n=\\frac{n\\left\\{2a+\\left(n-1\\right)d\\right\\}}{2}',
  },
  {
    name: '수열6',
    symbol: '',
    latex: 'x=\\frac{2ab}{a+b}',
  },
  {
    name: '수열7',
    symbol: '',
    latex: '\\frac{2}{a_{n+1}}=\\frac{1}{a_n}+\\frac{1}{a_{n+2}}',
  },
  {
    name: '수열8',
    symbol: '',
    latex: 'a_n=ar^{n-1}\\quad \\left(단,\\quad r\\ne 0\\right)',
  },
  {
    name: '수열9',
    symbol: '',
    latex: 'x=\\pm \\sqrt{ab}',
  },
  {
    name: '수열10',
    symbol: '',
    latex: '\\left(a_{n+1}\\right)^2=a_na_{n+2}',
  },
  {
    name: '수열11',
    symbol: '',
    latex:
      'S_n=\\frac{a\\left(r^n-1\\right)}{r-1}\\quad \\left(단,\\quad r\\ne 1\\right)',
  },
  {
    name: '수열12',
    symbol: '',
    latex: 'S_n=na\\quad \\left(단,\\quad r=1\\right)',
  },
  {
    name: '수열13',
    symbol: '',
    latex:
      '\\sum _{k=1}^nk^2=\\frac{n\\left(n+1\\right)\\left(2n+1\\right)}{6}',
  },
  {
    name: '수열14',
    symbol: '',
    latex:
      '\\sum _{k=1}^nk^3=\\left\\{\\frac{n\\left(n+1\\right)}{2}\\right\\}^2=\\left(1+2+3+....+n\\right)^2',
  },
  {
    name: '수열15',
    symbol: '',
    latex:
      'a_n=a_1+\\left(b_1+b_2+b_3+....+b_{n-1}\\right)=a_1+\\sum _{k=1}^{n-1}b',
  },
  {
    name: '수열16',
    symbol: '',
    latex: '_{k\\sum _{ }^{ }k=\\frac{n\\left(n+1\\right)}{2}}',
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
  {
    name: 'unit',
    value: unit,
  },
  { name: 'misc', value: misc },
  { name: 'dictionary', value: dictionary },
];
export default mathSection;
