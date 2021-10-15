import React from "react"
import SkeletonLoader from "./SkeletonLoader"
import SubCategory from "./SubCategory"
import Room from "./Room"

export default function Category(props) {
  return props.name ? (
    <div>
      {props.name && (
        <span style={{ textTransform: "capitalize" }}>{props.name}</span>
      )}
      {props.data &&
        props.data.length > 0 &&
        props.data.map(plugin => {
          if (plugin.show_group) {
            return (
              <SubCategory
                key={plugin.name}
                name={plugin.group_name}
                state={plugin}
              />
            )
          } else {
            return (
              <Room
                key={plugin.name}
                id={plugin.group_name}
                isDirect={true}
                items={plugin}
              />
            )
          }
        })}
    </div>
  ) : (
    <SkeletonLoader />
  )
}
