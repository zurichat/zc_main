import React from "react"
import styled from "styled-components"
import { BsCheck2Circle } from "react-icons/bs"

const LogoAlert = () => {
  return (
    <Alert>
      <BsCheck2Circle />
      <Text>Your workspace icon has been updated</Text>
    </Alert>
  )
}
const Alert = styled.div`
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 1px solid #ddd;
  background: #fff;
  border-left-width: 5px;
  margin: 0 auto 1rem;
  border-radius: 0.25rem;
`

const Text = styled.p`
  font-size: 18px;
`

export default LogoAlert
