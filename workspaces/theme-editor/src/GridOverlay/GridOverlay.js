import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Mousetrap from 'mousetrap';
import styles from './GridOverlay.module.css';


const GridOverlay = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  useEffect(() => {
    Mousetrap.bind('.', toggleIsVisible);

    return () => {
      Mousetrap.unbind('.', toggleIsVisible);
    };
  }, [toggleIsVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.GridOverlay} />
  );
};

GridOverlay.propTypes = {
  className: PropTypes.string,
};

GridOverlay.defaultProps = {
  className: '',
};

export default GridOverlay;
