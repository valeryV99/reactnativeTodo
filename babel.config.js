const path = require("path");

module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          lazyImports: true,
          web: { disableImportExportTransform: true },
        },
      ],
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            src: [path.join(__dirname, "src")],
          },
        },
      ],
    ],
  };
};
