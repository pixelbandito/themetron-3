export const getModeStyles = ({ mode, lightModeStyle, darkModeStyle }) => ({
  ...(mode === 'dark' ? darkModeStyle : lightModeStyle),
  '@media (prefers-color-scheme: light)': !mode && {
    ...lightModeStyle,
  },
  '@media (prefers-color-scheme: dark)': !mode && {
    ...darkModeStyle,
  },
});

export default {
  getModeStyles,
};
