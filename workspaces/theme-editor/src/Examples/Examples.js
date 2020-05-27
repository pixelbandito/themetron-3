import React, { useContext, useMemo, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import {
  A,
  Accordion,
  Button,
  Card,
  Font,
  Em,
  H1,
  H2,
  H3,
  H4,
  P,
  Small,
  Strong,
} from '@pixelbandito/themed-ui';

import styles from './Examples.module.css';

const Examples = ({ className }) => {
  const theme = useContext(ThemeContext);
  const [buttonVariantIndex, setButtonVariantIndex] = useState(0);
  const [cardVariantIndex, setCardVariantIndex] = useState(0);
  const [fontVariantIndex, setFontVariantIndex] = useState(0);

  const availableColorVariants = useMemo(
    () => Object.keys(theme.baseColors).filter(key => !['black', 'white'].includes(key)),
    [theme.baseColors],
  );

  const availableCardVariants = useMemo(() => [...availableColorVariants, undefined], [availableColorVariants]);
  const cardVariant = availableCardVariants[cardVariantIndex];

  const handleIncrementCardVariantIndex = () => {
    setCardVariantIndex(prevButtonVariantIndex => (prevButtonVariantIndex + 1) % availableCardVariants.length);
  }

  const availableButtonVariants = useMemo(
    () => Object.keys(theme.buttons.variants),
    [theme.buttons.variants],
  );

  const buttonVariant = availableButtonVariants[buttonVariantIndex];

  const handleIncrementButtonVariantIndex = () => {
    setButtonVariantIndex(prevButtonVariantIndex => (prevButtonVariantIndex + 1) % availableButtonVariants.length);
  }

  const availableFontVariants = useMemo(() => Object.keys(theme.baseFonts), [theme.baseFonts]);
  const fontVariant = availableFontVariants[fontVariantIndex];

  const handleIncrementFontVariantIndex = () => {
    console.log('Doing it', fontVariantIndex, fontVariant);
    setFontVariantIndex(prevFontVariantIndex => (prevFontVariantIndex + 1) % availableFontVariants.length);
  }

  return (
    <div className={classNames(className, styles.Examples)}>
      <Font tag="div">
        <H1
          id="heading-1"
          mb="md"
        >
          Heading 1
        </H1>
        <H2
          id="heading-2"
          mb="md"
        >
          Heading 2
        </H2>
        <H3
          id="heading-3"
          mb="md"
        >
          Heading 3
        </H3>
        <H4
          id="heading-4"
          mb="md"
        >
          Heading 4
        </H4>
        <Button
          mb="md"
          mr="md"
          onClick={handleIncrementButtonVariantIndex}
          size="sm"
          variant={buttonVariant}
        >
          Button ({buttonVariant})
        </Button>
        {' '}
        <Button
          mb="md"
          mr="md"
          onClick={handleIncrementButtonVariantIndex}
          variant={buttonVariant}
        >
          Button ({buttonVariant})
        </Button>
        {' '}
        <Button
          mb="md"
          mr="md"
          onClick={handleIncrementButtonVariantIndex}
          size="lg"
          variant={buttonVariant}
        >
          Button ({buttonVariant})
        </Button>
        {' '}
        <input value="Input" onChange={() => {}}></input>
        <Font
          onClick={handleIncrementFontVariantIndex}
          tag="div"
          variant={fontVariant}
        >
          <H1
            mb="md"
          >
            Fonts ({fontVariant})
          </H1>
          <P
            mb="md"
            mt="md"
          >
            This paragraph has{' '}
            <Strong>strong</Strong>,{' '}
            <Em>emphasized</Em>, and{' '}
            <Small>small</Small> text in it.{' '}
          </P>
          <P
            mb="md"
            mt="md"
          >
            <Font contrast="1" tag="span">High contrast text!</Font>{' '}
            <Font contrast="2" tag="span">Medium contrast text!</Font>{' '}
            <Font contrast="3" tag="span">Lower contrast text!</Font>
          </P>
          <A href="#heading">Link</A>
        </Font>
        <Card
          mb="md"
          mt="md"
          onClick={handleIncrementCardVariantIndex}
          variant={cardVariant}
        >
          <Card.Head variant={cardVariant}>
            Card head {cardVariant && (<>({cardVariant})</>)}
          </Card.Head>
          <Card.Body variant={cardVariant}>
            Card body
          </Card.Body>
          <Card.Foot variant={cardVariant}>
            Card foot
          </Card.Foot>
        </Card>
        <Accordion
          mb="md"
          mt="md"
        >
          Accordion contents
        </Accordion>
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
    padding: theme.space.lg,
    '@media (prefers-color-scheme: dark)': !theme.shared.mode && {
      backgroundColor: theme.colors.default['dark-bg'],
    },
    '@media (prefers-color-scheme: light)': !theme.shared.mode && {
      backgroundColor: theme.colors.default['light-bg'],
    },
  })
);

export default StyledExamples;
