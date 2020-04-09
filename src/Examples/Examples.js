import React from 'react';

import Button from '../Button';
import Font, { Em, H1, H2, H3, H4, P, Small, Strong } from '../Font';
import { A } from '../Link';
import styles from './Examples.module.css';

const Examples = () => {
  return (
    <>
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
        <Font contrast="lite-2" tag="span">Lower contrast text!</Font>
      </P>
      <Font tag="div">
        <A href="#heading">Link</A>
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
      </Font>
    </>
  );
};

export default Examples;
