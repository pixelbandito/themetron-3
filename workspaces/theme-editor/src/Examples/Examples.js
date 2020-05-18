import React, { useContext, useMemo, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Accordion, Card } from '@pixelbandito/themed-ui-2';
import Button from '../Button';
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

  const availableCardVariants = useMemo(() => [...availableVariants, undefined], [availableVariants]);

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

  return (
    <div className={classNames(className, styles.Examples)}>
      <A href="#heading">Link</A>
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
      <P
        mb="md"
        mt="md"
      >
        This paragraph has <Strong>strong</Strong>, <Em>emphasized</Em>, and <Small>small</Small> text in it.
      </P>
      <P
        mb="md"
        mt="md"
      >
        <Font contrast="1" tag="span">High contrast text!</Font>{' '}
        <Font contrast="2" tag="span">Medium contrast text!</Font>{' '}
        <Font contrast="3" tag="span">Lower contrast text!</Font>
      </P>
      <Font tag="div">
        <A href="#heading">Link</A>
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
