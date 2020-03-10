import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import styles from './Examples.module.css';
import Button from '../Button';

const Examples = () => {
  const themeContext = useContext(ThemeContext);

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
      <div>
        <h2>Color ramps</h2>
        <div>
          <h3>primary</h3>
          <label>md</label>
          {' '}
          <span
            className={styles.swatch}
            style={{ backgroundColor: themeContext.colors.primary }}
          />
        </div>
      </div>
    </>
  );
};

export default Examples;
