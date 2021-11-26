import {
  registerApplication,
  start,
  pathToActiveWhen,
  unregisterApplication,
  getAppNames
} from "single-spa";

import { coreApps, allPlugins } from "./applications";

coreApps.forEach(app => {
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
    const registeredAppsName = getAppNames().filter(
      appName => appName !== "@zuri/control"
    );
    if (!registeredAppsName.length) {
      allPlugins.forEach(plugin => {
        registerApplication({
          name: plugin.name,
          app: () => System.import(`@zuri/${plugin.name}`),
          activeWhen: pathToActiveWhen(
            `/workspace/:id/${plugin.pluginPath}`,
            true
          ),
          customProps: {
            domElement: document.getElementById("zuri-plugin-load-section")
          }
        });
      });
    } else {
      registeredAppsName.forEach(appName => {
        unregisterApplication(appName).then(() => {
          registerApplication({
            name: appName,
            app: () => System.import(`@zuri/${appName}`),
            activeWhen: pathToActiveWhen(
              `/workspace/:id/${appName.replace("zuri-", "")}`,
              true
            ),
            customProps: {
              domElement: document.getElementById("zuri-plugin-load-section")
            }
          });
        });
      });
    }
  }, 4000);
});
