import React, { useContext } from 'react';
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
import Accordion, { AccordionContext } from '.';

const CustomHead = () => {
  const accordionContext = useContext(AccordionContext);

  return (
    <div
      style={{
        color: accordionContext ? 'red' : 'blue',
      }}
    >
      Red when accordion is open.
    </div>
  );
};

export const Reference = () => (
  <Accordion
    className={text('className', '')}
    data-testid={text('data-testid', 'accordion-test')}
    defaultIsOpen={boolean('defaultIsOpen', true)}
    speed={number('speed', 1)}
    variant={text('variant', 'default')}
  >
    {text('children', 'Children')}
  </Accordion>
);

export const Examples = () => (
  <>
    <Accordion
      m="md"
    >
      Default (1 second per 1000 pixel height)
    </Accordion>
    <Accordion
      m="md"
      variant="primary"
    >
      Primary variant
    </Accordion>
    <Accordion
      m="md"
      speed={0.1}
    >
      Slower speed (0.1 seconds per 1000 pixels)
    </Accordion>
    <Accordion
      defaultIsOpen
      m="md"
    >
      Default is open
    </Accordion>
    <Accordion
      head={<CustomHead />}
      m="md"
    >
      Custom head using accordion context
    </Accordion>
  </>
);

export default {
  title: 'Accordion',
  component: Accordion,
  decorators: [
    withKnobs({ escapeHTML: false }),
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
