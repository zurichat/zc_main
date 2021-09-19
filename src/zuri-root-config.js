import { registerApplication, start } from 'single-spa'

const pluginRoutes = [
  location => location.pathname.startsWith('/chess'),
  location => location.pathname.startsWith('/sales'),
  location => location.pathname.startsWith('/music')
]

registerApplication({
  name: '@zuri/topbar',
  app: () => System.import('@zuri/topbar'),
  activeWhen: ['/']
})
registerApplication({
  name: '@zuri/sidebar',
  app: () => System.import('@zuri/sidebar'),
  activeWhen: ['/home', ...pluginRoutes]
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

registerApplication({
  name: '@zuri/zuri-plugin-company-sales-prospects',
  app: () => System.import('@zuri/zuri-plugin-company-sales-prospects'),
  activeWhen: [location => location.pathname.startsWith('/sales')]
})

registerApplication({
  name: '@zuri/zuri-plugin-music',
  app: () => System.import('@zuri/zuri-plugin-music'),
  activeWhen: [location => location.pathname.startsWith('/music')]
})

start({
  urlRerouteOnly: true
})
