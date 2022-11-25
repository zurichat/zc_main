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

//I added this code
let workSpaceIds = JSON.parse(localStorage.getItem("currentWorkspace"));
// End of code
// const currentWorkspace = localStorage.getItem("currentWorkspace") || null;
const currentWorkspace = workSpaceIds.short_id;

window.addEventListener("zuri-plugin-load", () => {
  setTimeout(() => {
    const registeredAppsName = getAppNames().filter(
      appName => appName !== "@zuri/main"
    );
    if (!registeredAppsName.length) {
      allPlugins.forEach(plugin => {
        registerApplication({
          name: plugin.name,
          app: () => System.import(`@zuri/${plugin.name}`),
          activeWhen: pathToActiveWhen(`/workspace/:id/${plugin.pluginPath}`),
          customProps: {
            domElement: document.getElementById("zuri-plugin-load-section"),

            baseName: `/workspace/${currentWorkspace}/${plugin.pluginPath}`
            // baseName: `/workspace/${localStorage.getItem("currentWorkspace")}/${
            //   plugin.pluginPath
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
            // baseName: `/workspace/${localStorage.getItem(
            //   "currentWorkspace"
            // )}/${appName.replace("zuri-", "")}`
          });
        });
      });
    }
  }, 4000);
});
