import { describe, expect, test } from '@jest/globals';
import defaultTheme from '../_theme-example.json';
import { getButtons } from './theme-utils.mjs';

const defaultButtons = {
  borderWidth: 1,
  depth: {
    elevation: 1,
    embossed: 1,
    fullness: 1,
    shine: 1,
  },
  roundness: 0.2,
  sizes: {
    lg: {
      fontSize: 24,
      paddingH: 16,
      paddingV: 8,
    },
    md: {
      fontSize: 16,
      paddingH: 16,
      paddingV: 8,
    },
    sm: {
      fontSize: 12,
      paddingH: 8,
      paddingV: 4,
    },
  },
  variants: {
    default: {
      ':active': {
        keyColor: 'default',
      },
      ':disabled': {
        keyColor: 'default',
      },
      ':focus': {
        keyColor: 'default',
      },
      ':hover': {
        keyColor: 'default',
      },
      default: {
        keyColor: 'default',
      },
    },
    primary: {
      ':active': {
        keyColor: 'primary',
      },
      ':disabled': {
        keyColor: 'default',
      },
      ':focus': {
        keyColor: 'primary',
      },
      ':hover': {
        keyColor: 'primary',
      },
      default: {
        keyColor: 'primary',
      },
    },
  },
};

describe('getButtons', () => {
  test('produces default buttons', () => {
    const buttons = getButtons(defaultTheme);
    expect(buttons).toEqual(defaultButtons);
  });

  test('applies variant overrides', () => {
    const buttons = getButtons({
      ...defaultTheme,
      variants: {
        default: {
          ':hover': {
            keyColor: 'primary',
          },
        },
        primary: {
          default: {
            textColor: 'default',
          },
        },
      },
    });

    expect(buttons).toEqual({
      ...defaultButtons,
      variants: {
        ...defaultButtons.variants,
        default: {
          ...defaultButtons.variants.default,
          ':hover': {
            ...defaultButtons.variants.default[':hover'],
            keyColor: 'primary',
          },
        },
        primary: {
          ...defaultButtons.variants.primary,
          default: {
            ...defaultButtons.variants.primary.default,
            textColor: 'default',
          },
        },
      },
    });
  });
});
