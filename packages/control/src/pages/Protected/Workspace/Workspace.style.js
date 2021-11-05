import styled from "styled-components";

export const TopBarWrapperStyle = styled.div`
  width: 100%;
  height: 6vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: var(--bg-color);
  zindex: 1;
  overflow: unset;

  @media (min-width: 1441px) {
    top: 0;
    left: 0;
  }
`;

export const SidebarWrapperStyle = styled.div`
  width: 20%;
  height: 94vh;
  position: fixed;
  -ms-overflow-style: none;
  scrollbar-width: none;
  top: 6vh;
  left: 0;
  background-color: var(--bg-color);

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    min-width: 20%;
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WorkspaceWrapperStyle = styled.div`
  width: 80%;
  height: 94vh;
  position: fixed;
  top: 6vh;
  left: 20%;
  background-color: var(--bg-color);
  overflow: auto;
  margin-left: 5px;

  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    position: relative;
    z-index: unset;
  }
`;
