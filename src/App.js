import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components'

import './App.css';
import styles from './App.module.css';
import { getSizes } from './theme-utils.mjs';
import theme from './theme.mjs';
import Examples from './Examples';

const getNumberOrDont = (string) => {
  let number;

  try {
    number = parseInt(string, 10);

    if (isNaN(number)) {
      throw new Error('not a number');
    }
  } catch(e) {
    number = null;
  }

  return number
};

const getJsonOrDont = (string) => {
  let json;

  try {
    json = JSON.parse(string);
  } catch(e) {
    json =  {};
  }

  return json;
};

console.log({ theme });

function App() {
  const [count, setCount] = useState('1');
	const [customSizes, setCustomSizes] = useState('{}');
	const [lgCount, setLgCount] = useState('');
	const [mdSize, setMdSize] = useState('16');
	const [smCount, setSmCount] = useState('');

  const parsedFormValues = useMemo(() => {
    return {
      count: getNumberOrDont(count),
      customSizes: getJsonOrDont(customSizes),
      lgCount: getNumberOrDont(lgCount),
      mdSize: getNumberOrDont(mdSize),
      smCount: getNumberOrDont(smCount),
    };
  }, [count, customSizes, lgCount, mdSize, smCount]);

  useEffect(() => {
    console.log(parsedFormValues);

    let sizes;
    try {
      sizes = getSizes(parsedFormValues);
    } catch(e) {
      console.log(e.message);
      sizes = [];
    }
    console.log({ sizes });
  }, [parsedFormValues]);

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${styles.App}`}>
        <div className={styles.form}>
          <div className={styles.control}>
            <label
              className={styles.label}
              htmlFor="count"
            >
              count
            </label>
            <input
              className={styles.input}
              id="count"
              onChange={e => setCount(e.target.value)}
              type="number"
              value={count}
            />
          </div>
          <div className={styles.control}>
            <label
              className={styles.label}
              htmlFor="customSizes"
            >
              customSizes
            </label>
            <input
              className={styles.input}
              id="customSizes"
              value={customSizes}
              onChange={e => setCustomSizes(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label
              className={styles.label}
              htmlFor="lgCount"
            >
              lgCount
            </label>
            <input
              className={styles.input}
              id="lgCount"
              onChange={e => setLgCount(e.target.value)}
              type="number"
              value={lgCount}
            />
          </div>
          <div className={styles.control}>
            <label
              className={styles.label}
              htmlFor="mdSize"
            >
              mdSize
            </label>
            <input
              className={styles.input}
              id="mdSize"
              onChange={e => setMdSize(e.target.value)}
              type="number"
              value={mdSize}
            />
          </div>
          <div className={styles.control}>
            <label
              className={styles.label}
              htmlFor="smCount"
            >
              smCount
            </label>
            <input
              className={styles.input}
              id="smCount"
              onChange={e => setSmCount(e.target.value)}
              type="number"
              value={smCount}
            />
          </div>
        </div>
        <div className={styles.example}>
          <Examples />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
