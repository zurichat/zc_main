import React from "react";
import fileData from "../fileData";
import styled from "styled-components";
import File from "./File";

const StyledFileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const FileList = () => {
  return (
    <StyledFileList>
      {fileData.map((file, index) => {
        if (index < 5) {
          return <File key={file.id} {...file} />;
        }
      })}
    </StyledFileList>
  );
};

export default FileList;
