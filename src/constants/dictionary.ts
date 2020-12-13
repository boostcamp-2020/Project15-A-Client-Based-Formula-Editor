export interface InputMath {
  name: string;
  text: string;
  latex: string;
}
export const dictionary: InputMath[] = [
  {
    name: '다항식과비례식',
    text: '',
    latex: 'a^2+2ab+b^2=\\left(a+b\\right)^2',
  },
  {
    name: '다항식과비례식2',
    text: '',
    latex: 'a^2-2ab+b^2=\\left(a-b\\right)^2',
  },
  {
    name: '다항식과비례식3',
    text: '',
    latex: 'a^2-b^2=\\left(a+b\\right)\\left(a-b\\right)',
  },
  {
    name: '다항식과비례식4',
    text: '',
    latex: 'x^2+\\left(a+b\\right)x+ab=\\left(x+a\\right)\\left(x+b\\right)',
  },
  {
    name: '다항식과비례식5',
    text: '',
    latex:
      'acx^2+\\left(ad+bc\\right)x+bd=\\left(ax+b\\right)\\left(cx+d\\right)',
  },
  {
    name: '다항식과비례식6',
    text: '',
    latex: 'a^3+b^3=\\left(a+b\\right)\\left(a^2-ab+b^2\\right)',
  },
  {
    name: '다항식과비례식7',
    text: '',
    latex: 'a^3-b^3=\\left(a-b\\right)\\left(a^2+ab+b^2\\right)',
  },
  {
    name: '다항식과비례식8',
    text: '',
    latex: 'a^3+3a^2b+3ab^2+b^3=\\left(a+b\\right)^3',
  },
  {
    name: '다항식과비례식9',
    text: '',
    latex: 'a^3-3a^2b+3ab^2-b^3=\\left(a-b\\right)^3',
  },
  {
    name: '다항식과비례식10',
    text: '',
    latex: 'a^2+b^2+c^2+2ab+2bc+2ca=\\left(a+b+c\\right)^2',
  },
  {
    name: '다항식과비례식11',
    text: '',
    latex:
      'a^2+b^2+c^2+ab+bc+ca =\\frac{1}{2}\\left[\\left(a+b\\right)^2+\\left(b+c\\right)^2+\\left(c+a\\right)^2\\right]',
  },
  {
    name: '다항식과비례식12',
    text: '',
    latex:
      'a^2+b^2+c^2-ab-bc-ca =\\frac{1}{2}\\left[\\left(a-b\\right)^2+\\left(b-c\\right)^2+\\left(c-a\\right)^2\\right]',
  },
  {
    name: '다항식과비례식13',
    text: '',
    latex:
      'a^3+b^3+c^3-3abc =\\left(a+b+c\\right)\\left(a^2+b^2+c^2-ab-bc-ca\\right)\\ =\\frac{1}{2}\\left(a+b+c\\right)\\left[\\left(a-b\\right)^2+\\left(b-c\\right)^2+\\left(c-a\\right)^2\\right]',
  },
  {
    name: '방정식과부등식1',
    text: '',
    latex: 'ax^2+bx+c=0',
  },
  {
    name: '방정식과부등식2',
    text: '',
    latex: 'x=\\frac{-bpm sqrt{b^2-4ac}}{2a}',
  },
  {
    name: '방정식과부등식3',
    text: '',
    latex: 'D=b^2-4ac',
  },
  {
    name: '방정식과부등식4',
    text: '',
    latex:
      'D=b^2-4ac\\Leftrightarrow ax^2+bx+c=a\\left(x+\\frac{b}{2a}\\right)^2\\left(a\\ne 0\\right)',
  },
  {
    name: '방정식과부등식5',
    text: '',
    latex:
      '\\alpha +\\beta =-\\frac{b}{a},\\alpha \\beta =\\frac{c}{a},\\left|\\alpha -\\beta \\right|=\\frac{\\sqrt{b^2-4ac}}{\\left|\\alpha \\right|}',
  },
  {
    name: '방정식과부등식6',
    text: '',
    latex:
      '\\alpha +\\beta +\\gamma =-\\frac{b}{a},\\alpha \\beta +\\beta \\gamma +\\gamma \\alpha =\\frac{c}{a},\\alpha \\beta \\gamma =-\\frac{d}{a}',
  },
  {
    name: '방정식과부등식7',
    text: '',
    latex:
      '\\left(x-\\alpha \\right)\\left(x-\\beta \\right)>0\\quad \\Leftrightarrow \\quad x<\\alpha \\quad or\\quad x>\\beta ',
  },
  {
    name: '방정식과부등식8',
    text: '',
    latex:
      '\\left(x-\\alpha \\right)\\left(x-\\beta \\right)<0\\quad \\Leftrightarrow \\quad \\alpha <x<\\beta ',
  },
  {
    name: '방정식과부등식9',
    text: '',
    latex:
      '\\frac{a+b}{2}\\ge \\sqrt{ab}\\ge \\frac{2ab}{a+b}\\left(a>0,b>0\\right)',
  },
  {
    name: '좌표평면1',
    text: '',
    latex: 'PQ=\\sqrt{\\left(x_2-x_1\\right)^2+\\left(y_2-y_1\\right)^2}',
  },
  {
    name: '좌표평면2',
    text: '',
    latex:
      'PQ=\\sqrt{\\left(x_2-x_1\\right)^2+\\left(y_2-y_1\\right)^2+\\left(z_2-z_1\\right)^2}',
  },
  {
    name: '좌표평면3',
    text: '',
    latex: 'P\\left(\\frac{mx_2+nx_1}{m+n},\\frac{my_2+ny_1}{m+n}\\right)',
  },
  {
    name: '좌표평면4',
    text: '',
    latex: 'M\\left(\\frac{x_1+x_2}{2},\\frac{y_1+y_2}{2}\\right)',
  },
  {
    name: '좌표평면5',
    text: '',
    latex: 'Q\\left(\\frac{mx_2-nx_1}{m-n},\\frac{my_2-ny_1}{m-n}\\right)',
  },
  {
    name: '기하1',
    text: '',
    latex: '\frac{a}{sin A}=\frac{b}{sin B}=\frac{c}{sin C}=2R',
  },
  {
    name: '기하2',
    text: '',
    latex: 'a=bcos C+ccos B\\ b=ccos A+acos C\\ c=acos B+bcos A',
  },
  {
    name: '기하2',
    text: '',
    latex: 'a^2=b^2+c^2-2bccos A\\ b^2=c^2+a^2-2cacos B\\ c^2=a^2+b^2-2abcos C',
  },
  {
    name: '기하3',
    text: '',
    latex: 'S=\\frac{1}{2}bcsin A',
  },
  {
    name: '기하4',
    text: '',
    latex:
      'S=sqrt{sleft(s-a\\right)left(s-b\\right)left(s-c\\right)},left(2s=a+b+c\\right)',
  },
  {
    name: '기하5',
    text: '',
    latex: 'left(\\frac{x_1+x_2+x_3}{3},\\frac{y_1+y_2+y_3}{3}\\right)',
  },
  {
    name: '기하6',
    text: '',
    latex: 'y-y_1=\\frac{y_2-y_1}{x_2-x_1}left(x-x_1\\right)',
  },
  {
    name: '기하7',
    text: '',
    latex: '\\frac{x}{a}+\\frac{y}{b}=1',
  },
  {
    name: '기하8',
    text: '',
    latex: 'd=\\frac{\\left|ax_1+by_1+c\\right|}{\\sqrt{a^2+b^2}}',
  },
  {
    name: '기하9',
    text: '',
    latex:
      '\\frac{x^2}{a^2}+\\frac{y^2}{b^2}=1\\quad \\left(a>b>0,k^2=a^2-b^2\\right)',
  },
  {
    name: '기하10',
    text: '',
    latex: '\\frac{x_1x}{a^2}+\\frac{y_1y}{b^2}=1',
  },
  {
    name: '기하11',
    text: '',
    latex: 'y=mx\\pm \\sqrt{a^2m^2+b^2}',
  },
  {
    name: '기하12',
    text: '',
    latex: '\\left(x-a\\right)^2+\\left(y-b\\right)^2=r^2',
  },
  {
    name: '기하13',
    text: '',
    latex: 'x_1x+y_1y=r^2',
  },
  {
    name: '기하14',
    text: '',
    latex: 'y=mx\\pm r\\sqrt{m^2+1}',
  },
  {
    name: '기하15',
    text: '',
    latex:
      '\\frac{x^2}{a^2}-\\frac{y^2}{b^2}=1\\quad \\left(a>b>0,k^2=a^2+b^2\\right)',
  },
  {
    name: '기하16',
    text: '',
    latex: 'y=\\pm \\frac{b}{a}x',
  },
  {
    name: '기하17',
    text: '',
    latex: '\\frac{x_1x}{a^2}-\\frac{y_1y}{b^2}=1',
  },
  {
    name: '기하18',
    text: '',
    latex: 'y=mx\\pm \\sqrt{a^2m^2-b^2}',
  },
  {
    name: '기하19',
    text: '',
    latex: '\\left(x-a\\right)^2+\\left(y-b\\right)^2+\\left(z-c\\right)^2=r^2',
  },
  {
    name: '함수1',
    text: '',
    latex:
      '\\csc \\theta =\\frac{1}{\\sin \\theta },\\sec \\theta =\\frac{1}{\\cos \\theta },\\cot \\theta =\\frac{1}{\\tan \\theta }',
  },
  {
    name: '함수2',
    text: '',
    latex:
      '\\csc \\theta =\\frac{1}{\\sin \\theta },\\sec \\theta =\\frac{1}{\\cos \\theta },\\cot \\theta =\\frac{1}{\\tan \\theta }',
  },
  {
    name: '함수3',
    text: '',
    latex:
      '\\sin \\left(360\\cir +\\theta \\right)=\\sin \\theta \\cos \\left(360\\cir +\\theta \\right)=\\cos \\theta \\tan \\left(360\\cir +\\theta \\right)=\\tan \\theta ',
  },
  {
    name: '극한과 로그1',
    text: '',
    latex:
      'a^x=b\\Leftrightarrow x=\\log _ab\\quad \\left(a>0,a\\ne 1,b>0\\right)',
  },
  {
    name: '극한과 로그2',
    text: '',
    latex: '\\log _aa=1,\\log _a1=0',
  },
  {
    name: '극한과 로그3',
    text: '',
    latex: '\\log _axy=\\log _ax+\\log _ay',
  },
  {
    name: '극한과 로그4',
    text: '',
    latex: '\\log _a\\frac{x}{y}=\\log _ax-\\log _ay',
  },
  {
    name: '극한과 로그5',
    text: '',
    latex: '\\log _ax^n=n\\log _ax',
  },
  {
    name: '극한과 로그6',
    text: '',
    latex: '\\log _ab=\\frac{\\log _cb}{\\log _ca}',
  },
  {
    name: '극한과 로그7',
    text: '',
    latex: '\\log _ab=\\frac{1}{\\log _ba}',
  },
  {
    name: '극한과 로그8',
    text: '',
    latex: '\\lim _{x\\to 0}^{ }\\frac{\\sin x}{x}=1',
  },
  {
    name: '극한과 로그9',
    text: '',
    latex: '\\lim _{x\\to \\infty }^{ }\\left(1+\\frac{1}{x}\\right)^x=e',
  },
  {
    name: '극한과 로그10',
    text: '',
    latex: '\\lim _{x\\to 0}^{ }\\left(1+x\\right)^{\\frac{1}{x}}=e',
  },
  {
    name: '미분/적분/벡터',
    text: '',
    latex:
      '\\frac{\\righttriangle y}{\\righttriangle x}=\\frac{f\\left(a+\\righttriangle x\\right)-f\\left(a\\right)}{\\righttriangle x}',
  },
  {
    name: '미분/적분/벡터2',
    text: '',
    latex:
      '\\lim _{\\righttriangle x\\to 0}^{ }\\frac{\\righttriangle y}{\\righttriangle x}=\\lim _{\\righttriangle x\\to 0}^{ }\\frac{f\\left(a+\\righttriangle x\\right)-f\\left(a\\right)}{\\righttriangle x}',
  },
  {
    name: '미분/적분/벡터3',
    text: '',
    latex:
      '\\lim _{\\righttriangle x\\to 0}^{ }\\frac{\\righttriangle y}{\\righttriangle x}=\\lim _{\\righttriangle x\\to 0}^{ }\\frac{f\\left(x+\\righttriangle x\\right)-f\\left(x\\right)}{\\righttriangle x}',
  },
  {
    name: '미분/적분/벡터4',
    text: '',
    latex:
      '\\lim _{\\righttriangle t\\to 0}^{ }\\frac{\\righttriangle y}{\\righttriangle t}=\\frac{dy}{dt}',
  },
  {
    name: '미분/적분/벡터5',
    text: '',
    latex:
      "F'\\left(x\\right)=f\\left(x\\right)\\Leftrightarrow \\int _{ }^{ }f\\left(x\\right)dx=F\\left(x\\right)+C",
  },
  {
    name: '미분/적분/벡터6',
    text: '',
    latex: '\\int _{ }^{ }kdx=kx+C\\left(k는\\quad 상수\\right)',
  },
  {
    name: '미분/적분/벡터7',
    text: '',
    latex:
      '\\int _{ }^{ }x^ndx=\\frac{1}{n+1}x^{n+1}+C\\quad \\left(n은\\quad 양의\\quad 정수\\right)',
  },
  {
    name: '미분/적분/벡터8',
    text: '',
    latex:
      '\\int _{ }^{ }k\\cdot f\\left(x\\right)dx=k\\int _{ }^{ }f\\left(x\\right)dx\\quad \\left(k는\\quad 상수\\right)',
  },
  {
    name: '미분/적분/벡터9',
    text: '',
    latex:
      '\\int _{ }^{ }\\left(f\\left(x\\right)\\pm g\\left(x\\right)\\right)dx=\\int _{ }^{ }f\\left(x\\right)dx\\pm \\int _{ }^{ }g\\left(x\\right)dx\\quad \\left(복호동순\\right)',
  },
  {
    name: '미분/적분/벡터10',
    text: '',
    latex:
      '\\int _a^bf\\left(x\\right)dx=\\lim _{n\\to \\infty }^{ }\\sum _{k=1}^nf\\left(x_k\\right)\\cdot \\righttriangle x',
  },
  {
    name: '미분/적분/벡터11',
    text: '',
    latex:
      '\\int _a^bf\\left(x\\right)dx=\\left[F\\left(x\\right)\\right]_a^b=F\\left(a\\right)-F\\left(b\\right)',
  },
  {
    name: '미분/적분/벡터12',
    text: '',
    latex:
      '\\int _a^bkf\\left(x\\right)dx=k\\int _a^bf\\left(x\\right)dx\\quad \\left(k는\\quad 상수\\right)',
  },
  {
    name: '미분/적분/벡터13',
    text: '',
    latex:
      '\\int _a^b\\left(f\\left(x\\right)\\pm g\\left(x\\right)\\right)dx=\\int _a^bf\\left(x\\right)dx\\pm \\int _a^bg\\left(x\\right)dx \\left(복호동순\\right)',
  },
  {
    name: '미분/적분/벡터14',
    text: '',
    latex:
      '\\int _a^bf\\left(x\\right)dx=\\int _a^cf\\left(x\\right)dx+\\int _c^bkf\\left(x\\right)dx',
  },
  {
    name: '미분/적분/벡터15',
    text: '',
    latex:
      '\\lim _{n\\to \\infty }^{ }\\sum _{k=1}^nf\\left(a+\\frac{\\left(b-a\\right)k}{n}\\right)\\cdot \\frac{b-a}{n}=\\int _a^bf\\left(x\\right)dx',
  },
  {
    name: '미분/적분/벡터16',
    text: '',
    latex:
      '\\lim _{n\\to \\infty }^{ }\\sum _{k=1}^nf\\left(a+\\frac{pk}{n}\\right)\\cdot \\frac{p}{n}=\\int _a^{a+p}f\\left(x\\right)dx =\\int _0^pf\\left(a+x\\right)dx\\quad \\left(p=b-a\\right)',
  },
  {
    name: '미분/적분/벡터17',
    text: '',
    latex:
      '\\lim _{n\\to \\infty }^{ }\\sum _{k=1}^nf\\left(a+\\frac{pk}{n}\\right)\\cdot \\frac{q}{n} =q\\int _a^1f\\left(a+px\\right)dx\\quad \\left(p=b-a\\right)',
  },
  {
    name: '미분/적분/벡터18',
    text: '',
    latex: 'S=\\int _a^bf\\left(x\\right)dx',
  },
  {
    name: '미분/적분/벡터19',
    text: '',
    latex: 'S=\\int _a^bf\\left(y\\right)dy',
  },
  {
    name: '미분/적분/벡터20',
    text: '',
    latex:
      'V=\\int _a^b\\pi y^2dx=\\pi \\int _a^b\\left\\{f\\left(x\\right)\\right\\}^2dx',
  },
  {
    name: '확률/통계',
    text: '',
    latex:
      '_nP_r=n\\left(n-1\\right)\\left(n-2\\right)\\times ....\\times \\left(n-r+1\\right)',
  },
  {
    name: '확률/통계2',
    text: '',
    latex: '_nP_r=\\frac{n!}{\\left(n-r\\right)!}',
  },
  {
    name: '확률/통계3',
    text: '',
    latex: '_n\\prod _{ }^{ }\\ _r=n^r',
  },
  {
    name: '확률/통계4',
    text: '',
    latex: '_nC_r=\\frac{_nP_r}{r!}=\\frac{n!}{r!\\left(n-r\\right)!}',
  },
  {
    name: '확률/통계5',
    text: '',
    latex: 'nH_r=_{n+r-1}C_r',
  },
  {
    name: '확률/통계6',
    text: '',
    latex: '\\left(a+b\\right)^2\\sum _{r=0}^n\\combi{\\ }_nC_ra^{n-r}b^r',
  },
  {
    name: '확률/통계7',
    text: '',
    latex:
      '\\sigma ^2=\\frac{1}{n}\\sum _{i=1}^n\\left(x_i-m\\right)^2=\\frac{1}{n}\\sum _{i=1}^nx_i^2-m^2',
  },
  {
    name: '확률/통계8',
    text: '',
    latex:
      '\\sigma ^2=\\frac{1}{N}\\sum _{i=1}^n\\left(x_i-m\\right)^2f_i=\\frac{1}{N}\\sum _{i=1}^nx_i^2f_i-m^2 \\left(N=\\sum _{i=1}^nf_i\\right)',
  },
  {
    name: '확률/통계9',
    text: '',
    latex:
      '\\sigma ^2=\\frac{1}{N}\\sum _{i=1}^n\\left(x_i-A\\right)^2f_i-\\left(\\frac{1}{N}\\sum _{i=1}^n\\left(x_i^2-A\\right)f_i\\right)^2 \\left(N=\\sum _{i=1}^nf_i,\\quad A는\\quad 가평균\\right)',
  },
  {
    name: '수열',
    text: '',
    latex: 'a_n=a+\\left(n-1\\right)d',
  },
  {
    name: '수열2',
    text: '',
    latex: 'x=\\frac{a+b}{2}',
  },
  {
    name: '수열3',
    text: '',
    latex: '2a_{n+1}=a_n+a_{n+2}',
  },
  {
    name: '수열4',
    text: '',
    latex: 'S_n=\\frac{n\\left(a+1\\right)}{2}',
  },
  {
    name: '수열5',
    text: '',
    latex: 'S_n=\\frac{n\\left\\{2a+\\left(n-1\\right)d\\right\\}}{2}',
  },
  {
    name: '수열6',
    text: '',
    latex: 'x=\\frac{2ab}{a+b}',
  },
  {
    name: '수열7',
    text: '',
    latex: '\\frac{2}{a_{n+1}}=\\frac{1}{a_n}+\\frac{1}{a_{n+2}}',
  },
  {
    name: '수열8',
    text: '',
    latex: 'a_n=ar^{n-1}\\quad \\left(단,\\quad r\\ne 0\\right)',
  },
  {
    name: '수열9',
    text: '',
    latex: 'x=\\pm \\sqrt{ab}',
  },
  {
    name: '수열10',
    text: '',
    latex: '\\left(a_{n+1}\\right)^2=a_na_{n+2}',
  },
  {
    name: '수열11',
    text: '',
    latex:
      'S_n=\\frac{a\\left(r^n-1\\right)}{r-1}\\quad \\left(단,\\quad r\\ne 1\\right)',
  },
  {
    name: '수열12',
    text: '',
    latex: 'S_n=na\\quad \\left(단,\\quad r=1\\right)',
  },
  {
    name: '수열13',
    text: '',
    latex:
      '\\sum _{k=1}^nk^2=\\frac{n\\left(n+1\\right)\\left(2n+1\\right)}{6}',
  },
  {
    name: '수열14',
    text: '',
    latex:
      '\\sum _{k=1}^nk^3=\\left\\{\\frac{n\\left(n+1\\right)}{2}\\right\\}^2=\\left(1+2+3+....+n\\right)^2',
  },
  {
    name: '수열15',
    text: '',
    latex:
      'a_n=a_1+\\left(b_1+b_2+b_3+....+b_{n-1}\\right)=a_1+\\sum _{k=1}^{n-1}b',
  },
  {
    name: '수열16',
    text: '',
    latex: '_{k\\sum _{ }^{ }k=\\frac{n\\left(n+1\\right)}{2}}',
  },
];
