import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import styles from './Head.module.css';

const Head = ({
  className,
  ...passedProps
}) => (
  <div
    {...passedProps}
    className={classNames(className, styles.Head)}
  />
);

Head.propTypes = {
  className: PropTypes.string,
};

Head.defaultProps = {
  className: '',
};

const StyledHead = styled(Head)(
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

export default StyledHead;
