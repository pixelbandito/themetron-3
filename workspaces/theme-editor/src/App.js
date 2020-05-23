import React, { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import classNames from 'classnames';

import { defaultTheme } from '@pixelbandito/theme';

import './App.css';
import styles from './App.module.css';
import ThemeForm from './ThemeForm';
import Examples from './Examples';
import GridOverlay from './GridOverlay';

function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [themePreview, setThemePreview] = useState(theme);
  const [sidebarIsExpanded, setSidebarIsExpanded] = useState(true);

  const handleChangeThemePreview = useCallback((theme) => {
    setThemePreview(theme);
  }, []);

  const handleApplyThemePreview = useCallback((theme) => {
    setTheme(themePreview);
  }, [themePreview]);

  return (
    <ThemeProvider theme={theme}>
      <div className={classNames('App', styles.App, {
        [styles.withSidebarExpanded]: sidebarIsExpanded,
      })}>
        <div className={styles.sidebar}>
          <div className={styles.form}>
            <ThemeForm
              theme={theme}
              onChangeTheme={handleChangeThemePreview}
              onApplyTheme={handleApplyThemePreview}
            />
          </div>
          <button
            className={styles.sideBarToggleStripe}
            onClick={() => setSidebarIsExpanded(prev => !prev)}
            type="button"
            style={{
              backgroundColor: theme.colors.default['dark-1'],
            }}
          />
          <button
            className={styles.sideBarToggleButton}
            onClick={() => setSidebarIsExpanded(prev => !prev)}
            type="button"
            style={{
              borderColor: theme.colors.default['dark-1'],
              color: theme.colors.default['dark-3']
            }}
          >
            ↔
          </button>
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
