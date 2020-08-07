import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';

/* eslint-disable import/no-extraneous-dependencies */
import {
  withKnobs,
  text,
  boolean,
  select,
} from '@storybook/addon-knobs';
/* eslint-enable */

import { defaultTheme } from '@pixelbandito/theme';
import Font from '../Font';
import Button from '.';

const sizeOptions = [
  'sm',
  'md',
  'lg',
];

const tagOptions = [
  'default',
  'a',
  'span',
  'div',
  'input[type="button"]',
  'Custom Component',
  'Custom tag string (edit below)',
];

const variantOptions = [
  'default',
  'primary',
];

const getTagProps = ({
  customTag,
  children,
  customTagString,
}) => {
  let nextTagProps = {
    tag: customTag,
  };

  switch (customTag) {
    case 'a': {
      nextTagProps = {
        ...nextTagProps,
        href: '.',
        title: 'Standard link',
      };

      break;
    }
    case 'default': {
      nextTagProps = {
        tag: undefined,
      };

      break;
    }
    case 'input[type="button"]': {
      nextTagProps = {
        children: undefined,
        tag: 'input',
        type: 'button',
        value: children,
      };

      break;
    }
    case 'Custom Component': {
      nextTagProps = {
        tag: props => (
          <div contentEditable {...props}>
            <span aria-label="rocket" role="img">🚀</span>
            {' '}
            Content editable for no reason!
          </div>
        ),
      };

      break;
    }
    case 'Custom tag string (edit below)': {
      nextTagProps = {
        tag: customTagString,
      };

      break;
    }
    default: {
      break;
    }
  }

  return nextTagProps;
};

export const Reference = () => {
  const className = text('className', '');
  const dataTestId = text('data-testid', 'button-test');
  const children = text('children', 'Children');
  const customTag = select('tag', tagOptions, 'default');
  const customTagString = text('Custom tag string', 'button');
  const outline = boolean('outline', false);
  const size = select('size', sizeOptions, 'md');
  const variant = select('variant', variantOptions, 'default');

  const tagProps = useMemo(() => getTagProps({
    customTag,
    children,
    customTagString,
  }), [
    children, customTag, customTagString,
  ]);

  return (
    <Button
      className={className}
      data-testid={dataTestId}
      outline={outline}
      size={size}
      variant={variant}
      {...tagProps}
    >
      {tagProps.tag === 'input' ? undefined : children}
    </Button>
  );
};

export const Examples = () => (
  <>
    <Button
      m="md"
    >
      Default
    </Button>
    <Button
      m="md"
      variant="primary"
    >
      Primary variant
    </Button>
    <Button
      m="md"
      outline
    >
      Outline
    </Button>
    <Button
      m="md"
      size="sm"
    >
      Small
    </Button>
    <Button
      m="md"
      size="lg"
    >
      Large
    </Button>
    <Button
      m="md"
      {...getTagProps({
        customTag: 'Custom Component',
      })}
    />
    <Button
      m="md"
      {...getTagProps({
        customTag: 'Custom tag string (edit below)',
        customTagString: 'u',
      })}
    >
      Custom tag string
    </Button>
  </>
);

export default {
  title: 'Button',
  component: Button,
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
