import React from "react";
import Emoji from "./Settings/components/Emoji.js";
import Zuribot from "./Settings/components/Zuribot";
import WorkSpaceIconTab from "./Settings/components/WorkSpaceIconTab";
import Statuses from "./Settings/components/Statuses";
import ChannelPrefixes from "./Settings/components/ChannelPrefixes";
import ContentWrapper from "./Settings/components/ContentWrapper";
import classes from "./styles/customizeWorkspace.module.css";

function Customize() {
  return (
    <div>
      <ContentWrapper
        title="Customize Your Workspace"
        text="Use these settings to make Slack your own. Let your imagination run wild and free! As an admin, you can prevent members from editing these on the"
        span="Permissions page."
        tab1="Emoji"
        tab2="Zuri-bot"
        tab3="Workspace Icon"
        tab4="Statuses"
        tab5="Channel Prefixes"
        tab1Content={<Emoji />}
        tab2Content={<Zuribot />}
        tab3Content={<WorkSpaceIconTab />}
        tab4Content={<Statuses />}
        tab5Content={<ChannelPrefixes />}
      />
    </div>
  );
}

export default Customize;
