import React, { useContext, useMemo, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Card from '../Card';
import Font, { Em, H1, H2, H3, H4, P, Small, Strong } from '../Font';
import { A } from '../Link';
import styles from './Examples.module.css';

const Examples = ({ className }) => {
  const theme = useContext(ThemeContext);
  const [buttonVariantIndex, setButtonVariantIndex] = useState(0);
  const [cardVariantIndex, setCardVariantIndex] = useState(0);

  const availableVariants = useMemo(
    () => Object.keys(theme.baseColors).filter(key => !['black', 'white'].includes(key)),
    [theme.baseColors],
  );

  const handleIncrementButtonVariantIndex = () => {
    setButtonVariantIndex(prevButtonVariantIndex => (prevButtonVariantIndex + 1) % availableVariants.length);
  }

  const handleIncrementCardVariantIndex = () => {
    setCardVariantIndex(prevButtonVariantIndex => (prevButtonVariantIndex + 1) % availableVariants.length);
  }

  const buttonVariant = availableVariants[buttonVariantIndex];
  const cardVariant = availableVariants[cardVariantIndex];

  return (
    <div className={classNames(className, styles.Examples)}>
      <A href="#heading">Link</A>
      <H1 id="heading">Heading 1</H1>
      <H2 id="heading">Heading 2</H2>
      <H3 id="heading">Heading 3</H3>
      <H4 id="heading">Heading 4</H4>
      <Button
        onClick={handleIncrementButtonVariantIndex}
        size="sm"
        variant={buttonVariant}
      >
        Button ({buttonVariant})
      </Button>
      {' '}
      <Button
        onClick={handleIncrementButtonVariantIndex}
        variant={buttonVariant}
      >
        Button ({buttonVariant})
      </Button>
      {' '}
      <Button
        onClick={handleIncrementButtonVariantIndex}
        size="lg"
        variant={buttonVariant}
      >
        Button ({buttonVariant})
      </Button>
      {' '}
      <input value="Input" onChange={() => {}}></input>
      <P>
        This paragraph has <Strong>strong</Strong>, <Em>emphasized</Em>, and <Small>small</Small> text in it.
      </P>
      <P>
        <Font contrast="light-2" tag="span">Lower contrast text!</Font>
      </P>
      <Font tag="div">
        <A href="#heading">Link</A>
        <Card
          onClick={handleIncrementCardVariantIndex}
          variant={cardVariant}
        >
          <Card.Head variant={cardVariant}>
            Card head ({cardVariant})
          </Card.Head>
          <Card.Body variant={cardVariant}>
            Card body
          </Card.Body>
          <Card.Foot variant={cardVariant}>
            Card foot
          </Card.Foot>
        </Card>
      </Font>
    </div>
  );
};

Examples.propTypes = {
  className: PropTypes.string,
};

Examples.defaultProps = {
  className: '',
};

const StyledExamples = styled(Examples)(
  ({
    theme,
  }) => ({
    backgroundColor: (theme.shared.mode === 'dark' && theme.colors.default['dark-bg']) || theme.colors.default['light-bg'] ,
    padding: theme.spacing.lg,
    '@media (prefers-color-scheme: dark)': !theme.shared.mode && {
      backgroundColor: theme.colors.default['dark-bg'],
    },
    '@media (prefers-color-scheme: light)': !theme.shared.mode && {
      backgroundColor: theme.colors.default['light-bg'],
    },
  })
);

export default StyledExamples;
