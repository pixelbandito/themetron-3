import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { margin } from 'styled-system';
import { getMinLineHeight } from '@pixelbandito/theme';
import { withThemeFallback } from '../themeFallbackHelpers';
import { getFontStyle } from '../Font';
import { tagPropType } from '../prop-types';
import styles from './Button.module.css';

export const getButtonStyle = ({
  outline = false,
  size = 'md',
  theme,
  variant: variantKey = 'default',
}) => {
  const {
    buttons,
    colors,
    shared,
    space,
  } = theme;

  const {
    borderWidth,
    sizes,
    variants,
  } = buttons;

  const variant = { ...variants[variantKey] };

  const getVariantColors = ({
    contrast,
    mode,
    outline: variantOutline,
    styles: variantStyles,
  }) => {
    const backgroundColorKey = variantStyles.keyColor || 'default';
    const backgroundColor = colors[backgroundColorKey] || backgroundColorKey;
    const colorKey = variantStyles.color || (mode === 'dark' ? 'black' : 'white');
    const color = colors[colorKey] || colorKey;

    if (variantOutline) {
      return {
        color: backgroundColor?.[`${mode}-${contrast}`] ?? backgroundColor,
        backgroundColor: 'transparent',
        borderColor: backgroundColor?.[`${mode}-${contrast}`] ?? backgroundColor,
      };
    }

    return {
      backgroundColor: backgroundColor?.[`${mode}-${contrast}`] ?? backgroundColor,
      color: color?.[`${mode}-bg`] ?? colorKey,
      borderColor: backgroundColor?.[`${mode}-${contrast}`] ?? backgroundColor,
    };
  };

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

  const lightModeStyle = {
    ...getFontStyle({
      color: variantKey, // Button variants map to color ways
      size,
      theme: {
        ...theme,
        shared: {
          ...theme.shared,
          mode: 'dark',
        },
      },
    }),
    ...getVariantColors({
      contrast: '1',
      mode: 'light',
      outline,
      styles: variant.default,
    }),
    ':hover': {
      ...getVariantColors({
        contrast: '2',
        mode: 'light',
        outline,
        styles: variant[':hover'],
      }),
    },
    ':focus': {
      ...getVariantColors({
        contrast: '2',
        mode: 'light',
        outline,
        styles: variant[':focus'],
      }),
    },
    ':active': {
      ...getVariantColors({
        contrast: '2',
        mode: 'light',
        outline,
        styles: variant[':active'],
      }),
    },
    ':disabled': {
      ...getVariantColors({
        contrast: '3',
        mode: 'light',
        outline,
        styles: variant[':disabled'],
      }),
    },
  };

  const darkModeStyle = {
    ...getFontStyle({
      color: variantKey, // Button variants map to color ways
      size,
      theme: {
        ...theme,
        shared: {
          ...theme.shared,
          mode: 'dark',
        },
      },
    }),
    ...getVariantColors({
      contrast: '1',
      mode: 'dark',
      outline,
      styles: variant.default,
    }),
    ':hover': {
      ...getVariantColors({
        contrast: '2',
        mode: 'dark',
        outline,
        styles: variant[':hover'],
      }),
    },
    ':focus': {
      ...getVariantColors({
        contrast: '2',
        mode: 'dark',
        outline,
        styles: variant[':focus'],
      }),
    },
    ':active': {
      ...getVariantColors({
        contrast: '2',
        mode: 'dark',
        outline,
        styles: variant[':active'],
      }),
    },
    ':disabled': {
      ...getVariantColors({
        contrast: '3',
        mode: 'dark',
        outline,
        styles: variant[':disabled'],
      }),
    },
  };

  const modeStyles = (shared.mode === 'dark' && darkModeStyle) || lightModeStyle;

  return ({
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
  });
};

const Button = forwardRef(({
  className,
  outline,
  tag: Tag,
  ...passedProps
}, ref) => (
  <Tag
    {...passedProps}
    className={classNames(className, styles.Button)}
    ref={ref}
  />
));

Button.propTypes = {
  className: PropTypes.string,
  outline: PropTypes.bool,
  tag: tagPropType,
};

Button.defaultProps = {
  className: '',
  outline: false,
  tag: 'button',
};

const StyledButton = styled(Button)(
  getButtonStyle,
  margin,
);

export default withThemeFallback(StyledButton);
