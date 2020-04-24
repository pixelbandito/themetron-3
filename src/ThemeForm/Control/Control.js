import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Button';
import styles from './Control.module.css';

const Control = ({
  className,
  id,
  label,
  onChange,
  onDelete,
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
    {' '}
    {onDelete && (
      <Button
        className={styles.delete}
        onClick={onDelete}
        outline
        size="sm"
      >
        Ⓧ
      </Button>
    )}
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
  onDelete: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Control.defaultProps = {
  className: '',
  label: '',
  type: 'text',
};

export default Control;
