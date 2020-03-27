import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import colorConvert from 'color-convert';
import { getButtons, getSizes } from '../theme-utils.mjs';
import Button from '../Button';
import Control from './Control';
import ContrastRatios from './ContrastRatios';
import styles from './ThemeForm.module.css';

export const getNumberOrDont = (string) => {
  let number;

  try {
    number = parseInt(string, 10);

    if (isNaN(number)) {
      throw new Error('not a number');
    }
  } catch(e) {
    number = null;
  }

  return number
};

export const getHexOrDont = string => string;

export const getJsonOrDont = (string) => {
  let json;

  try {
    json = JSON.parse(string);
  } catch(e) {
    json =  {};
  }

  return json;
};

const ThemeForm = ({
  className,
  theme: initTheme,
  onChangeTheme,
  onApplyTheme,
}) => {
  const [mdSize, setMdSize] = useState(initTheme.spacing.md);
  const [themeForm, setThemeForm] = useState(initTheme);

  useEffect(() => {
    onChangeTheme(themeForm);
  }, [onChangeTheme, themeForm]);

  const handleClickApply = useCallback(() => {
    onApplyTheme(themeForm);
  }, [onApplyTheme, themeForm]);

  const handleClickRevert = useCallback(() => {
    setThemeForm(initTheme);
  }, [initTheme]);

  // COLORS
  const safeColors = useMemo(() => {
    const safeColors =  Object.entries(themeForm.colors).reduce((result, [key, value]) => {
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

    return safeColors;
  }, [themeForm.colors]);

  const [colors, setColors] = useState(safeColors);

  useEffect(() => {
    setColors(safeColors)
  }, [safeColors]);

  const handleChangeColor = useCallback(({ event, key }) => {
    console.log({ key, value: event.target.value});

    const nextColors = {
      ...colors,
      [key]: getHexOrDont(event.target.value),
    };

    const nextTheme = {
      ...themeForm,
      colors: nextColors,
      buttons: getButtons({
        ...themeForm,
        colors: nextColors,
      }),
    };

    setThemeForm(nextTheme);
  }, [colors, themeForm]);

  // FONTS

  const [fontSizesCount, setFontSizesCount] = useState(Object.keys(initTheme.fonts.sizes).length);
  const [fontSizes, setFontSizes] = useState(initTheme.fonts.sizes);

  const handleChangeFontSize = useCallback(({ event, key }) => {
    const nextSizes = {
      ...fontSizes,
      [key]: getNumberOrDont(event.target.value),
    };

    const nextFonts = {
      ...themeForm.fonts,
      sizes: nextSizes,
    };

    const nextTheme = {
      ...themeForm,
      buttons: getButtons({
        ...themeForm,
        fonts: nextFonts,
      }),
      fonts: nextFonts,
    };

    setFontSizes(nextSizes);
    setThemeForm(nextTheme);
  }, [fontSizes, themeForm]);

  const handleChangeFontSizesCount = useCallback(e => {
    console.log({ fontSizes });
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

  const handleChangeMdSize = useCallback(e => {
    const nextMdSize = getNumberOrDont(e.target.value);
    const spacing = getSizes({ count: 5, mdSize: nextMdSize });
    setMdSize(nextMdSize);

    setThemeForm({
      ...themeForm,
      buttons: getButtons({ colors: themeForm.colors, fonts: themeForm.fonts, spacing }),
      spacing,
    });
  }, [themeForm]);

  return (
    <form className={classNames(className, styles.ThemeForm)}>
      <Control
        id="mdSize"
        onChange={handleChangeMdSize}
        type="number"
        value={`${mdSize}`}
      />
      <section>
        <h4>Semantic colors</h4>
        {Object.entries(colors).map(([key, value], i) => {
          return (
            <div key={key}>
              <Control
                id={`semanticColor-${key}`}
                key={key}
                label={key}
                onChange={event => handleChangeColor({ event, key })}
                type="color"
                value={`${value}`}
              />
              <div className={styles.contrastRatios}>
                <ContrastRatios
                  color={value}
                  colors={colors}
                />
              </div>
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
          inverted
          onClick={handleClickRevert}
          outline
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
