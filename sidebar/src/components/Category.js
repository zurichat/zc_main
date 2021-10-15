import React, { Fragment, useState } from "react"
import DropDown from "./Drop"
import Room from "./Room"
import SkeletonLoader from "./SkeletonLoader"

export default function Category(props) {
  const [isOpen, setOpen] = useState(false)

  const toggleDropdown = () => setOpen(!isOpen)

  return props.state.sidebar ? (
    <Fragment>
      {props.name && (
        <DropDown
          categoryName={props.name}
          isOpen={isOpen}
          toggleDropdown={toggleDropdown}
        />
      )}
      {props.state.sidebar &&
        props.name &&
        Object.keys(props.state.sidebar).map((plugin, index) => {
          let category = props.state.sidebar[plugin].category

          return category && category === props.name ? (
            <Room
              isOpen={isOpen}
              itemName={props.name}
              id={props.state.sidebar.name}
              key={index}
              items={props.state.sidebar[plugin]}
            />
          ) : null
        })}
    </Fragment>
  ) : (
    <SkeletonLoader />
  )
}
