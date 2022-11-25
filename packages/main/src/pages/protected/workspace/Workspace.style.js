import styled, { createGlobalStyle } from "styled-components";

export const GlobalWorkSpaceStyle = createGlobalStyle`
  body {
    margin: 0 !important;
  }
`;

export const TopBarWrapperStyle = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: var(--bg-color);
  overflow: unset;
  @media (min-width: 1441px) {
    top: 0;
    left: 0;
  }
`;

export const SidebarWrapperStyle = styled.div`
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  background-color: var(--bg-color);
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const WorkspaceWrapperStyle = styled.div`
  flex: 1;
`;
