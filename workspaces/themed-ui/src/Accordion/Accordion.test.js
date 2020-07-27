import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@pixelbandito/theme';
import Accordion from './Accordion';

describe('Accordion', () => {
  let theme;

  beforeEach(() => {
    theme = defaultTheme;
  });

  it.only('doesn\'t error', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <Accordion />
      </ThemeProvider>,
    );

    debug();
  });
});
