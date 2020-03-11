import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import colorConvert from 'color-convert';
import styled from 'styled-components';
import styles from './ColorViz.module.css';

export const setHsl = ({ hsl: [h, s, l], h: h2, s: s2, l: l2 }) => ([
  typeof h2 === 'number' ? h2 : h,
  typeof s2 === 'number' ? s2 : s,
  typeof l2 === 'number' ? l2 : l,
])
export const setSaturation = ({ hsl, saturation }) => setHsl({ hsl, s: saturation });
export const setLightness = ({ hsl, lightness }) => setHsl({ hsl, l: lightness });

const ColorViz = ({
  className,
  color,
  ...passedProps
}) => {
  const hsl = useMemo(() => {
    let safeValue;

    try {
      safeValue = colorConvert.keyword.hex(color).toLowerCase();
    } catch(e) {
      safeValue = color[0] === '#' ? color.substr(1) : color;
    }

    return colorConvert.hex.hsl(safeValue || '#000000');
  }, [color]);

  const units = 50;

  const rows = useMemo(() => new Array(units).fill([]).map((row, ri) => {
    let columns = new Array(units).fill('');

    // Turn 0-5 into a range from 0-100
    const getPercent = i => {
      return i / (units - 1) * 100;
    }

    columns = columns.map((column, ci) => {
      return `#${colorConvert.hsl.hex(setHsl({ hsl, l: 100 - getPercent(ri), s: getPercent(ci) }))}`;
    });

    return columns;
  }), [hsl]);

  const colorPoint = useMemo(() => {
    const [h, s, l] = hsl;
    return {
      x: `${s}%`,
      y: `${100 - l}%`,
    }
  }, [hsl]);

  return (
    <div
      {...passedProps}
      className={classNames(className, styles.ColorViz)}
      style={{
        border: `1px solid ${color}`,
        borderRadius: '4px',
        position: 'relative',
      }}
    >
      <div
        style={{
          backgroundColor: color,
          display: 'grid',
          height: '10rem',
          gridTemplateRows: `repeat(${units}, 1fr)`,
          gridTemplateColumns: `repeat(${units}, 1fr)`,
        }}
      >
        {rows.map((row, ri) => row.map((column, ci) => (
          <div
            key={`r${ri}-c${ci}`}
            style={{
              display: 'block',
              backgroundColor: column,
            }}
          />
        )))}
      </div>
      <div
        className={styles.colorPoint}
        style={{
          position: 'absolute',
          top: colorPoint.y,
          left: colorPoint.x,
          border: '2px solid black',
          boxShadow: '0 0 0px 1px white',
          height: '1rem',
          width: '1rem',
          marginLeft: '-0.5rem',
          marginTop: '-0.5rem',
          borderRadius: '0.5rem',
          backgroundColor: color,
        }}
      />
    </div>
  );
};

ColorViz.propTypes = {
  className: PropTypes.string,
};

ColorViz.defaultProps = {
  className: '',
};

const StyledColorViz = styled(ColorViz)(
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

export default StyledColorViz;
