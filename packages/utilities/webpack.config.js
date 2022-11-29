/* eslint-env node */
import Dotenv from "dotenv-webpack";
import { findUpSync } from "find-up";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import singleSpaDefaults from "webpack-config-single-spa-react";
import { mergeWithRules } from "webpack-merge";

const mergeRules = {
  plugins: "replace",
  devServer: {
    static: {
      directory: "replace"
    }
  },
  module: {
    rules: {
      test: "match",
      include: "replace",
      exclude: "replace",
      use: "replace"
    }
  }
};
const findEnv = () => findUpSync(process.env.ENV_FILE || ".env");
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "utilities",
    webpackConfigEnv,
    argv
  });

  return mergeWithRules(mergeRules)(defaultConfig, {
    output: {
      path: join(__dirname, "..", "..", "dist")
    },
    plugins: [
      new Dotenv({
        path: findEnv()
      })
    ],
    module: {
      rules: [
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false
          }
        }
      ]
    }
  });
};
