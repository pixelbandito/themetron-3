import React, { useContext, useMemo, useState } from 'react';
import { ThemeContext } from 'styled-components';

import { getHexFromHexOrName, getLuminance } from '../utils/colors';
import Button from '../Button';
import ColorRamp from '../ThemeForm/ColorRamp';
import ColorViz from '../ThemeForm/ColorViz';
import styles from './Examples.module.css';

const ColorExample = ({
  name,
  hex,
  mode,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const safeHex = useMemo(() => getHexFromHexOrName(hex), [hex]);

  return (
    <div>
      <h3>
        <input
          checked={!!isExpanded}
          onChange={event => setIsExpanded(event.target.checked)}
          type="checkbox"
          style={{ marginRight: '1rem' }}
        />
        <span
          className={styles.swatch}
          style={{ backgroundColor: hex }}
        />
      {name}{' '}
        <small className={styles.subtitle}>{getLuminance(safeHex).toFixed(2)}</small>
      </h3>
      <ColorRamp
        color={hex}
        contrastRatios={[7, 4.5, 2]}
        luminances={[0.0724, 0.0999, 0.1818, 0.2122, 0.3604, 0.4633]}
        mode={mode}
      />
      <ColorRamp
        color={hex}
        contrastRatios={[7, 4.5, 2]}
        mode={mode}
      />
      {/*
        contrastRatios={[7, 4.5, 1]}
        luminances={[0.0086, 0.0999, 0.1818, 0.2122, 0.3604, 1] : undefined}
        luminances={[0.0724, 0.0999, 0.1818, 0.2122, 0.3604, 0.4633]}
        luminances={safeHex === '#ffffff' ? [0.0194, 0.1046, 0.1812, 0.2195, 0.3564, 0.6939] : undefined}
      */}
      {isExpanded && (
        <div style={{ margin: '0.5rem 0' }}>
          <ColorViz color={hex} />
        </div>
      )}
    </div>
  );
};

const Examples = () => {
  const [mode, setColorMode] = useState('hsl');
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <div>
        Pick a color mode:{' '}
        <select value={mode.toUpperCase()} onChange={(event) => setColorMode(event.target.value.toLowerCase())}>
          <option>HSL</option>
          <option>HSV</option>
          <option>LAB</option>
        </select>
      </div>
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
          .filter(([key]) => true || ['primary', 'neutral'].indexOf(key) >= 0)
          .map(([key, value]) => (
            <ColorExample
              key={key}
              name={key}
              hex={value}
              mode={mode}
            />
          ))
        }
      </div>
    </>
  );
};

export default Examples;
