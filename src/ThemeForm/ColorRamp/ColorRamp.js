import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThemeContext } from 'styled-components';
// import colorConvert from 'color-convert';

import {
  getContrastRatio,
  getHexFromHexOrName,
  getLuminance,
  setColorByContrastWithHsl,
  setColorByLuminanceWithHsl,
} from '../../utils/colors';

import styles from './ColorRamp.module.css';

const ColorRamp = ({
  className,
  color: initColor,
  luminances = [],
  contrastRatios,
  ...passedProps
}) => {
  const themeContext = useContext(ThemeContext);
  const white = useMemo(() => getHexFromHexOrName(themeContext.colors.white), [themeContext.colors.white]);
  const black = useMemo(() => getHexFromHexOrName(themeContext.colors.black), [themeContext.colors.black]);
  const color = useMemo(() => getHexFromHexOrName(initColor), [initColor]);

  let setColorByContrast = useMemo(() => {
    let getter = setColorByContrastWithHsl;
    return getter;
  }, []);

  let setColorByLuminance = useMemo(() => {
    let getter = null;
    getter = luminances.length ? setColorByLuminanceWithHsl : getter;
    return getter;
  }, [luminances]);

  const colors = useMemo(() => {
    let colors;

    if (setColorByLuminance) {
      colors = [
        ...luminances.sort(),
      ].map((luminance, i) => {
        return setColorByLuminance({
          hex: color,
          luminance,
        })
      });
    } else {
      colors = [
        ...contrastRatios.sort().reverse(),
        ...contrastRatios.sort(),
      ].map((contrastRatio, i) => {
        return setColorByContrast({
          hex: color,
          baseHex: i < contrastRatios.length ? white : black,
          contrastRatio,
          white,
          black,
        })
      });
    }

    colors = colors.map((color, i) => ({
      baseColor: i < contrastRatios.length ? white : black,
      color,
      contrastRatio: getContrastRatio({ hexA: color, hexB: i < contrastRatios.length ? white : black }),
      luminance: getLuminance(color),
      key: `${color}-${i}`
    }));

    colors.sort(({ luminance: a }, { luminance: b }) => a - b);

    return colors;
  }, [black, color, contrastRatios, setColorByContrast, setColorByLuminance, luminances, white]);

  return (
    <div
      {...passedProps}
      className={classNames(className, styles.ColorRamp)}
    >
      <div style={{
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'stretch',
        height: 'auto',
        border: '1px solid #efefef',
      }}>
        {colors.map(({
          baseColor,
          color,
          contrastRatio,
          key,
          luminance,
        }) => (
          <div
            key={key}
            style={{
              alignItems: 'center',
              background: color,
              color: luminance > 0.5 ? themeContext.colors.black : themeContext.colors.white,
              display: 'flex',
              flex: '1 1 auto',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            Color: {color}
            <br/>
            Base: {baseColor}
            <br/>
            Contrast: {contrastRatio}
            <br/>
            Luminance: {luminance.toFixed(4)}
          </div>
        ))}
      </div>
    </div>
  )
};

ColorRamp.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  contrastRatios: PropTypes.arrayOf(PropTypes.number),
};

ColorRamp.defaultProps = {
  className: '',
};

export default ColorRamp;
