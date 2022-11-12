import React from "react";

export function getDisplayedValue(value, children) {
  const childArray = React.Children.toArray(children);
  const selectedChild = childArray.find(child => child.props.value === value);

  return selectedChild.props.children;
}
