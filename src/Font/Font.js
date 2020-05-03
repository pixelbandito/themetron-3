import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

import { getModeStyles } from '../component-utils';
import { getMinLineHeight } from '../theme-utils';
import { tagPropType } from '../prop-types';
import styles from './Font.module.css';

export const getFontStyle = ({
  color = 'default',
  contrast = '2',
  family = 'sansSerif',
  size = 'md',
  weight = 'normal',
  theme,
}) => {
  const {
    ratio: lineHeightRatio,
  } = getMinLineHeight({
    size: theme.fonts.sizes[size],
    spacing: {
      ...theme.spacing,
      xs: theme.spacing.sm,
    },
  });

  const darkModeStyle = { color: theme.colors[color][`dark-${contrast}`] };
  const lightModeStyle = { color: theme.colors[color][`light-${contrast}`] };

  return ({
    fontFamily: theme.fonts[family],
    fontSize: theme.fonts.sizes[size],
    fontWeight: theme.fonts.weights[weight],
    lineHeight: lineHeightRatio,
    ...getModeStyles({
      darkModeStyle,
      lightModeStyle,
      mode: theme?.shared?.mode,
    }),
  })
};

const Font = ({
  className,
  tag: CustomTag,
  ...passedProps
}) => (
  <CustomTag
    {...passedProps}
    className={classNames(className, styles.Font)}
  />
);

Font.propTypes = {
  className: PropTypes.string,
  tag: tagPropType,
};

Font.defaultProps = {
  className: '',
  tag: 'div',
};

const StyledFont = styled(Font)(
  ({
    color,
    contrast,
    family,
    size,
    theme,
    weight,
  }) => getFontStyle({
    color,
    contrast,
    family,
    size,
    theme,
    weight,
  }),
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
