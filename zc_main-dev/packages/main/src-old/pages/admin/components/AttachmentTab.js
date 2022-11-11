import React from "react";

function AttachmentTab() {
  return (
    <div>
      <div>
        <p>
          Zurichat will automatically display previews for links when possible.{" "}
        </p>
      </div>
      <div>
        <p>
          <h3>Blocked Previews</h3>
        </p>
        <p>
          To block previews from a specific link or domain for your enitire
          workspace, click ✖ to the left of the preview inside Zuri Chat. You’ll
          then have an option to block all previews from that domain
        </p>
      </div>

      <div>
        <p>Once a domain is blocked, you’ll see it listed here. </p>
      </div>
    </div>
  );
}

export default AttachmentTab;
