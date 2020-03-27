import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import colorConvert from 'color-convert';
import styled from 'styled-components';
import { getContrastRatio, getHexFromHexOrName, getLuminance, setLab } from '../../utils/colors';
import styles from './ColorViz.module.css';

const ColorViz = ({
  className,
  color,
  ...passedProps
}) => {
  const safeColor = useMemo(() => getHexFromHexOrName(color), [color]);
  const luminance = useMemo(() => getLuminance(safeColor), [safeColor]);
  const hsl = useMemo(() => colorConvert.hex.hsl(safeColor), [safeColor]);
  const lab = useMemo(() => colorConvert.hex.lab(safeColor), [safeColor]);
  const units = 50;

  const rows = useMemo(() => new Array(units).fill([]).map((row, ri) => {
    let columns = new Array(units).fill('');

    // Turn 0-5 into a range from 0-100
    const getPercent = i => {
      return i / (units - 1) * 100;
    }

    columns = columns.map((column, ci) => {
      const adjustedColor = `#${colorConvert.lab.hex(setLab({ lab, l: 100 - getPercent(ri) }))}`;
      const contrastRatio = getContrastRatio({ hexA: adjustedColor, hexB: '#ffffff' });

      return {
        contrastRatio,
        color: contrastRatio >= 1 ? adjustedColor : 'black',
      }
    });

    return columns;
  }), [lab]);

  const colorPoint = useMemo(() => {
    const [, s, l] = hsl;
    return {
      x: `${s}%`,
      y: `${100 - l}%`,
    }
  }, [hsl]);

  return (
    <>
      <div className={styles.stats}>
        Hue: {hsl[0]}
        <br />
        a/b ratio: {(lab[1] / lab[2]).toFixed(2)}
        <br />
        Saturation to luminance ratio: {((hsl[1] / 100) / luminance).toFixed(0)}
        <br />
        Saturation: {hsl[1]}
        <br />
        Luminance: {luminance}
        <br />
        Lightness: {lab[0]}
        <br />
        Closest target luminance: {1}
      </div>
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
                backgroundColor: column.color,
              }}
              title={column.contrastRatio}
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
    </>
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
