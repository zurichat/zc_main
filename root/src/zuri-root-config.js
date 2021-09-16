import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@zuri/main",
  // app: () => System.import("@zuri/main"),
  app: () => System.import("//localhost:8080/zuri-main.js"),
  // app: () => System.import("//pidoxy-react-firebase.netlify.app"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
