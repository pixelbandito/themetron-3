import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import Card from '../Card';
import Font, { Em, H1, H2, H3, H4, P, Small, Strong } from '../Font';
import { A } from '../Link';
import styles from './Examples.module.css';

const Examples = ({ className }) => {
  return (
    <div className={classNames(className, styles.Examples)}>
      <A href="#heading">Link</A>
      <H1 id="heading">Heading 1</H1>
      <H2 id="heading">Heading 2</H2>
      <H3 id="heading">Heading 3</H3>
      <H4 id="heading">Heading 4</H4>
      <Button size="sm">Button</Button>
      {' '}
      <Button>Button</Button>
      {' '}
      <Button size="lg">Button</Button>
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
        <Card>
          <Card.Head>
            Card head
          </Card.Head>
          <Card.Body>
            Card body
          </Card.Body>
          <Card.Foot>
            Card foot
          </Card.Foot>
        </Card>
        <br/>
        <Card variant="info">
          <Card.Head variant="info">
            Card head
          </Card.Head>
          <Card.Body variant="info">
            Card body
          </Card.Body>
          <Card.Foot variant="info">
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
