import styled from "styled-components";

export const WorkSPaceLogoContainer = styled.div`
  font-size: 18px;
  font-family: "Lato";
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  background: #00b87c;
  margin-right: 0.75rem;
`;

export const WorkSpaceDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.75rem;
`;

export const WorkSpaceDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.35rem;
`;

export const WorkSpaceName = styled.h3`
  font-size: 1.3rem;
  font-family: "Lato";
  font-weight: 600;
  margin-bottom: 0;
  padding: 0;
`;

export const WorkSpaceDescription = styled.div``;

export const GuidelinesContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.75rem;
  justify-content: space-between;
  align-items: top;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Guidelines = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 2rem;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const UploadSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CancelButton = styled.button`
  margin-right: 12px;
  font-size: 15px;
  height: 36px;
  min-width: 80px;
  padding: 0 12px 1px;
  border-radius: 2px;
  background: transparent;
  color: #000;
  font-family: "Lato";
  border: 1px solid #00b87c;
`;
export const Button = styled.button`
  margin-right: 12px;
  font-size: 15px;
  height: 36px;
  width: fit-content;
  padding: 0 12px 1px;
  border-radius: 5px;
  background: #00b87c;
  color: #fff;
  font-family: "Lato";
`;

export const UploadInput = styled.input.attrs({
  type: "file",
  accept: "image/*",
  multiple: "false"
})`
  margin-bottom: 0.75rem;
`;

export const ListItems = styled.ul``;

export const ListItem = styled.li``;

export const CropButtons = styled.div`
  display: flex;
`;
