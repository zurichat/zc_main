const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = (webpackConfigEnv, argv) => {
  const orgName = 'zuri'
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: 'root-config',
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true
  })

  return merge(defaultConfig, {
    //
    externals: {
      jquery: 'jQuery'
    },
    // modify the webpack config however you'd like to by adding to this object
    output: {
      // path: path.join(__dirname, '..', 'dist'), // string (default)
      // filename: "[name].js", // string (default)
      // publicPath: path.join(__dirname, 'dist', 'assets') // string
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: 'src/index.ejs',
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName
        }
      }),
      new FaviconsWebpackPlugin({
        logo: './src/favicon.png',
        mode: 'webapp',
        devMode: 'webapp',
        favicons: {
          appName: 'Zuri Chat',
          appDescription: 'Zuri Chat - Connect and Interact',
          developerName: 'Me',
          developerURL: null,
          background: '#ddd',
          theme_color: '#333',
          icons: {
            coast: false,
            yandex: false
          }
        }
      })
    ]
  })
}
