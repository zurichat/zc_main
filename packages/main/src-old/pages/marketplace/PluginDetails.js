import { useState } from "react";
import { useParams } from "react-router";
import useSWR from "swr";

const PluginDetails = () => {
  const [loading, setLoading] = useState(false);
  const [pluginData, setPluginData] = useState([]);
  const fetcher = url => fetch(url).then(res => res.json());
  const { pluginId, pluginName } = useParams();
  //this is a dummy fetch of how we're meant to get the plugin description
  //eslint-disable-next-line
  const { data } = useSWR(`/api/marketplace/getPlugin/${pluginId}`, fetcher);

  return (
    <div>
      <p>These are the plugin details</p>
      <p>
        The plugin id which will be used to fetch the metadata of the particular
        plugin: {pluginId}
      </p>
      <p>The plugin name: {pluginName}</p>
    </div>
  );
};

export default PluginDetails;
