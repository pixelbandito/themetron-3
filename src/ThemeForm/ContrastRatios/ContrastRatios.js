import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import colorConvert from 'color-convert';
import Swatch from '../Swatch';
import styles from './ContrastRatios.module.css';

export const getLuminance = hex => {
  const rgb = colorConvert.hex.rgb(hex);

  let rgb2 = rgb.map((channel, i) => {
    let c = channel / 255;

    if (c <= 0.03928) {
      return c / 12.92;
    } else {
      return Math.pow((c + 0.055) / 1.055, 2.4);
    }
  });

  const luminance = (0.2126 * rgb2[0] + 0.7152 * rgb2[1] + 0.0722 * rgb2[2]);
  return luminance;
};

export const getContrastRatio = (hexA, hexB) => {
  const luminanceA = getLuminance(hexA);
  const luminanceB = getLuminance(hexB);
  const [darker, lighter] = [luminanceA, luminanceB].sort();
  const contrastRatio = parseInt(((lighter + 0.05) / (darker + 0.05)) * 10, 10) / 10;
  return contrastRatio;
};

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
          {getContrastRatio(value, colors.white)}
        </Swatch>
        <Swatch
          backgroundColor={colors.black}
          color={value}
        >
          {getContrastRatio(value, colors.black)}
        </Swatch>
        <Swatch
          backgroundColor={value}
          color={colors.white}
        >
          {getContrastRatio(colors.white, value)}
        </Swatch>
        <Swatch
          backgroundColor={value}
          color={colors.black}
        >
          {getContrastRatio(colors.black, value)}
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
