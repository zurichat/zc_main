const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "main",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    resolve: {
      fallback: {
        fs: false,
        tls: false,
        net: false,
        path: false,
        zlib: false,
        http: false,
        https: false,
        stream: false,
        crypto: false,
        tty: false,
      },
    },
    module: {
      rules: [
        {
          test: /\.ya?ml$/,
          type: "json", // Required by Webpack v4
          use: "yaml-loader",
        },
        {
          test: /\.apk$/,
          exclude: [
            path.resolve(__dirname, "./src/pages/download/apk/appRelease"),
          ],
        },
      ],
    },
    plugins: [
      // fix "process is not defined" error:
      // (do "npm install process" before running the build)
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(dotenv.config().parsed),
      }),
    ],
  });
};
