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
  flex: 0;
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
  position: relative;
  flex: 1;
  height: 100%;
  background-color: var(--bg-color);
  overflow: auto;
  & > #zuri-plugin-load-section {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  & > #single-spa-loader {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
  }
`;

export const ExtraSidebarWrapperStyle = styled.div`
  height: 95vh;
  background: #007b53;
  color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid #007b53;
  transition: all 0.2s;

  & .x-sb_workspaceBox {
    height: 75%;
    padding: 0 10px;
  }

  & .x-sb_workspaceInfo {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  & .x-sb_workspaceWrap {
    display: flex;
    align-items: flex-end;
    gap: 8px;

    &:first-child {
      margin-top: 12px;
    }

    & h3,
    & p {
      margin-bottom: 0;
      padding: 0;
      line-height: 20px;
    }

    & p {
      @media (max-width: 426px) {
        font-size: 12px;
      }
    }
  }

  & .x-sb_workspaceAvatar {
    border-radius: 10px;
    border: 3px solid transparent;
    text-align: center;
    margin-bottom: 5px;
    padding: 0.5px;

    &:hover {
      border: 3px solid #dddddd;
    }
  }

  & .x-sb_workspaceAvatarM {
    height: 40px;
    width: 40px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(69, 64, 64);
    color: #fff;
    text-transform: uppercase;
  }

  & .x-sb_currentWorkspace {
    border-radius: 5px;
    border: 2px solid rgb(216, 248, 239);
    text-align: center;
    margin-bottom: 5px;
    padding: 0.5px;
  }

  & .x-sb_workspaceAdd {
    display: flex;
    align-items: center;
    gap: 16px;
    text-align: center;
    padding: 10px 20px 0 20px;
  }

  & .x-sb_workspaceAdd svg {
    height: 1em;
    width: 1em;
    text-align: center;
    margin-right: 0;
  }

  & .x-sb_lowerDrawer {
    padding: 30px 0;
    border-top: 1px solid #ddd;
    width: 100%;
  }

  @media (max-width: 426px) {
    width: 70%;
  }

  @media (min-width: 769px) {
    width: 70px;

    & .x-sb_workspaceInfo,
    & .x-sb_optionName {
      display: none;
    }

    & .x-sb_workspaceBox {
      padding: 0;
      margin: 0 auto;
    }

    & .x-sb_workspaceAdd {
      margin-bottom: 20px;
      gap: 0;
      justify-content: center;
    }
  }
`;
