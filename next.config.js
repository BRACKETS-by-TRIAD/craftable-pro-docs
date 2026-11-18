const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  output: "export",
  // Emit each route as <route>/index.html so plain static hosts (nginx) serve
  // directories cleanly instead of shadowing <route>.html with a <route>/ dir.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
});
