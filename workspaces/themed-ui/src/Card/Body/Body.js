import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import styles from './Body.module.css';

const Body = ({
  className,
  ...passedProps
}) => (
  <div
    {...passedProps}
    className={classNames(className, styles.Body)}
  />
);

Body.propTypes = {
  className: PropTypes.string,
};

Body.defaultProps = {
  className: '',
};

const StyledBody = styled(Body)(
  ({
    theme,
  }) => ({
    color: theme.color,
  }),
);

export default StyledBody;
