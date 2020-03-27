import React, { useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ThemeContext } from 'styled-components';
// import colorConvert from 'color-convert';

import {
  getContrastRatio,
  getHexFromHexOrName,
  getLuminance,
  getTargetContrastViaHsl,
  getTargetContrastViaHsv,
  getTargetContrastViaLab,
  getTargetLuminanceViaHsl,
} from '../../utils/colors';

import styles from './ColorRamp.module.css';

const ColorRamp = ({
  className,
  color: initColor,
  mode,
  luminances = [],
  contrastRatios,
  ...passedProps
}) => {
  const themeContext = useContext(ThemeContext);
  const white = useMemo(() => getHexFromHexOrName(themeContext.colors.white), [themeContext.colors.white]);
  const black = useMemo(() => getHexFromHexOrName(themeContext.colors.black), [themeContext.colors.black]);
  const color = useMemo(() => getHexFromHexOrName(initColor), [initColor]);

  let getTargetContrast = useMemo(() => {
    let getter = getTargetContrastViaHsl;
    getter = mode === 'lab' ? getTargetContrastViaLab : getter;
    getter = mode === 'hsv' ? getTargetContrastViaHsv : getter;
    return getter;
  }, [mode]);

  let getTargetLuminance = useMemo(() => {
    let getter = null;
    getter = mode === 'hsl' && luminances.length ? getTargetLuminanceViaHsl : getter;
    return getter;
  }, [mode, luminances]);

  const colors = useMemo(() => {
    let colors;

    if (getTargetLuminance) {
      colors = [
        ...luminances.sort(),
      ].map((luminance, i) => {
        return getTargetLuminance({
          hex: color,
          luminance,
        })
      });
    } else {
      colors = [
        ...contrastRatios.sort().reverse(),
        ...contrastRatios.sort(),
      ].map((contrastRatio, i) => {
        return getTargetContrast({
          hex: color,
          baseHex: i < contrastRatios.length ? white : black,
          contrastRatio,
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
  }, [black, color, contrastRatios, getTargetContrast, getTargetLuminance, luminances, white]);

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
