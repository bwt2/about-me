export type starDataType = {
  star: string;
  top: Percentage;
  left: Percentage;
};

export const starData: starDataType[] = [
  {
    star: 'denebola',
    top: '90%',
    left: '17.5%',
  },
  {
    star: 'theta',
    top: '82.5%',
    left: '37%',
  },
  {
    star: 'delta',
    top: '70%',
    left: '32%',
  },
  {
    star: 'regulus',
    top: '75%',
    left: '76.5%',
  },
  {
    star: 'eta',
    top: '55%',
    left: '72%',
  },
  {
    star: 'gamma',
    top: '50%',
    left: '62%',
  },
  {
    star: 'zeta',
    top: '39%',
    left: '59.5%',
  },
  {
    star: 'mu',
    top: '18.5%',
    left: '68.5%',
  },
  {
    star: 'epsilon',
    top: '23%',
    left: '75.5%',
  },
];

export type starLineDataType = {
  head: string;
  tail: string;
};

export const starLineData: starLineDataType[] = [
  {
    head: 'denebola',
    tail: 'theta',
  },
  {
    head: 'denebola',
    tail: 'delta',
  },
  {
    head: 'theta',
    tail: 'regulus',
  },
  {
    head: 'eta',
    tail: 'gamma',
  },
  {
    head: 'delta',
    tail: 'gamma',
  },
  {
    head: 'gamma',
    tail: 'zeta',
  },
  {
    head: 'zeta',
    tail: 'mu',
  },
  {
    head: 'mu',
    tail: 'epsilon',
  },
  {
    head: 'regulus',
    tail: 'eta',
  },
];
