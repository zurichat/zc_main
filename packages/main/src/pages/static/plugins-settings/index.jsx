import React from "react";
import { Footer, TopNavigationBar } from "../../../components";
import style from "./index.module.css";
import FeatureRow from "./FeatureRow";
import { pluginData } from "./pluginData";

const PluginSettings = () => {
  const features = pluginData.map(feature => (
    <FeatureRow
      key={feature.id}
      src={feature.src}
      alt="things"
      pContent1={feature.title}
      h2Content={feature.headline}
      pContent2={feature.description}
      href="/signup"
      aContent={feature.link}
    />
  ));

  return (
    <>
      <TopNavigationBar />
      <div className={`${style.homepage}`}>
        <h1 className={`${style.descp}`}>Add apps, get work done!</h1>
        <div className={`${style.features_wrap}`}>
          <div className={`${style.features}`}>{features}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PluginSettings;
