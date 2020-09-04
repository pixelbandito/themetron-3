import { version } from '../package.json';

import {
  getButtons,
  getColors,
  getShared,
  getSizes,
} from './theme-utils.mjs';

const baseSize = 4;

const space = getSizes({ count: 5, mdSize: baseSize * 4 });

export const baseColors = {
  white: 'white',
  black: '#16161d',
  default: 'black',
  primary: 'blue',
  // success: 'green',
  // info: 'lightblue',
  // warning: 'yellow',
  // danger: 'red',
};

const colors = getColors({ baseColors });

const shared = getShared({ colors });

const baseFonts = {
  default: {
    fallback: 'sans-serif',
    name: null,
    source: null,
  },
};

const fonts = {
  sizes: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
  },
  weights: {
    normal: 400,
    bold: 700,
  },
};

const buttons = getButtons({
  baseColors,
  colors,
  fonts,
  space,
});

export const stage0 = {
  stage: 0,
  version,
  baseColors,
  shared,
};

const theme = {
  stage: 1,
  version,
  baseColors,
  baseFonts,
  buttons,
  colors,
  fonts,
  shared,
  space,
};

export default theme;
