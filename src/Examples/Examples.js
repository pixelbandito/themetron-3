import React, { useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';

import { getLuminance } from '../utils/colors';
import Button from '../Button';
import Swatch from '../Swatch';
import styles from './Examples.module.css';

const ColorExample = ({
  name,
  value,
}) => {
  return (
    <div>
      <h3>
        <span
          className={styles.swatch}
          style={{ backgroundColor: value.base }}
        />
      {name}{' '}
        <small className={styles.subtitle}>{getLuminance(value.base).toFixed(2)}</small>
      </h3>
      <div className={styles.ramp}>
        {
          Object.entries(value)
          .sort(([,hexA], [,hexB]) => getLuminance(hexA) - getLuminance(hexB))
          .filter(([key]) => key !== 'base')
          .map(([key, hex], i) => (
            <Swatch
              key={key}
              className={styles.rampSwatch}
              color={getLuminance(hex) > 0.5 ? value['dark-bg'] : value['lite-bg']}
              backgroundColor={hex}
            >
              {key}
            </Swatch>
          ))
        }
      </div>
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
      {/*
        <div>
          <h2>Color ramps</h2>
          {Object.entries(themeContext.colors)
            .filter(([key]) => ['white', 'black'].indexOf(key) < 0)
            .map(([key, value]) => (
              <ColorExample
                key={key}
                name={key}
                value={value}
              />
            ))
          }
        </div>
      */}
    </>
  );
};

export default Examples;
