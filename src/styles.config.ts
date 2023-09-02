import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {},
  },
  media: {
    mobile: "(max-width: 640px)",
    desktop: "(min-width: 640px)",
  },
});

export const applyGlobalStyle = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  ul: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
});
