import React from "react";
import fileData from "../fileData";
import styled from "styled-components";
import File from "./File";
import FileShowMoreModal from "./FileShowMoreModal";

const StyledFileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const FileList = ({ showMore, setShowMore }) => {
  return (
    <>
      <StyledFileList>
        {fileData.map((file, index) => {
          if (index < 5) {
            return <File key={file.id} {...file} />;
          }
        })}
      </StyledFileList>

      {showMore && <FileShowMoreModal setShowMore={setShowMore} />}
    </>
  );
};

export default FileList;
