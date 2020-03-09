import React from 'react';
import styles from './Examples.module.css';
import Button from '../Button';

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
      <input value="Input" onChange={() => {}}></input>
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
