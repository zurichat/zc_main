const { mergeWithRules } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')

const mergeRules = {
  plugins: 'replace',
  devServer: {
    static: {
      directory: 'replace'
    }
  },
  module: {
    rules: {
      test: 'match',
      include: 'replace',
      exclude: 'replace',
      use: 'replace'
    }
  }
}

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'zuri',
    projectName: 'sidebar',
    webpackConfigEnv,
    argv
  })

  return mergeWithRules(mergeRules)(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[local]--[hash:base64:5]__[name]'
                }
              }
            }
          ]
        }
      ]
    }
  })
}
