import { describe, expect, test } from '@jest/globals';
import defaultTheme from '../_theme-example.json';
import { getButtons } from './theme-utils.mjs';

const defaultButtons = defaultTheme.buttons;

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
