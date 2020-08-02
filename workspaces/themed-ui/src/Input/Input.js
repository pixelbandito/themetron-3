import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { getMinLineHeight } from '@pixelbandito/theme';
import { withThemeFallback } from '../themeFallbackHelpers';
import { getFontStyle } from '../Font';
import styles from './Input.module.css';

export const getInputStyle = ({
  size = 'md',
  theme,
  type,
} = {}) => {
  const {
    buttons,
    colors,
    shared,
    space,
  } = theme;

  const {
    borderWidth,
    sizes,
  } = buttons;

  const {
    fontSize,
    paddingH,
    paddingV,
  } = sizes[size];

  const {
    ratio: lineHeightRatio,
    px: lineHeightPx,
  } = getMinLineHeight({
    size: fontSize,
    space,
  });

  const getColor = ({
    baseColor = 'default',
    contrast = 1,
    mode = 'light',
  }) => colors?.[baseColor]?.[`${mode}-${contrast}`] ?? colors?.[baseColor].base ?? baseColor;

  const lightModeFontStyle = getFontStyle({
    size,
    theme: {
      ...theme,
      shared: {
        ...theme.shared,
        mode: 'light',
      },
    },
  });

  delete lightModeFontStyle['@media (prefers-color-scheme: dark)'];
  delete lightModeFontStyle['@media (prefers-color-scheme: light)'];

  const lightModeStyle = {
    ...lightModeFontStyle,
    backgroundColor: 'white',
    borderColor: getColor({ contrast: 2 }),
    color: getColor({}),
    ':hover': {
      borderColor: getColor({ contrast: 1 }),
    },
    ':focus': {
      borderColor: getColor({
        baseColor: 'primary',
        contrast: 1,
      }),
      boxShadow: `0 0 0 1px ${getColor({
        baseColor: 'primary',
        contrast: 3,
      })}, 0 0 4px 0px ${getColor({
        baseColor: 'primary',
        contrast: 3,
      })}`,
    },
    ':active': {
      backgroundColor: getColor({ contrast: 'bg' }),
    },
    ':invalid': {
      borderColor:
        (colors.warn && getColor({ baseColor: 'warn', contrast: 2 }))
        || (colors.warning && getColor({ baseColor: 'warning', contrast: 2 }))
        || (colors.danger && getColor({ baseColor: 'danger', contrast: 2 }))
        || (colors.error && getColor({ baseColor: 'error', contrast: 2 }))
        || getColor({ contrast: 1 }),
    },
    ':disabled': {
      backgroundColor: getColor({ contrast: 'bg' }),
      borderColor: getColor({ contrast: 3 }),
      color: getColor({ contrast: 3 }),
    },
  };

  const darkModeFontStyle = getFontStyle({
    size,
    theme: {
      ...theme,
      shared: {
        ...theme.shared,
        mode: 'dark',
      },
    },
  });

  delete darkModeFontStyle['@media (prefers-color-scheme: dark)'];
  delete darkModeFontStyle['@media (prefers-color-scheme: light)'];

  const darkModeStyle = {
    ...darkModeFontStyle,
    backgroundColor: 'black',
    borderColor: getColor({
      contrast: 2,
      mode: 'dark',
    }),
    color: getColor({ mode: 'dark' }),
    ':hover': {
      borderColor: getColor({
        contrast: 1,
        mode: 'dark',
      }),
    },
    ':focus': {
      borderColor: getColor({
        baseColor: 'primary',
        contrast: 1,
        mode: 'dark',
      }),
      boxShadow: `0 0 0 1px ${getColor({
        baseColor: 'primary',
        contrast: 2,
        mode: 'dark',
      })}, 0 0 4px 0px ${getColor({
        baseColor: 'primary',
        contrast: 3,
        mode: 'dark',
      })}`,
    },
    ':active': {
      backgroundColor: getColor({
        contrast: 'bg',
        mode: 'dark',
      }),
    },
    ':invalid': {
      borderColor:
        (colors.warn && getColor({ baseColor: 'warn', contrast: 2, mode: 'dark' }))
        || (colors.warning && getColor({ baseColor: 'warning', contrast: 2, mode: 'dark' }))
        || (colors.danger && getColor({ baseColor: 'danger', contrast: 2, mode: 'dark' }))
        || (colors.error && getColor({ baseColor: 'error', contrast: 2, mode: 'dark' }))
        || getColor({ contrast: 1, mode: 'dark' }),
    },
    ':disabled': {
      backgroundColor: getColor({
        contrast: 'bg',
        mode: 'dark',
      }),
      borderColor: getColor({
        contrast: 3,
        mode: 'dark',
      }),
      color: getColor({
        contrast: 3,
        mode: 'dark',
      }),
    },
  };

  const modeStyles = (shared.mode === 'dark' && darkModeStyle) || lightModeStyle;

  const inputTypePropsMap = {
    color: {
      height: 2 * paddingV + lineHeightPx,
    },
  };

  const inputTypeProps = inputTypePropsMap[type] || {};

  const inputStyle = {
    ...modeStyles,
    borderWidth,
    borderStyle: 'solid',
    borderRadius: (theme.shared.roundness * (lineHeightPx / 2 + paddingV)) / 10,
    paddingBottom: paddingV - borderWidth,
    paddingLeft: paddingH - borderWidth,
    paddingRight: paddingH - borderWidth,
    paddingTop: paddingV - borderWidth,
    fontSize,
    lineHeight: lineHeightRatio,
    transition: 'background-color 0.2s linear, border-color 0.2s linear, color 0.2s linear',
    ...inputTypeProps,
    ':focus': {
      outlineStyle: 'none',
      outlineColor: modeStyles.borderColor,
      boxShadow: `0 0 0 1px ${modeStyles.borderColor}, 0 0 4px 0px ${modeStyles[':focus'].borderColor}`,
      ...modeStyles[':focus'],
    },
    '@media (prefers-color-scheme: light)': shared.mode === undefined && {
      ...lightModeStyle,
    },
    '@media (prefers-color-scheme: dark)': shared.mode === undefined && {
      ...darkModeStyle,
    },
  };

  return inputStyle;
};

const Input = forwardRef(({
  className,
  ...passedProps
}, ref) => (
  <input
    {...passedProps}
    className={classNames(className, styles.Input)}
    ref={ref}
  />
));

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

const StyledInput = styled(Input)(
  getInputStyle,
  margin,
);

export default withThemeFallback(StyledInput);
