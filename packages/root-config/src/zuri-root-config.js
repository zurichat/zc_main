import { registerApplication, start } from "single-spa";

// export const pluginRoutes = [
//   location => location.pathname.startsWith("/chess"),
//   location => location.pathname.startsWith("/music"),
//   location => location.pathname.startsWith("/sales"),
//   location => location.pathname.startsWith("/deadlines"),
//   location => location.pathname.startsWith("/goals"),
//   location => location.pathname.startsWith("/todo"),
//   location => location.pathname.startsWith("/dm"),
//   location => location.pathname.startsWith("/noticeboard"),
//   location => location.pathname.startsWith("/companyfiles"),
//   location => location.pathname.startsWith("/calendar"),
//   location => location.pathname.startsWith("/expenses"),
//   location => location.pathname.startsWith("/tools"),
//   location => location.pathname.startsWith("/channels"),
//   location => location.pathname.startsWith("/contributions"),

//   // MarketPlace Plugin
//   location => location.pathname.startsWith("/marketplace")
// ];

registerApplication({
  name: "@zuri/control",
  app: () => System.import("@zuri/control"),
  activeWhen: ["/"]
});

// registerApplication({
//   name: "@zuri/sidebar",
//   app: () => System.import("@zuri/sidebar"),
//   activeWhen: "/workspace"
// });

// registerApplication({
//   name: "@zuri/topbar",
//   app: () => System.import("@zuri/topbar"),
//   activeWhen: "/workspace"
// });

// registerApplication({
//   name: "@zuri/zuriUi",
//   app: () => System.import("@zuri/zuri-ui"),
//   activeWhen: ["/home", ...pluginRoutes]
// })

// registerApplication({
//   name: "@zuri/utilities",
//   app: () => System.import("@zuri/utilities"),
//   activeWhen: ["/"]
// })

// PLUGINS HERE
registerApplication({
  name: "@zuri/zuri-plugin-chessboard",
  app: () => System.import("@zuri/zuri-plugin-chessboard"),
  activeWhen: [location => location.pathname.startsWith("/chess")]
});

registerApplication({
  name: "@zuri/zuri-plugin-company-sales-prospects",
  app: () => System.import("@zuri/zuri-plugin-company-sales-prospects"),
  activeWhen: [location => location.pathname.startsWith("/sales")]
});

registerApplication({
  name: "@zuri/zuri-plugin-music",
  app: () => System.import("@zuri/zuri-plugin-music"),
  activeWhen: [location => location.pathname.startsWith("/music")]
});

registerApplication({
  name: "@zuri/zuri-plugin-deadlines",
  app: () => System.import("@zuri/zuri-plugin-deadlines"),
  activeWhen: [location => location.pathname.startsWith("/deadlines")]
});

registerApplication({
  name: "@zuri/zuri-plugin-company-goals",
  app: () => System.import("@zuri/zuri-plugin-company-goals"),
  activeWhen: [location => location.pathname.startsWith("/goals")]
});

registerApplication({
  name: "@zuri/zuri-plugin-todo",
  app: () => System.import("@zuri/zuri-plugin-todo"),
  activeWhen: [location => location.pathname.startsWith("/todo")]
});

registerApplication({
  name: "@zuri/zuri-plugin-dm",
  app: () => System.import("@zuri/zuri-plugin-dm"),
  activeWhen: [location => location.pathname.startsWith("/dm")]
});

registerApplication({
  name: "@zuri/zuri-plugin-noticeboard",
  app: () => System.import("@zuri/zuri-plugin-noticeboard"),
  activeWhen: [location => location.pathname.startsWith("/noticeboard")]
});

registerApplication({
  name: "@zuri/zuri-plugin-companyfiles",
  app: () => System.import("@zuri/zuri-plugin-companyfiles"),
  activeWhen: [location => location.pathname.startsWith("/companyfiles")]
});

registerApplication({
  name: "@zuri/zuri-plugin-calendar",
  app: () => System.import("@zuri/zuri-plugin-calendar"),
  activeWhen: [location => location.pathname.startsWith("/calendar")]
});

registerApplication({
  name: "@zuri/zuri-plugin-expenses",
  app: () => System.import("@zuri/zuri-plugin-expenses"),
  activeWhen: [location => location.pathname.startsWith("/expenses")]
});

registerApplication({
  name: "@zuri/zuri-plugin-tools",
  app: () => System.import("@zuri/zuri-plugin-tools"),
  activeWhen: [location => location.pathname.startsWith("/tools")]
});

registerApplication({
  name: "@zuri/zuri-plugin-channels",
  app: () => System.import("@zuri/zuri-plugin-channels"),
  activeWhen: [location => location.pathname.startsWith("/channels")]
});

registerApplication({
  name: "@zuri/zuri-plugin-contributions",
  app: () => System.import("@zuri/zuri-plugin-contributions"),
  activeWhen: [location => location.pathname.startsWith("/contributions")]
});
//Bots go here

// MarketPlace Plugin
registerApplication({
  name: "@zuri/marketplace",
  app: () => System.import("@zuri/marketplace"),
  activeWhen: [location => location.pathname.startsWith("/marketplace")]
});

start({
  urlRerouteOnly: true
});
