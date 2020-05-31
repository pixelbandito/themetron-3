import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import styles from './Foot.module.css';

const Foot = ({
  className,
  ...passedProps
}) => (
  <div
    {...passedProps}
    className={classNames(className, styles.Foot)}
  />
);

Foot.propTypes = {
  className: PropTypes.string,
};

Foot.defaultProps = {
  className: '',
};

const StyledFoot = styled(Foot)(
  ({
    theme,
  }) => ({
    color: theme.color,
  }),
);

export default StyledFoot;
