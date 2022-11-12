# Styleguide link

[Zuri Master Guide](https://www.figma.com/file/srHjZ2Ztg7yOS7XDJMMX4m/Zuri-Chat-Master-Board?node-id=19%3A19322) - For typography, color palette, iconography, imagery, buttons, forms and spacing.

[FE Quality Control Docs](https://docs.google.com/document/d/1Sbq-ZC4O5477cx5cRuZKReVsdglABg7c585NAoZTHIU/edit) - For guidelines on how to contributeto the frontend.

# Styling in Zuri Main

To avoid style clashes use css modules when styling in Zuri Main
for example

```ts
// IS NOT VALID UNLESS REFERENCING A STYLE MADE AVAILABLE IN THE GLOBAL STYLESHEET
const TestComponent = () => {
  return <div style={`testComponentDiv`}></div>
}
export default TestComponent
```

```ts
// IS VALID
import style from "./styles.module.css"

const TestComponent = () => {
  return <div style={`${style.testComponentDiv}`}></div>
}
export default TestComponent
```

# Styling for plugins in Zuri Main

In the `webpack.config.js` modify to

```js
const { mergeWithRules } = require("webpack-merge")
const singleSpaDefaults = require("webpack-config-single-spa-react")

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
}

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "{REPLACE WITH APPLICATION NAME}",
    webpackConfigEnv,
    argv
  })

  return mergeWithRules(mergeRules)(defaultConfig, {
    //   OTHER WEBPACK RULES
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: "[local]--[hash:base64:5]__[name]"
                }
              }
            }
          ]
        }
      ]
    }
  })
}
```
