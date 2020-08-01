import React from 'react';
import { ThemeProvider } from 'styled-components';

/* eslint-disable import/no-extraneous-dependencies */
import {
  withKnobs,
  text,
  boolean,
  number,
} from '@storybook/addon-knobs';
/* eslint-enable */

import { defaultTheme } from '@pixelbandito/theme';
import Font from '../Font';
import Accordion from '.';

export default {
  title: 'Accordion',
  component: Accordion,
  decorators: [
    withKnobs,
    storyFn => <Font tag="div">{storyFn()}</Font>,
    storyFn => (
      <ThemeProvider
        theme={{
          ...defaultTheme,
          shared: {
            ...defaultTheme.shared,
            mode: 'light',
          },
        }}
      >
        {storyFn()}
      </ThemeProvider>
    ),
  ],
};

export const Reference = () => (
  <Accordion
    className={text('className', '')}
    defaultIsOpen={boolean('defaultIsOpen', true)}
    speed={number('speed', 1)}
    variant={text('variant', 'default')}
    data-testid={text('data-testid', 'accordion-test')}
  >
    {text('children', 'Children')}
  </Accordion>
);
