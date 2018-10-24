const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  distDir: 'out',
  webpack: (config, { buildId, dev }) => {
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "./components/"
    );
    return config;
  },
});

