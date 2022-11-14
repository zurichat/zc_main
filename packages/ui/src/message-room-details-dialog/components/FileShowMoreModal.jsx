import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import File from "./File";
import fileData from "../fileData";

const FileShowMoreModal = ({ showMore, setShowMore }) => {
  return (
    <StyledFileShowMoreModal>
      <div className="filterHeader">
        <input
          type="search"
          placeholder="Search by file name or keyboard"
          id="search"
          name="search"
        />

        <AiOutlineSearch className="searchIcon" />

        {/* <AiOutlineClose /> */}
        <button
          onClick={() => {
            setShowMore(false);
          }}
        >
          Close
        </button>
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
    </StyledFileShowMoreModal>
  );
};

export default FileShowMoreModal;

// Styled Components
const StyledFileShowMoreModal = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  overflow-y: scroll;
  z-index: 1000;

  .filterHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-right: 0.8rem;
    margin-bottom: 1rem;
    position: sticky;
    top: 0;

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

  .filterContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    padding: 0.5rem;

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
    margin-bottom: 1rem;
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
