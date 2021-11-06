const PluginPre = "zuri-plugin-";

export const CoreApps = [
  { name: "control" }
  // { name: "zurUi" },
  // { name: "utilities" }
];

export const allPlugins = [
  { title: "marketplace", name: "marketplace" },
  // Plugins
  { title: "sales", name: `${PluginPre}company-sales-prospects` },
  { title: "chessboard", name: `${PluginPre}chessboard` },
  { title: "music", name: `${PluginPre}music` },
  { title: "deadlines", name: `${PluginPre}deadlines` },
  { title: "goals", name: `${PluginPre}company-goals` },
  { title: "todo", name: `${PluginPre}todo` },
  { title: "dm", name: `${PluginPre}dm` },
  { title: "noticeboard", name: `${PluginPre}noticeboard` },
  { title: "companyfiles", name: `${PluginPre}companyfiles` },
  { title: "calendar", name: `${PluginPre}calendar` },
  { title: "expenses", name: `${PluginPre}expenses` },
  { title: "tools", name: `${PluginPre}tools` },
  { title: "channels", name: `${PluginPre}channels` },
  { title: "contributions", name: `${PluginPre}contributions` }
];

export default { allPlugins, CoreApps };
