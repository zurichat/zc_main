import React from "react";
import Emoji from "../../../components/emoji/Emoji";
import Zuribot from "../../../components/zuri-bot/Zuribot";
import WorkSpaceIconTab from "../../../components/workspace-icon-tab/WorkSpaceIconTab";
import Statuses from "../../../components/statuses/Statuses";
import ChannelPrefixes from "../../../components/channel-prefixes/ChannelPrefixes";
import ContentWrapper from "../../../components/content-wrapper/ContentWrapper";

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
