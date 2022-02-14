import { css } from "@emotion/react";

const dark = () => css`
  :root {
    --main-bg-color: brown;
  }
`;

const light = () => css`
  :root {
    --main-bg-color: hotpink;
  }
`;

const setTheme = (theme: "light" | "dark") => (theme === "dark" ? dark : light);

export default setTheme;
