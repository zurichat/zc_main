import React from "react"
import Room from "./Room"

export default function SubCategory({ state, name }) {
  return (
    <div>
      {name && <span style={{ marginLeft: "20px" }}>{name}</span>}
      {state && <Room id={name} items={state} />}
    </div>
  )
}
