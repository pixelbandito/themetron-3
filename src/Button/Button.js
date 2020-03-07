import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components'
import styles from './Button.module.css';

const Button = ({
  className,
  ...passedProps
}) => (
  <div
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
    backgroundColor,
    theme,
  }) => {
    return {
      backgroundColor: 'pink',
      color: theme.color,
    };
  }
);

export default StyledButton;
