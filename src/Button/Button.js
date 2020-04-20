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
  variant = 'default',
}) => {
  const {
    buttons,
    shared,
    spacing,
  } = theme;

  const {
    borderWidth,
    sizes,
    variants,
  } = buttons;

  const {
    active,
    backgroundColor,
    color,
    disabled,
    focus,
    hover,
  } = variants[variant];

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
    color: outline ? backgroundColor : color,
    backgroundColor: outline ? color : backgroundColor,
    borderColor: backgroundColor,
    ':hover': {
      color: outline ? hover.backgroundColor : hover.color,
      backgroundColor: outline ? hover.color : hover.backgroundColor,
      borderColor: hover.backgroundColor,
    },
    ':focus': {
      color: outline ? focus.backgroundColor : focus.color,
      backgroundColor: outline ? focus.color : focus.backgroundColor,
      borderColor: focus.backgroundColor,
      outlineColor: outline ? color : backgroundColor,
    },
    ':active': {
      color: outline ? active.backgroundColor : active.color,
      backgroundColor: outline ? active.color : active.backgroundColor,
      borderColor: active.backgroundColor,
    },
    ':disabled': {
      color: outline ? disabled.backgroundColor : disabled.color,
      backgroundColor: outline ? disabled.color : disabled.backgroundColor,
      borderColor: disabled.backgroundColor,
    },
  };

  const darkModeStyle = {
    color: outline ? color : backgroundColor,
    backgroundColor: outline ? backgroundColor : color,
    borderColor: color,
    ':hover': {
      color: outline ? hover.color : hover.backgroundColor,
      backgroundColor: outline ? hover.backgroundColor : hover.color,
      borderColor: hover.color,
    },
    ':focus': {
      color: outline ? focus.color : focus.backgroundColor,
      backgroundColor: outline ? focus.backgroundColor : focus.color,
      borderColor: focus.color,
      outlineColor: outline ? backgroundColor : color,
    },
    ':active': {
      color: outline ? active.color : active.backgroundColor,
      backgroundColor: outline ? active.backgroundColor : active.color,
      borderColor: active.color,
    },
    ':disabled': {
      color: outline ? disabled.color : disabled.backgroundColor,
      backgroundColor: outline ? disabled.backgroundColor : disabled.color,
      borderColor: disabled.backgroundColor,
    },
  };

  const defaultStyles = (shared.mode === 'dark' && darkModeStyle) || lightModeStyle;

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
    ...defaultStyles,
    ':hover': {
      ...defaultStyles[':hover'],
    },
    ':focus': {
      outlineOffset: '3px',
      ...defaultStyles[':focus'],
    },
    ':active': {
      ...defaultStyles[':active'],
    },
    ':disabled': {
      ...defaultStyles[':disabled'],
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
