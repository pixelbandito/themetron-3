import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontPicker from 'font-picker-react';

import {
  Button,
  Font,
  Input,
  tagPropType,
} from '@pixelbandito/themed-ui';

import styles from './Control.module.css';

const MyFontPicker = ({ className, value, ...props }) => (
  <div className={classNames(className, styles.fontPicker)}>
    <FontPicker
      apiKey={process.env.REACT_APP_GOOGLE_FONTS_API_KEY}
      activeFontFamily={value}
      {...props}
    />
  </div>
);

const Control = ({
  children,
  className,
  id,
  label,
  onChange,
  onDelete,
  tag: CustomTag,
  type,
  value,
  ...passedProps
}) => {
  let Tag = CustomTag;
  const fontPickerProps = {};

  if (Tag === FontPicker) {
    Tag = MyFontPicker;
    fontPickerProps.pickerId = id;
  }

  return (
    <div
      {...passedProps}
      className={classNames(className, styles.Control)}
    >
      <Font
        className={styles.label}
        htmlFor={id}
        tag="label"
      >
        {label || id}
      </Font>
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
      <Tag
        className={styles.input}
        id={id}
        onChange={onChange}
        type={type}
        value={value}
        {...fontPickerProps}
      >
        {children}
      </Tag>
    </div>
  );
};

Control.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  tag: tagPropType,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
};

Control.defaultProps = {
  children: null,
  className: '',
  label: '',
  tag: Input,
  type: 'text',
};

export default Control;
