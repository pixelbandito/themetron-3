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
    spacing,
  } = theme;

  const {
    borderWidth,
    roundness,
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

  return ({
    color: outline ? backgroundColor : color,
    backgroundColor: outline ? color : backgroundColor,
    borderColor: backgroundColor,
    borderWidth,
    borderStyle: 'solid',
    borderRadius: roundness * (lineHeightPx / 2 + paddingV),
    paddingBottom: paddingV - borderWidth,
    paddingLeft: paddingH - borderWidth,
    paddingRight: paddingH - borderWidth,
    paddingTop: paddingV - borderWidth,
    fontSize: fontSize,
    lineHeight: lineHeightRatio,
    transition: 'background-color 0.2s linear, border-color 0.2s linear, color 0.2s linear',
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
      outlineOffset: '3px',
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
    }
  })
};

const Button = ({
  className,
  inverted,
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
