const path = require("path");
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  webpack: (config, { buildId, dev }) => {
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "./components/"
    );
    console.log(config.name)
    return config;
  },
  cssModules: true,
  pagesBufferLength: 2,
  maxInactiveAge: 25 * 1000,
});