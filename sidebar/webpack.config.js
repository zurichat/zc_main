const { mergeWithRules } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')
const path = require('path')

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
    output: {
      path: path.join(__dirname, '..', 'dist') // string (default)
      // filename: "[name].js", // string (default)
      // publicPath: path.join(__dirname, '..', 'dist', 'assets') // string
    },
    devServer: {
      historyApiFallback: true
      // https: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            require.resolve('css-loader', {
              paths: [require.resolve('webpack-config-single-spa')]
            }),
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('autoprefixer'), require('tailwindcss')]
                }
              }
            }
          ]
        }
      ]
    }
  })
}