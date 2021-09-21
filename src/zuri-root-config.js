import { registerApplication, start } from 'single-spa'

export const pluginRoutes = [
  location => location.pathname.startsWith('/chess'),
  location => location.pathname.startsWith('/sales'),
  location => location.pathname.startsWith('/music'),
  location => location.pathname.startsWith('/deadlines'),
  location => location.pathname.startsWith('/goals'),
  location => location.pathname.startsWith('/dm'),
  location => location.pathname.startsWith('/noticeboard'),
  location => location.pathname.startsWith('/companyfiles'),
  location => location.pathname.startsWith('/calendar'),
  location => location.pathname.startsWith('/expenses'),
  location => location.pathname.startsWith('/todo')

]

registerApplication({
  name: '@zuri/topbar',
  app: () => System.import('@zuri/topbar'),
  activeWhen: ['/home', ...pluginRoutes]
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

registerApplication({
  name: '@zuri/zuri-plugin-deadlines',
  app: () => System.import('@zuri/zuri-plugin-deadlines'),
  activeWhen: [location => location.pathname.startsWith('/deadlines')]
})

registerApplication({
  name: '@zuri/zuri-plugin-company-goals',
  app: () => System.import('@zuri/zuri-plugin-company-goals'),
  activeWhen: [location => location.pathname.startsWith('/goals')]
})

registerApplication({
  name: '@zuri/zuri-plugin-todo',
  app: () => System.import('@zuri/zuri-plugin-todo'),
  activeWhen: [location => location.pathname.startsWith('/todo')]
})

registerApplication({
  name: '@zuri/zuri-plugin-dm',
  app: () => System.import('@zuri/zuri-plugin-dm'),
  activeWhen: [location => location.pathname.startsWith('/dm')]
})

registerApplication({
  name: '@zuri/zuri-plugin-noticeboard',
  app: () => System.import('@zuri/zuri-plugin-noticeboard'),
  activeWhen: [location => location.pathname.startsWith('/noticeboard')]
})

registerApplication({
  name: '@zuri/zuri-plugin-companyfiles',
  app: () => System.import('@zuri/zuri-plugin-companyfiles'),
  activeWhen: [location => location.pathname.startsWith('/companyfiles')]
})

registerApplication({
  name: '@zuri/zuri-plugin-calendar',
  app: () => System.import('@zuri/zuri-plugin-calendar'),
  activeWhen: [location => location.pathname.startsWith('/calendar')]
})

registerApplication({
  name: '@zuri/zuri-plugin-expenses',
  app: () => System.import('@zuri/zuri-plugin-expenses'),
  activeWhen: [location => location.pathname.startsWith('/expenses')]
})

start({
  urlRerouteOnly: true
})
