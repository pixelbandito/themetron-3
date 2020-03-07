import React from 'react';
import styled from 'styled-components'

import { getMinLineHeight } from '../theme-utils';
import styles from './Examples.module.css';

/*
const buttons = {
	borderWidth: 1,
	roundness: 2,
	shine: 1, // Very shiny: glass, shiny: plastic, slightly shiny: paper, 0: flat
	variants: {
		default: {
			backgroundColor: colors.brand,
			color: colors.white,
			borderColor: colors.brand,
		},
	},
	sizes: {
		md: {
			paddingBottom: spacing.sm,
			paddingLeft: spacing.md,
			paddingRight: spacing.md,
			paddingTop: spacing.sm,
		}
	}
};
*/

export const getButttonStyle = ({
  outline = false,
  size = 'md',
  theme,
  variant = 'default',
}) => {
  const {
    buttons,
    inverted,
    spacing,
  } = theme;

  const {
    borderWidth,
    roundness,
    sizes,
    variants,
  } = buttons;

  const {
    backgroundColor,
    color,
    hover,
  } = variants[variant];

  let {
    fontSize,
    paddingH,
    paddingV,
  } = sizes[size];

  const {
    ratio: lineHeightRatio,
    px: lineHeightPx,
  } = getMinLineHeight({
    size: fontSize,
    spacing
  });

  return ({
    color: inverted ? backgroundColor : color,
    backgroundColor: inverted ? color : backgroundColor,
    borderColor: inverted && !outline ? color : backgroundColor,
    borderWidth,
    borderStyle: 'solid',
    borderRadius: roundness * (lineHeightPx / 2 + paddingV),
    paddingBottom: paddingV - borderWidth,
    paddingLeft: paddingH - borderWidth,
    paddingRight: paddingH - borderWidth,
    paddingTop: paddingV - borderWidth,
    fontSize: fontSize,
    lineHeight: lineHeightRatio,
    ':hover': {
      color: inverted ? hover.backgroundColor : hover.color,
      backgroundColor: inverted ? hover.color : hover.backgroundColor,
      borderColor: inverted && !outline ? hover.color : hover.backgroundColor,
    }
  })
};

const Button = styled('button')(
  ({
    outline,
    size,
    theme,
    variant,
  }) => {
    const buttonStyle = getButttonStyle({
      outline,
      size,
      theme,
      variant,
    });

    return buttonStyle;
  }
);

const Examples = () => {
  return (
    <>
      <h1 id="heading">Heading</h1>
      <Button size="sm">Button</Button>
      {' '}
      <Button>Button</Button>
      {' '}
      <Button size="lg">Button</Button>
      {' '}
      <input value="Input"></input>
      <p>
        Paragraph
      </p>
      <a href="#heading">Link</a>
      <div className={styles.card}>
        <div className={styles.cardHead}>
          Card head
        </div>
        <div className={styles.cardBody}>
          Card body
        </div>
        <div className={styles.cardFoot}>
          Card foot
        </div>
      </div>
    </>
  );
};

export default Examples;
