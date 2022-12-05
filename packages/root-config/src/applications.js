const PluginImportPathPre = "zuri-plugin-";
const PluginAppPathPre = "plugin-";

export const coreApps = [
  { name: "main" }
  // { name: "zurUi" },
  // { name: "utilities" }
];

export const allPlugins = [
  // Core Plugins
  {
    title: "messaging",
    name: `${PluginImportPathPre}messaging`,
    pluginPath: `${PluginAppPathPre}chat`
  },
  // { title: "marketplace", name: "marketplace" },
  // Plugins
  // { title: "sales", name: `${PluginImportPathPre}company-sales-prospects` },
  {
    title: "chessboard",
    name: `${PluginImportPathPre}chessboard`,
    pluginPath: `${PluginAppPathPre}chess`
  },
  {
    title: "music",
    name: `${PluginImportPathPre}music`,
    pluginPath: `${PluginAppPathPre}music`
  },
  {
    title: "taskManager",
    name: `${PluginImportPathPre}task-manager`,
    pluginPath: `${PluginAppPathPre}task-manager`
  }
  // { title: "deadlines", name: `${PluginImportPathPre}deadlines` },
  // { title: "goals", name: `${PluginImportPathPre}company-goals` },
  // { title: "todo", name: `${PluginImportPathPre}todo` },
  // { title: "dm", name: `${PluginImportPathPre}dm` },
  // { title: "noticeboard", name: `${PluginImportPathPre}noticeboard` },
  // { title: "companyfiles", name: `${PluginImportPathPre}companyfiles` },
  // { title: "calendar", name: `${PluginImportPathPre}calendar` },
  // { title: "expenses", name: `${PluginImportPathPre}expenses` },
  // { title: "tools", name: `${PluginImportPathPre}tools` },
  // { title: "channels", name: `${PluginImportPathPre}channels` },
  // { title: "contributions", name: `${PluginImportPathPre}contributions` }
];
