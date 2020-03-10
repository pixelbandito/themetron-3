import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Swatch.module.css';

const Swatch = ({
  backgroundColor,
  className,
  color,
  ...passedProps
}) => (
  <div
    {...passedProps}
    className={classNames(styles.Swatch, className)}
    style={{
      backgroundColor,
      color,
    }}
  />
);

Swatch.propTypes = {
  backgroundColor: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};

Swatch.defaultProps = {
  backgroundColor: '#fff',
  className: '',
  color: '#000',
};

export default Swatch;
