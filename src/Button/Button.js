import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { getMinLineHeight } from '../theme-utils';
import { tagPropType } from '../prop-types';
import styles from './Button.module.css';

export const getButttonStyle = ({
  outline = false,
  size = 'md',
  theme,
  variant: variantKey = 'default',
}) => {
  const {
    buttons,
    colors,
    shared,
    spacing,
  } = theme;

  const {
    borderWidth,
    sizes,
    variants,
  } = buttons;

  let variant = { ...variants[variantKey] };

  const getVariantColors = ({ contrast, mode, outline, styles }) => {
    let backgroundColorKey = styles.keyColor || 'default';
    let backgroundColor = colors[backgroundColorKey] || backgroundColorKey;
    let colorKey = styles.color || (mode === 'dark' ? 'black' : 'white');
    let color = colors[colorKey] || colorKey;

    if (outline) {
      return {
        color: backgroundColor?.[`${mode}-${contrast}`] ?? backgroundColor,
        backgroundColor: 'transparent',
        borderColor: backgroundColor?.[`${mode}-${contrast}`] ?? backgroundColor,
      };
    }

    return  {
      backgroundColor: backgroundColor?.[`${mode}-${contrast}`] ?? backgroundColor,
      color: color?.[`${mode}-bg`] ?? colorKey,
      borderColor: backgroundColor?.[`${mode}-${contrast}`] ?? backgroundColor,
    };
  };

  let {
    fontSize,
    paddingH,
    paddingV,
  } = sizes[size];

  const {
    ratio: lineHeightRatio,
    px: lineHeightPx,
  } = getMinLineHeight({
    size: fontSize,
    spacing
  });

  const lightModeStyle = {
    'default': {
      ...getVariantColors({
        contrast: '1',
        mode: 'light',
        outline,
        styles: variant['default'],
      }),
    },
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
      color: getVariantColors({
        contrast: '3',
        mode: 'light',
        outline,
        styles: variant[':disabled'],
      }),
    },
  };

  const darkModeStyle = {
    'default': {
      ...getVariantColors({
        contrast: '1',
        mode: 'dark',
        outline,
        styles: variant['default'],
      }),
    },
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
    borderWidth,
    borderStyle: 'solid',
    borderRadius: theme.shared.roundness * (lineHeightPx / 2 + paddingV) / 10,
    paddingBottom: paddingV - borderWidth,
    paddingLeft: paddingH - borderWidth,
    paddingRight: paddingH - borderWidth,
    paddingTop: paddingV - borderWidth,
    fontSize: fontSize,
    lineHeight: lineHeightRatio,
    transition: 'background-color 0.2s linear, border-color 0.2s linear, color 0.2s linear',
    ...modeStyles.default,
    ':hover': {
      ...modeStyles[':hover'],
    },
    ':focus': {
      outlineStyle: 'none',
      outlineColor: modeStyles.default.borderColor,
      boxShadow: `0 0 0 1px ${modeStyles.default.borderColor}, 0 0 4px 0px ${modeStyles[':focus'].borderColor}`,
      ...modeStyles[':focus'],
    },
    ':active': {
      ...modeStyles[':active'],
    },
    ':disabled': {
      ...modeStyles[':disabled'],
    },
    '@media (prefers-color-scheme: light)': !shared.mode && {
      ...lightModeStyle,
    },
    '@media (prefers-color-scheme: dark)': !shared.mode && {
      ...darkModeStyle,
    },
  })
};

const Button = ({
  className,
  outline,
  tag: Tag,
  ...passedProps
}) => (
  <Tag
    {...passedProps}
    className={classNames(className, styles.Button)}
  />
);

Button.propTypes = {
  className: PropTypes.string,
  tag: tagPropType,
};

Button.defaultProps = {
  className: '',
  tag: 'button',
};

const StyledButton = styled(Button)(
  ({
    outline,
    size,
    theme,
    variant,
  }) => {
    const buttonStyle = getButttonStyle({
      outline,
      size,
      theme,
      variant,
    });

    return buttonStyle;
  }
);

export default StyledButton;
