import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components'

import './App.css';
import styles from './App.module.css';
import defaultTheme from './theme.mjs';
import ThemeForm from './ThemeForm';
import Examples from './Examples';
import GridOverlay from './GridOverlay';

function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [themePreview, setThemePreview] = useState(theme);

  const handleChangeThemePreview = useCallback((theme) => {
    setThemePreview(theme);
  }, []);

  const handleApplyThemePreview = useCallback((theme) => {
    setTheme(themePreview);
  }, [themePreview]);

  return (
    <ThemeProvider theme={theme}>
      <div className={`App ${styles.App}`}>
        <div className={styles.form}>
          <ThemeForm
            theme={theme}
            onChangeTheme={handleChangeThemePreview}
            onApplyTheme={handleApplyThemePreview}
          />
        </div>
        <div className={styles.example}>
          <div>
            <ThemeProvider theme={themePreview} >
              <Examples />
            </ThemeProvider>
            <ThemeProvider theme={{
                ...themePreview,
                shared: {
                  ...themePreview.shared,
                  mode: 'dark',
                },
              }} >
              <Examples />
            </ThemeProvider>
            <ThemeProvider theme={{
                ...themePreview,
                shared: {
                  ...themePreview.shared,
                  mode: 'light',
                },
              }} >
              <Examples />
            </ThemeProvider>
          </div>
        </div>
      </div>
      <GridOverlay />
    </ThemeProvider>
  );
}

export default App;
