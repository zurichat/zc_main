import styled from "styled-components"

export const WorkSPaceLogoContainer = styled.div`
  padding: 1em;
  font-size: 18px;
  font-family: "Lato";
  border-radius: 0 0 .25rem .25rem;
  box-shadow: 0 1px 0 rgb(0 0 0 / 25%);
  margin: 0 auto 3rem;
  border: 1px solid #ddd;
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

export const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  background: palevioletred;
  border-radius: .25rem;
`

export const UploadInput = styled.input.attrs({
  type: "submit",
  accept: "image/*",
  multiple: "false"
})``

export const ListItems = styled.ul``

export const ListItem = styled.li``

export const CropButtons = styled.div`
  display: flex;
`;