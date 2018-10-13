const path = require("path");

module.exports = {
  webpack: (config, { buildId, dev }) => {
    config.resolve.alias["components"] = path.resolve(
      __dirname,
      "./components/"
    );
    return config;
  }
};
