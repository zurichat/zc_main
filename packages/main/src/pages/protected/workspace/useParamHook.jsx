import React from "react";
import { useParams } from "react-router-dom";

const useParamHook = props => {
  const thisProps = { ...props };
  const params = useParams();
  const urlIds = {};
  const urlIdes = JSON.parse(localStorage.getItem("urlsTracker")) || "";

  for (const key in thisProps) {
    if (Object.hasOwnProperty.call(thisProps, key)) {
      if (params[key]) {
        if (params[key].length > 7) {
          const short_id = `${params[key].slice(4, 6)}${params[key].slice(
            6,
            8
          )}${params[key].slice(-3, -1)}`;
          urlIds[key] = {
            [key]: urlIdes[`${key}s`]?.filter(
              urlId => urlId.real_id === params[key]
            )[0]?.real_id,
            short_id: short_id
          };
        } else {
          urlIds[key] = {
            [key]: urlIdes[`${key}s`]?.filter(
              urlId => urlId.short_id === params[key]
            )[0]?.real_id,
            short_id: params[key]
          };
        }
      }
    }
  }

  return urlIds;
};

export default useParamHook;
