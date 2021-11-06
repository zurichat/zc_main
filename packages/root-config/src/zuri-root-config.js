import { registerApplication, start, pathToActiveWhen } from "single-spa";

import { CoreApps, allPlugins } from "./applications";

CoreApps.forEach(app => {
  registerApplication({
    name: `@zuri/${app.name}`,
    app: () => System.import(`@zuri/${app.name}`),
    activeWhen: ["/"]
  });
});

start({
  urlRerouteOnly: true
});

window.addEventListener("zuri-plugin-load", () => {
  setTimeout(() => {
    allPlugins.forEach(plugin => {
      registerApplication({
        name: plugin.name,
        app: () => System.import(`@zuri/${plugin.name}`),
        activeWhen: pathToActiveWhen(`/workspace/:id/${plugin.name}`, true),
        customProps: {
          domElement: document.querySelector("#zuri-plugin-load-section")
        }
      });
    });
  }, 4000);
});
