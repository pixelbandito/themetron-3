import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getContrastRatio } from '../../utils/colors';
import Swatch from '../Swatch';
import styles from './ContrastRatios.module.css';

const ContrastRatios = ({
  className,
  color: value,
  colors,
  ...passedProps
}) => {
  return (
    <div className={classNames(styles.ContrastRatios, className)}>
      Contrast ratio
      <br />
      <div className={styles.ramps}>
        <Swatch
          backgroundColor={colors.white}
          color={value}
        >
          {getContrastRatio({ hexA: value, hexB: colors.white })}
        </Swatch>
        <Swatch
          backgroundColor={colors.black}
          color={value}
        >
          {getContrastRatio({ hexA: value, hexB: colors.black })}
        </Swatch>
        <Swatch
          backgroundColor={value}
          color={colors.white}
        >
          {getContrastRatio({ hexA: colors.white, hexB: value })}
        </Swatch>
        <Swatch
          backgroundColor={value}
          color={colors.black}
        >
          {getContrastRatio({ hexA: colors.black, hexB: value })}
        </Swatch>
      </div>
    </div>
  );
};

ContrastRatios.propTypes = {
  className: PropTypes.string,
};

ContrastRatios.defaultProps = {
  className: '',
};

export default ContrastRatios;
