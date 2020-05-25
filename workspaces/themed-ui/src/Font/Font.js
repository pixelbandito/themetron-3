import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled, { ThemeContext } from 'styled-components';
import { margin } from 'styled-system';
import { getModeStyles, getMinLineHeight } from '@pixelbandito/theme';
import { tagPropType } from '../prop-types';
import styles from './Font.module.css';

export const getFontStyle = ({
  color = 'default',
  contrast = '2',
  size = 'md',
  theme,
  variant: variantKey = 'default',
  weight = 'normal',
}) => {
  const {
    ratio: lineHeightRatio,
  } = getMinLineHeight({
    size: theme.fonts.sizes[size],
    space: {
      ...theme.space,
      xs: theme.space.sm,
    },
  });

  const darkModeStyle = { color: theme.colors[color][`dark-${contrast}`] };
  const lightModeStyle = { color: theme.colors[color][`light-${contrast}`] };
  const font = theme.baseFonts[variantKey] || theme.baseFonts.default;

  const fontFamilies = [
    ...(font.name ? [`"${font.name}"`] : []),
    font.fallback || 'sans-serif',
  ];

  return ({
    fontFamily: fontFamilies.join(', '),
    fontSize: theme.fonts.sizes[size],
    fontWeight: theme.fonts.weights[weight],
    lineHeight: lineHeightRatio,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme?.shared?.mode,
    }),
  });
};

const getGoogleFontLink = ({ font }) => {
  const link = document.createElement('link');
  link.id = `pxb-${font.name.replace(/ /g, '_')}`;
  link.ref = 'stylesheet';
  link.href = font.source;
  return link;
};

const useGoogleFontLink = (variantKey) => {
  const theme = useContext(ThemeContext);
  const variant = theme.baseFonts[variantKey] || theme.baseFonts.default;

  if (variant.name && variant.source) {
    if (document.querySelector(`#pxb-${variant.name.replace(/ /g, '_')}`) === null) {
      const link = getGoogleFontLink({ font: variant });
      document.head.append(link);
    }
  }
};

const Font = ({
  className,
  tag: CustomTag,
  variant: variantKey,
  ...passedProps
}) => {
  useGoogleFontLink(variantKey);

  return (
    <CustomTag
      {...passedProps}
      className={classNames(className, styles.Font)}
    />
  );
};

Font.propTypes = {
  className: PropTypes.string,
  tag: tagPropType,
  variant: PropTypes.string,
};

Font.defaultProps = {
  className: '',
  tag: 'div',
  variant: 'default',
};

const StyledFont = styled(Font)(
  props => getFontStyle(props),
  margin,
);

export const P = props => (
  <StyledFont
    className={styles.P}
    tag="p"
    {...props}
  />
);

export const Small = props => (
  <StyledFont
    size="sm"
    tag="small"
    {...props}
  />
);

export const Strong = props => (
  <StyledFont
    tag="strong"
    weight="bold"
    {...props}
  />
);

export const Em = props => (
  <StyledFont
    tag="em"
    {...props}
  />
);

export const U = props => (
  <StyledFont
    tag="u"
    {...props}
  />
);

export const I = props => (
  <StyledFont
    tag="i"
    {...props}
  />
);

export const B = props => (
  <StyledFont
    tag="b"
    weight="bold"
    {...props}
  />
);

export default StyledFont;
