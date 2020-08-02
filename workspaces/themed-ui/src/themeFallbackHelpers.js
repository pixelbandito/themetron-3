import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { defaultTheme } from '@pixelbandito/theme';

export const useThemeWithFallback = () => {
  const theme = useContext(ThemeContext);
  return theme || defaultTheme;
};

export const withThemeFallback = (Component) => {
  const ComponentWithThemeFallback = ({
    forwardedRef, // eslint-disable-line react/prop-types
    theme: passedTheme,
    ...passedProps
  }) => {
    const contextTheme = useThemeWithFallback();
    const theme = passedTheme || contextTheme;

    if (!contextTheme) {
      return (
        <ThemeProvider value={theme}>
          <Component
            {...passedProps}
            ref={forwardedRef}
            theme={theme}
          />
        </ThemeProvider>
      );
    }

    return (
      <Component
        {...passedProps}
        ref={forwardedRef}
        theme={theme}
      />
    );
  };

  ComponentWithThemeFallback.displayName = `withThemeFallback(${Component.displayName})`;
  ComponentWithThemeFallback.propTypes = { theme: PropTypes.shape() };
  ComponentWithThemeFallback.defaultProps = { theme: undefined };

  return forwardRef((props, ref) => <ComponentWithThemeFallback forwardedRef={ref} {...props} />);
};
