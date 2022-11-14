import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import File from "./File";
import fileData from "../fileData";

const FileShowMoreModal = ({ showMore, setShowMore }) => {
  return (
    !showMore && (
      <>
        <StyledFileShowMoreModal>
          <div className="modalContent">
            <div className="filterHeader">
              <input
                type="search"
                placeholder="Search by file name or keyboard"
                id="search"
                name="search"
              />

              <AiOutlineSearch className="searchIcon" />

              <AiOutlineClose
                onClick={() => {
                  setShowMore(false);
                }}
              />
            </div>

            <div className="filterContainer">
              <div className="leftFilter">
                <select name="author" id="author">
                  <option value="all">From</option>
                  <option value="all">Olix</option>
                </select>
                <select name="date" id="date">
                  <option value="all">Date</option>
                  <option value="all">Today</option>
                </select>
                <select name="type" id="type">
                  <option value="all">Type</option>
                  <option value="all">Image</option>
                </select>
                <button>More filters</button>
              </div>
              <div className="rightFilter">
                {/* Hamburger Menu */}
                <div className="hamburger">
                  <div className="hambuger__Line"></div>
                  <div className="hambuger__Line"></div>
                  <div className="hambuger__Line"></div>
                </div>
                {/* Menus */}
                <div className="dotMenu">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              </div>
            </div>

            <div className="filter">
              <h5>{fileData.length} results</h5>
              {/* sort file */}
              <div className="sortNewFile">
                <select name="sort" id="sort">
                  <option value="all">Sort Newest File</option>
                  <option value="all">Newest</option>
                </select>
              </div>
            </div>

            <div className="fileContainer">
              {fileData.map(file => {
                return <File key={file.id} {...file} />;
              })}
            </div>
          </div>
        </StyledFileShowMoreModal>
      </>
    )
  );
};

export default FileShowMoreModal;

// Styled Components
const StyledFileShowMoreModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  overflow: hidden;

  .modalContent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(350px, 90vw, 950px);
    height: 80vh;
    background: #fff;
    padding: 1rem;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: scroll;

    && {
      width: clamp(350px, 90vw, 950px);
    }
  }

  .filterHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-right: 0.8rem;
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 100;

    input {
      width: 90%;
      border: none;
      outline: none;
      font-size: 1.2rem;
      font-weight: 500;
      color: #333;
      padding: 0.5rem 2.5rem;
      position: sticky;
      top: 0;

      &::placeholder {
        color: #999;
      }

      &:focus {
        border: none;
        outline: none;
      }

      //   remove the input search icon that comes with the input field by default
      &::-webkit-search-decoration,
      &::-webkit-search-cancel-button,
      &::-webkit-search-results-button,
      &::-webkit-search-results-decoration {
        display: none;
      }
    }

    .searchIcon {
      position: absolute;
      left: 0.8rem;
      font-size: 1.5rem;
      color: #999;
      cursor: pointer;
      margin-top: 4px;
    }

    svg {
      border: none;
      outline: none;
      background: none;
      font-size: 14px;
      font-weight: 500;
      fill: #333;
      cursor: pointer;
      font-weight: 500;
    }

    svg:hover {
      fill: #999;
    }
  }

  .filterContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;

    @media screen and (max-width: 768px) {
      padding-right: 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }

    .leftFilter {
      display: flex;
      align-items: center;
      gap: 1rem;

      select {
        border: none;
        outline: none;
        font-size: 1.2rem;
        font-weight: 500;
        color: #333;
        padding: 0.5rem 1rem;
        background: #eee;
        border-radius: 8px;
        cursor: pointer;

        option {
          font-size: 1.2rem;
          font-weight: 500;
          color: #333;

          &:hover {
            background: #eee;
          }
        }
      }

      button {
        border: none;
        outline: none;
        background: none;
        font-size: 14px;
        font-weight: 500;
        color: RGB(0, 0, 255);
        cursor: pointer;
        font-weight: 500;
      }
    }
  }

  .rightFilter {
    display: flex;
    align-items: center;
    gap: 1rem;

    .hamburger {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      cursor: pointer;
      flex-direction: column;

      .hambuger__Line {
        width: 1.5rem;
        height: 2px;
        background: #8b8b8b;
      }
    }

    .dotMenu {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      gap: 0.2rem;
      cursor: pointer;

      .dot {
        width: 5px;
        height: 5px;
        background: #8b8b8b;
        border-radius: 50%;
      }
    }
  }

  .filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
  }

  .fileContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    padding: 0 1rem;
    padding-bottom: 1rem;
  }
`;
