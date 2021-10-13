import styled from "styled-components"

export const WorkSPaceLogoContainer = styled.div`
  padding: 1em;
  font-size: 18px;
  font-family: "Lato";
`

export const WorkSpaceDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const WorkSpaceDetail = styled.div`
  display: flex;
  flex-direction: column;
`

export const WorkSpaceName = styled.h3`
  font-size: 2rem;
  font-family: "Lato";
  font-weight: 600;
`

export const WorkSpaceDescription = styled.div``

export const GuidelinesContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const Guidelines = styled.div`
  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  font-size: 18px;
`

export const UploadSection = styled.div``

export const UploadButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  background: palevioletred;
  border-radius: 5px;
`

export const UploadInput = styled.input.attrs({
  type: "submit",
  accept: "image/*",
  multiple: "false"
})``

export const ListItems = styled.ul``

export const ListItem = styled.li``
