import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { getMinLineHeight } from '../theme-utils';
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
    backgroundColor,
    color,
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
    ':hover': {
      color: outline ? hover.backgroundColor : hover.color,
      backgroundColor: outline ? hover.color : hover.backgroundColor,
      borderColor: hover.backgroundColor,
    }
  })
};

const Button = ({
  className,
  inverted,
  outline,
  ...passedProps
}) => (
  <button
    {...passedProps}
    className={classNames(className, styles.Button)}
  />
);

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
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
