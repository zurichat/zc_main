import React from "react";
import styled from "styled-components";

const StyledFile = styled.div`
  display: flex;
  align-items: center;
  //   justify-content: center;
  place-items: center;
  gap: 1rem;
  width: 100%;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.5;
    color: #333;

    span {
      display: block;
      font-size: 0.8rem;
      font-weight: 400;
      color: #999;
    }
  }
`;

const File = ({ id, title, sharedBy, alt, src }) => {
  return (
    <StyledFile>
      <img src={src} alt={alt} />
      <h3>
        {title}
        <span>Shared by {sharedBy}</span>
      </h3>
    </StyledFile>
  );
};

export default File;
