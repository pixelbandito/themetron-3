import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { tagPropType } from '../../prop-types';
import { withThemeFallback } from '../../themeFallbackHelpers';
import Font, { getFontStyle, WithFontVariant } from '../Font';
import styles from './Heading.module.css';

export const getHeadingFontStyle = ({
  level = 1,
  ...props
}) => {
  const levels = {
    1: {
      contrast: '3',
      size: 'xl',
      weight: 'normal',
    },
    2: {
      contrast: '3',
      size: 'lg',
      weight: 'normal',
    },
    3: {
      contrast: '3',
      size: 'md',
      weight: 'bold',
    },
    4: {
      contrast: '2',
      size: 'sm',
      weight: 'bold',
    },
  };

  return {
    ...getFontStyle({
      ...levels[`${level}`],
      ...props,
    }),
  };
};

const Heading = ({
  className,
  level,
  tag: CustomTag,
  ...passedProps
}) => {
  const Tag = useMemo(() => {
    if (CustomTag) {
      return CustomTag;
    }

    return `h${level}`;
  }, [CustomTag, level]);

  return (
    <Font
      {...passedProps}
      className={classNames(className, styles.Heading)}
      tag={Tag}
    />
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tag: tagPropType,
};

Heading.defaultProps = {
  className: '',
  level: 1,
  tag: null,
};

const StyledHeading = WithFontVariant(styled(Heading)(
  props => getHeadingFontStyle(props),
));

export const H1 = props => <StyledHeading {...props} level={1} />;
export const H2 = props => <StyledHeading {...props} level={2} />;
export const H3 = props => <StyledHeading {...props} level={3} />;
export const H4 = props => <StyledHeading {...props} level={4} />;

export default withThemeFallback(StyledHeading);
