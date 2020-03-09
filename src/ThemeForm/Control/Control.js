import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Control.module.css';

const Control = ({
  className,
  id,
  label,
  onChange,
  type,
  value,
  ...passedProps
}) => (
  <div
    {...passedProps}
    className={classNames(className, styles.Control)}
  >
    <label
      className={styles.label}
      htmlFor={id}
    >
      {label || id}
    </label>
    <input
      className={styles.input}
      id={id}
      onChange={onChange}
      type={type}
      value={value}
    />
  </div>
);

Control.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Control.defaultProps = {
  className: '',
  label: '',
  type: 'text',
};

export default Control;
