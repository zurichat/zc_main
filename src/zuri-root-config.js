import { registerApplication, start } from 'single-spa'

// registerApplication({
//   name: "@single-spa/welcome",
// app: () => System.import("https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"),
//   activeWhen: ["/"],
// });

registerApplication({
  name: '@zuri/topbar',
  app: () => System.import('@zuri/topbar'),
  activeWhen: ['/']
})
registerApplication({
  name: '@zuri/sidebar',
  app: () => System.import('@zuri/sidebar'),
  activeWhen: ['/']
})
registerApplication({
  name: '@zuri/control',
  app: () => System.import('@zuri/control'),
  activeWhen: ['/']
})

// PLUGINS HERE
registerApplication({
  name: '@zuri/zuri-plugin-chessboard',
  app: () => System.import('@zuri/zuri-plugin-chessboard'),
  activeWhen: [location => location.pathname.startsWith('/chess')]
})

start({
  urlRerouteOnly: true
})
