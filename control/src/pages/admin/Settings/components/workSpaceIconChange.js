import styled from "styled-components"

export const WorkSPaceLogoContainer = styled.div`
  font-size: 18px;
  font-family: "Lato";

  img{
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    background: #007a5a;
    margin-right: .75rem;
  }
`

export const WorkSpaceDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: .75rem;
`

export const WorkSpaceDetail = styled.div`
  display: flex;
  flex-direction: column;
`

export const WorkSpaceName = styled.h3`
  font-size: 2rem;
  font-family: "Lato";
  font-weight: 600;
  margin-bottom: .75rem;
  padding: 0;
`

export const WorkSpaceDescription = styled.div``

export const GuidelinesContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: .75rem;
  justify-content: space-between;
  align-items: center;
`

export const Guidelines = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
`

export const Text = styled.p`
  font-size: 18px;
`

export const UploadSection = styled.div``

export const Button = styled.button`
  margin-right: 12px;
  font-size: 15px;
  height: 36px;
  min-width: 80px;
  padding: 0 12px 1px;
  border-radius: 5px;
  background: #007a5a;
  color: #fff;
  font-family: "Lato";
`

export const UploadInput = styled.input.attrs({
  type: "file",
  accept: "image/*",
  multiple: "false"
})`
  margin-bottom: .75rem;
`

export const ListItems = styled.ul``

export const ListItem = styled.li``

export const CropButtons = styled.div`
  display: flex;
`;