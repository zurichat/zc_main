import { registerApplication, start } from 'single-spa'

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: '@zuri/main',
  // app: () => System.import("@zuri/main"),
  app: () => System.import('//localhost:8080/zuri-main.js'),
  activeWhen: ['/']
})

registerApplication({
  name: '@zuri/spa-app-2',
  // app: () => System.import("@zuri/main"),
  // app: () => System.import("//localhost:8080/zuri-main.js"),
  app: () => System.import('//localhost:8082/zuri-spa-app-2.js'),
  activeWhen: ['/']
})

start({
  urlRerouteOnly: true
})
