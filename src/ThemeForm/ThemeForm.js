import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import colorConvert from 'color-convert';
import { debounce } from 'lodash-es';
import { getButtons, getColors, getInheritedBaseColor, getSizes } from '../theme-utils.mjs';
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
      // When base colors inherit from each other, this resolves to a hex code or css color name
      let safeValue = getInheritedBaseColor({
        baseColors: themeForm.baseColors,
        unsafeColor: value,
      });

      try {
        safeValue = colorConvert.keyword.hex(safeValue).toLowerCase();
      } catch(e) {
        safeValue = safeValue[0] === '#' ? safeValue.substr(1) : value;
      }

      return {
        ...result,
        [key]: `#${safeValue}`,
      }
    }, {});

    return baseColors;
  }, [themeForm.baseColors]);

  const handleChangeBaseColorHex = useCallback(({ value, key }) => {
    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      baseColors: {
        ...prevThemeForm.baseColors,
        [key]: getHexOrDont(value)
      },
    }));
  }, []);

  useEffect(() => {
    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      colors: getColors({
        ...prevThemeForm,
      }),
    }));
  }, [safeBaseColors]);


  const debouncedHandleChangeBaseColorHex = debounce(handleChangeBaseColorHex, 100);

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
        <h4>Neutral colors</h4>
        {safeBaseColors.white && (
          <Control
            id="white"
            label="white"
            onChange={event => debouncedHandleChangeBaseColorHex({ value: event.target.value, key: 'white' })}
            type="color"
            value={safeBaseColors.white}
          />
        )}
        {safeBaseColors.black && (
          <Control
            id="black"
            label="black"
            onChange={event => debouncedHandleChangeBaseColorHex({ value: event.target.value, key: 'black' })}
            type="color"
            value={safeBaseColors.black}
          />
        )}
        {themeForm.colors.default && (
          <div className={styles.swatches}>
            {
              Object.entries(themeForm.colors.default)
              .sort(([variantKeyA ,hexA], [variantKeyB ,hexB]) => variantKeyB.charCodeAt(0) + getLuminance(hexB) - variantKeyA.charCodeAt(0) - getLuminance(hexA))
              .filter(([variantKey]) => variantKey !== 'base')
              .map(([variantKey, hex], i) => (
                <Swatch
                  key={variantKey}
                  className={styles.swatch}
                  color={
                    getLuminance(hex) > 0.5 ?
                      themeForm.colors.default['dark-bg'] :
                      themeForm.colors.default['light-bg']
                  }
                  backgroundColor={hex}
                >
                  {variantKey}
                </Swatch>
              ))
            }
          </div>
        )}
      </section>
      <section>
        <h4>Semantic colors</h4>
        {Object.entries(themeForm.colors).filter(([key, value]) => key !== 'default').map(([key, value], i) => {
          return (
            <div key={key}>
              <Control
                id={`semanticColor-${key}`}
                key={key}
                label={key}
                onChange={event => debouncedHandleChangeBaseColorHex({ value: event.target.value, key })}
                type="color"
                value={`${value.base}`}
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
                            themeForm.colors[key]['light-bg']
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
