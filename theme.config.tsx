import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "./components/logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  docsRepositoryBase: "https://github.com/BRACKETS-by-TRIAD/craftable-pro-docs",
  primaryHue: {
    light: 240,
    dark: 164,
  },
  footer: {
    text: (
      <span>
        <a href="https://meetbrackets.com/" target="_blank">
          BRACKETS by Triad s.r.o
        </a>{" "}
        © {new Date().getFullYear()}
      </span>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Craftable PRO",
    };
  },
};

export default config;
