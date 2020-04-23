import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import colorConvert from 'color-convert';
import { debounce } from 'lodash-es';
import { getButtons, getColors, getSizes } from '../theme-utils.mjs';
import { getLuminance } from '../utils/colors';
import Button from '../Button';
import Swatch from '../Swatch';
import { getHexOrDont, getNumberOrDont } from './utils';
import Control from './Control';
import styles from './ThemeForm.module.css';

const ThemeForm = ({
  className,
  theme: initTheme,
  onChangeTheme,
  onApplyTheme,
}) => {
  const [mdSize, setMdSize] = useState(initTheme.spacing.md);
  const [roundness, setRoundness] = useState(initTheme.shared.roundness);
  const [themeForm, setThemeForm] = useState(initTheme);
  const importInputFileRef = useRef();

  useEffect(() => {
    onChangeTheme(themeForm);
  }, [onChangeTheme, themeForm]);

  useEffect(() => {
    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      buttons: getButtons({
        ...prevThemeForm,
      }),
    }));
  }, [themeForm.colors,  themeForm.fonts, themeForm.shared.roundness,  themeForm.spacing]);

  const handleClickApply = useCallback(() => {
    onApplyTheme(themeForm);
  }, [onApplyTheme, themeForm]);

  const handleClickRevert = useCallback(() => {
    setThemeForm(initTheme);
  }, [initTheme]);

  // COLORS
  const safeBaseColors = useMemo(() => {
    const baseColors =  Object.entries(themeForm.baseColors).reduce((result, [key, value]) => {
      let safeValue;

      try {
        safeValue = colorConvert.keyword.hex(value).toLowerCase();
      } catch(e) {
        safeValue = value[0] === '#' ? value.substr(1) : value;
      }

      return {
        ...result,
        [key]: `#${safeValue}`,
      }
    }, {});

    return baseColors;
  }, [themeForm.baseColors]);

  const [baseColors, setSafeBaseColors] = useState(safeBaseColors);

  useEffect(() => {
    setSafeBaseColors(safeBaseColors)
  }, [safeBaseColors]);

  const handleChangeColor = useCallback(({ value, key }) => {
    const nextBaseColors = {
      ...baseColors,
      [key]: getHexOrDont(value),
    };

    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      baseColors: getColors({
        nextBaseColors,
      }),
    }));

    console.log({ baseColors, nextBaseColors });
  }, [baseColors]);


  const debouncedHandleChangeColor = debounce(handleChangeColor, 100);

  // FONTS

  const [fontSizesCount, setFontSizesCount] = useState(Object.keys(initTheme.fonts.sizes).length);
  const [fontSizes, setFontSizes] = useState(initTheme.fonts.sizes);

  const handleChangeFontSize = useCallback(({ event, key }) => {
    const nextSizes = {
      ...fontSizes,
      [key]: getNumberOrDont(event.target.value),
    };

    setFontSizes(nextSizes);

    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      fonts: {
        ...themeForm.fonts,
        sizes: nextSizes,
      },
    }));
  }, [fontSizes, themeForm]);


  const handleChangeFontSizesCount = useCallback(e => {
    const nextFontSizesCount = getNumberOrDont(e.target.value);
    let nextSizes = getSizes({ count: nextFontSizesCount });

    nextSizes = Object.keys(nextSizes).reduce((result, sizeKey) => {
      return {
        ...result,
        [sizeKey]: fontSizes[sizeKey] || Object.values(fontSizes)[0],
      };
    }, {});

    setFontSizes(nextSizes);
    setFontSizesCount(nextFontSizesCount);
  }, [fontSizes]);

  const handleChangeMdSize = e => {
    const nextMdSize = getNumberOrDont(e.target.value);

    setMdSize(nextMdSize);

    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      spacing: getSizes({
        count: 5,
        mdSize: nextMdSize,
      }),
    }));
  };


  const roundnessMax = 10;
  const roundnessMin = 0;

  const handleChangeRoundness = e => {
    let nextRoundness = getNumberOrDont(e.target.value)
    nextRoundness = Math.min(nextRoundness, roundnessMax);
    nextRoundness = Math.max(nextRoundness, roundnessMin);

    setRoundness(nextRoundness);

    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      shared: {
        ...prevThemeForm.shared,
        roundness: nextRoundness,
      },
    }));
  };


  const handleClickImport = useCallback(() => {
    if (importInputFileRef.current) {
      importInputFileRef.current.click();
    }
  }, []);

  const handleChangeImport = useCallback(e => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);

    reader.onload = e => {
      try {
        setThemeForm(JSON.parse(e.target.result))
      } catch (e) {
        console.warn('Couldn\'t read theme file.', e.message);
      }
    }
  }, []);

  return (
    <form className={classNames(className, styles.ThemeForm)}>
      <Control
        id="mdSize"
        onChange={handleChangeMdSize}
        type="number"
        value={`${mdSize}`}
      />
      <Control
        id="roundness"
        onChange={handleChangeRoundness}
        type="number"
        min="0"
        max="10"
        step="1"
        value={`${roundness}`}
      />
      <section>
        <h4>Semantic colors</h4>
        {Object.entries(baseColors).map(([key, color], i) => {
          const value = color;
          return (
            <div key={key}>
              <Control
                id={`semanticColor-${key}`}
                key={key}
                label={key}
                onChange={event => debouncedHandleChangeColor({ value: event.target.value, key })}
                type="color"
                value={`${value}`}
              />
              {themeForm.colors[key] && (
                <div className={styles.swatches}>
                  {
                    Object.entries(themeForm.colors[key])
                    .sort(([variantKeyA ,hexA], [variantKeyB ,hexB]) => variantKeyB.charCodeAt(0) + getLuminance(hexB) - variantKeyA.charCodeAt(0) - getLuminance(hexA))
                    .filter(([variantKey]) => variantKey !== 'base')
                    .map(([variantKey, hex], i) => (
                      <Swatch
                        key={variantKey}
                        className={styles.swatch}
                        color={
                          getLuminance(hex) > 0.5 ?
                            themeForm.colors[key]['dark-bg'] :
                            themeForm.colors[key]['lite-bg']
                        }
                        backgroundColor={hex}
                      >
                        {variantKey}
                      </Swatch>
                    ))
                  }
                </div>
              )}
            </div>
            );
        })}
      </section>
      <Control
        id="fontSizesCount"
        onChange={handleChangeFontSizesCount}
        type="number"
        value={`${fontSizesCount}`}
      />
      <section>
        <h4>Font sizes</h4>
        {Object.entries(fontSizes).map(([key, value]) => (
          <Control
            id={`fontSize-${key}`}
            key={key}
            label={key}
            onChange={event => handleChangeFontSize({ event, key })}
            type="number"
            value={`${value}`}
          />
        ))}
      </section>
      <div>
        <Button
          outline
          onClick={handleClickRevert}
          type="button"
        >
          Revert
        </Button>
        {' '}
        <Button
          onClick={handleClickApply}
          type="button"
          variant="primary"
        >
          Apply
        </Button>
        <br />
        <br />
        <Button
          download="theme.json"
          href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(themeForm))}`}
          outline
          size="sm"
          style={{
            display: 'inline-block',
          }}
          tag="a"
        >
          Export JSON
        </Button>
        {' '}
        <input
          onChange={handleChangeImport}
          ref={importInputFileRef}
          style={{
            fontSize: '0',
            height: '0',
            left: '-100vw',
            opacity: '0',
            position: 'absolute',
            top: '-100vh',
            width: '0',
            zIndex: '-1',
          }}
          tabIndex="-1"
          type="file"
        />
        <Button
          onClick={handleClickImport}
          outline
          size="sm"
          type="button"
        >
          Import JSON ...
        </Button>
      </div>
    </form>
  );
}

ThemeForm.propTypes = {
  className: PropTypes.string,
};

ThemeForm.defaultProps = {
  className: '',
};


export default ThemeForm;
