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

const currentWorkspace = localStorage.getItem("currentWorkspaceShort") || null;

function loadApp(plugin) {
  return Promise.resolve()
    .then(() => {
      return System.import(`@zuri/${plugin.name}`);
    })
    .then(app => {
      removeLoader();
      return app;
    });
}

window.addEventListener("zuri-plugin-load", () => {
  setTimeout(() => {
    const registeredAppsName = getAppNames().filter(
      appName => appName !== "@zuri/main"
    );
    if (!registeredAppsName.length) {
      allPlugins.forEach(plugin => {
        registerApplication({
          name: plugin.name,
          app: loadApp(plugin),
          activeWhen: pathToActiveWhen(`/workspace/:id/${plugin.pluginPath}`),
          customProps: {
            domElement: document.getElementById("zuri-plugin-load-section"),
            baseName: `/workspace/${currentWorkspace}/${plugin.pluginPath}`
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
              `/workspace/:id/${appName.replace("zuri-", "")}`
            ),
            customProps: {
              domElement: document.getElementById("zuri-plugin-load-section"),
              baseName: `/workspace/${currentWorkspace}/${appName.replace(
                "zuri-",
                ""
              )}`
            }
          });
        });
      });
    }
  }, 4000);
});

function removeLoader() {
  setTimeout(() => {
    const element = document.getElementById("single-spa-loader");
    element?.remove();
  }, 1000);
}
