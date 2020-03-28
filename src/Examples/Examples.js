import React, { useContext, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { getHexFromHexOrName, getLuminance } from '../utils/colors';
import Button from '../Button';
import ColorRamp from '../ThemeForm/ColorRamp';
import styles from './Examples.module.css';

const ColorExample = ({
  name,
  hex,
}) => {
  const safeHex = useMemo(() => getHexFromHexOrName(hex), [hex]);

  return (
    <div>
      <h3>
        <span
          className={styles.swatch}
          style={{ backgroundColor: hex }}
        />
      {name}{' '}
        <small className={styles.subtitle}>{getLuminance(safeHex).toFixed(2)}</small>
      </h3>
      <ColorRamp
        color={hex}
        contrastRatios={[7, 4.5, 3, 1.2]}
      />
    </div>
  );
};

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
        {Object.entries(themeContext.colors)
          .filter(([key]) => ['white', 'black'].indexOf(key) < 0)
          .map(([key, value]) => (
            <ColorExample
              key={key}
              name={key}
              hex={value}
            />
          ))
        }
      </div>
    </>
  );
};

export default Examples;
