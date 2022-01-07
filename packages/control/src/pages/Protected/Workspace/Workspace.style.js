import styled, { createGlobalStyle } from "styled-components";

export const GlobalWorkSpaceStyle = createGlobalStyle`
  body {
    margin: 0 !important;
  }
`;

export const TopBarWrapperStyle = styled.div`
  width: 100%;
  height: 48px;
  ${
    "" /* height: 6vh;
  position: fixed;
  top: 0;
  left: 0; */
  }
  display: flex;
  align-items: center;
  background-color: var(--bg-color);
  ${"" /* z-index: 1; */}
  overflow: unset;

  @media (min-width: 1441px) {
    top: 0;
    left: 0;
  }
`;

export const SidebarWrapperStyle = styled.div`
  flex-basis: 20%;
  max-width: 300px;
  min-width: 230px;
  height: 100%;
  ${"" /* position: fixed; */}
  -ms-overflow-style: none;
  scrollbar-width: none;
  ${
    "" /* top: 6vh;
  left: 0; */
  }
  background-color: var(--bg-color);

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WorkspaceWrapperStyle = styled.div`
  ${"" /* width: 80%; */}
  flex: 1;
  height: 100%;
  ${
    "" /* position: fixed;
  top: 6vh;
  left: 20%; */
  }
  background-color: var(--bg-color);
  overflow: auto;
  ${"" /* margin-left: 5px; */}
  z-index: -1;

  & > #zuri-plugin-load-section {
    height: 100%;
  }

  ${
    "" /* @media (max-width: 768px) {
    left: 0;
    width: 100%;
    ${"" /* position: relative; */
  }
    z-index: unset;
  } */}
`;
