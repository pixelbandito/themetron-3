import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import colorConvert from 'color-convert';
import FontPicker from 'font-picker-react';
import { debounce } from 'lodash-es';

import {
  getButtons,
  getColors,
  getFontFromGoogleFontApiResponse,
  getInheritedBaseColor,
  getLuminance,
  getSizes,
  spacings,
} from '@pixelbandito/theme';

import {
  Accordion,
  Button,
  Card,
  Font,
} from '@pixelbandito/themed-ui';

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
  const [roundness, setRoundness] = useState(initTheme.shared.roundness);
  const [themeForm, setThemeForm] = useState(initTheme);
  const importInputFileRef = useRef();

  // High-level form syncing
  useEffect(() => {
    onChangeTheme(themeForm);
  }, [onChangeTheme, themeForm]);

  const handleClickApply = useCallback(() => {
    onApplyTheme(themeForm);
  }, [onApplyTheme, themeForm]);

  const handleClickRevert = useCallback(() => {
    setThemeForm(initTheme);
  }, [initTheme]);

  // Import json
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

  // High-level button theme syncing
  useEffect(() => {
    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      buttons: getButtons({
        ...prevThemeForm,
      }),
    }));
  }, [themeForm.colors,  themeForm.fonts, themeForm.shared.roundness,  themeForm.space]);

  // COLORS
  const [isAddingBaseColor, setIsAddingBaseColor] = useState(false);
  const [newBaseColorName, setNewBaseColorName] = useState('');

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

  const handleDeleteBaseColor = useCallback(({ key }) => {
    setThemeForm(prevThemeForm => {
      const nextBaseColors = { ...prevThemeForm.baseColors };
      delete nextBaseColors[key];

      return ({
        ...prevThemeForm,
        baseColors: nextBaseColors,
      });
    });
  }, []);

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

  const handleClickAddBaseColor = (event) => {
    if (!newBaseColorName) {
      return;
    }

    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      baseColors: {
        ...prevThemeForm.baseColors,
        [newBaseColorName.replace(' ', '_')]: prevThemeForm.baseColors.default,
      },
    }));

    setIsAddingBaseColor(false);
    setNewBaseColorName('');
  }

  // SHARED

  // FONTS
  const [isAddingBaseFont, setIsAddingBaseFont] = useState(false);
  const [newBaseFontName, setNewBaseFontName] = useState('');

  const handleChangeFont = useCallback(({ key, value: apiResponse }) => {
    const font = getFontFromGoogleFontApiResponse({ apiResponse });

    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      baseFonts: {
        ...prevThemeForm.baseFonts,
        [key]: font,
      },
    }));
  }, []);

  const handleDeleteFont = useCallback(({ key }) => {
    setThemeForm(prevThemeForm => {
      const nextBaseFonts = { ...prevThemeForm.baseFonts };
      delete nextBaseFonts[key];

      return ({
        ...prevThemeForm,
        baseFonts: nextBaseFonts,
      });
    });
  }, []);

  const handleClickAddBaseFont = (event) => {
    if (!newBaseFontName) {
      return;
    }

    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      baseFonts: {
        ...prevThemeForm.baseFonts,
        [newBaseFontName.replace(' ', '_')]: {
          ...prevThemeForm.baseFonts.default,
        },
      },
    }));

    setIsAddingBaseFont(false);
    setNewBaseFontName('');
  }

  // SPACING
  const [spacing, setSpacing] = useState(
    Object
      .entries(spacings)
      .filter(([key, value]) => value === initTheme.space?.md)
      .map(([key, value]) => key)[0]
    ?? Object.keys(spacings)[Math.floor(Object.keys(spacings).length / 2)]
  );

  const handleChangeSpacing = useCallback(e => {
    const nextSpacing = e.target.value;
    setSpacing(nextSpacing);

    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      shared: {
        ...prevThemeForm.shared,
        spacing: nextSpacing,
      },
    }));

    setThemeForm(prevThemeForm => ({
      ...prevThemeForm,
      space: getSizes({
        count: 5,
        spacing: nextSpacing,
      }),
    }));
  }, []);

  // Roundness
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

  // RENDER

  return (
    <Font>
      <form className={classNames(className, styles.ThemeForm)}>
        <Accordion
          defaultIsOpen
          head="Shared styles"
          style={{
            borderBottomWidth: '0',
            borderRadius: '0',
          }}
        >
          <Control
            id="spacing"
            onChange={handleChangeSpacing}
            tag="select"
            value={spacing}
          >
            {Object.keys(spacings).map(key => (
              <option
                key={key}
                value={key}
              >
                {key}
              </option>
            ))}
          </Control>
          <Control
            id="roundness"
            onChange={handleChangeRoundness}
            type="number"
            min="0"
            max="10"
            step="1"
            value={`${roundness}`}
          />
        </Accordion>
        <Accordion
          defaultIsOpen
          head="Colors"
          style={{
            borderBottomWidth: '0',
            borderRadius: '0',
          }}
        >
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
                    onDelete={key !== 'primary' ? event => handleDeleteBaseColor({ key }) : undefined}
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
            <div>
              <Button
                onClick={() => setIsAddingBaseColor(true)}
                type="button"
              >
                Add another color
              </Button>
              {isAddingBaseColor && (
                <>
                  <Control
                    id="_newBaseColorName"
                    onChange={event => setNewBaseColorName(event.target.value)}
                    type="text"
                    value={newBaseColorName}
                  />
                  <Button
                    disabled={Object.keys(themeForm.baseColors).includes(newBaseColorName)}
                    onClick={handleClickAddBaseColor}
                    type="button"
                  >
                    Confirm
                  </Button>
                  {' '}
                  <Button
                    onClick={() => setIsAddingBaseColor(false)}
                    outline
                    type="button"
                  >
                    Cancel
                  </Button>
                </>
              )}
            </div>
          </section>
        </Accordion>
        <Accordion
          defaultIsOpen
          head="Fonts"
          style={{
            borderBottomWidth: '0',
            borderRadius: '0',
          }}
        >
          <section>
            {Object.entries(themeForm.baseFonts).map(([key, value], i) => {
              return (
                <div key={key}>
                  <Control
                    id={key}
                    label={key}
                    onChange={value => handleChangeFont({ key, value })}
                    onDelete={key !== 'default' ? event => handleDeleteFont({ key }) : undefined}
                    tag={FontPicker}
                    value={value.name ?? ''}
                  />
                </div>
              );
            })}
            <Button
              onClick={() => setIsAddingBaseFont(true)}
              type="button"
            >
              Add another font
            </Button>
            {isAddingBaseFont && (
              <>
                <Control
                  id="_newBaseFontName"
                  onChange={event => setNewBaseFontName(event.target.value)}
                  type="text"
                  value={newBaseFontName}
                />
                <Button
                  disabled={Object.keys(themeForm.baseFonts).includes(newBaseFontName)}
                  onClick={handleClickAddBaseFont}
                  type="button"
                >
                  Confirm
                </Button>
                {' '}
                <Button
                  onClick={() => setIsAddingBaseFont(false)}
                  outline
                  type="button"
                >
                  Cancel
                </Button>
              </>
            )}
          </section>
        </Accordion>
        <Card style={{ borderRadius: '0' }}>
          <Card.Head variant="default">
            <div className={styles.actions}>
              <Button
                onClick={handleClickRevert}
                type="button"
                level="secondary"
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
                size="sm"
                type="button"
              >
                Import JSON ...
              </Button>
            </div>
          </Card.Head>
        </Card>
      </form>
    </Font>
  );
}

ThemeForm.propTypes = {
  className: PropTypes.string,
};

ThemeForm.defaultProps = {
  className: '',
};


export default ThemeForm;
