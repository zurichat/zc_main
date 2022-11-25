import React from "react";
import { useParams } from "react-router-dom";

const useParamHook = props => {
  console.log(props, "jhdhdhhdhjhdkjdjhdjhdkjdj");
  const thisProps = { ...props };
  const params = useParams();
  const urlIds = {};
  const urlIdes = JSON.parse(localStorage.getItem("urlsTracker")) || "";
  console.log(params);
  for (const key in thisProps) {
    if (Object.hasOwnProperty.call(thisProps, key)) {
      if (params[key]) {
        if (params[key].length > 7) {
          urlIds[key] = {
            [key]: urlIdes[`${key}s`]?.filter(
              urlId => urlId.real_id === params[key]
            )[0]?.real_id,
            short_id: params[key]
          };
          console.log(urlIdes, "got here in if starwejgh");
        } else {
          console.log(urlIdes, "got here in selse stah,en");
          urlIds[key] = {
            [key]: urlIdes[`${key}s`]?.filter(
              urlId => urlId.short_id === params[key]
            )[0]?.real_id,
            short_id: params[key]
          };
        }

        // if (!urlIdes) {
        //   urlIds[key] = params[key]
        // }
      }
    }
  }

  console.log(urlIds);

  return urlIds;
};

export default useParamHook;
