import styled from "styled-components";

export const StyledProfileWrapper = styled.section`
  width: 100%;
  padding: 2.5rem;
  margin-bottom: 20px;
  .grid-container {
    display: flex;
    align-items: flex-start;
    .input-cage {
      flex-grow: 1;
      padding: 0 2rem 0 0;
      @media (max-width: 768px) {
        margin-right: 0;
        padding: 0 0;
      }
      .mobileCon {
        width: 100%;
        @media (max-width: 768px) {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          margin-top: 50px;
          ${"" /* margin-bottom: 30px; */}
        }
        .mobileAvataeCon {
          display: none;
          @media (max-width: 768px) {
            display: block;
            position: relative;
            width: 10rem;
            height: 10rem;
            border-radius: 4px;
            align-self: center;
            .icon-container {
              position: absolute;
              top: -0.2rem;
              left: -0.2rem;
              width: 2rem;
              height: 2rem;
              border-radius: 4px;
              background: #f6f6f6;
              border: 1px solid #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              .icon {
                font-size: 1rem;
                color: rgba(153, 153, 153, 1);
              }
            }
            .avatar {
              object-fit: cover;
              height: 100%;
              width: 100%;
            }
          }
        }
      }
      .input-group {
        width: 100%;
        margin-bottom: 0.6rem;
        &.phone,
        &.timezone {
          flex-direction: column;
          align-items: flex-start;
          .phone-container {
            display: flex;
            align-items: center;
            width: 100%;
            border: 1px solid #a1a1a1;
            border-radius: 4px;
            padding: 2px 0.5rem;
            &:hover {
              border: 1px solid #00b87c;
              transition: border 0.25s ease-in-out;
            }
            .pref,
            .phoneInput {
              ${"" /* height: 2.4rem; */}
              ${"" /* padding: 0px 15px; */}
              outline: none;
              border: none;
              flex-grow: 1;
              ${"" /* margin-left: 1rem; */}
              width: 100%;
            }
            .pref {
              width: auto;
              font-size: 15px;
              margin-right: 5px;
              color: #696969;
            }
            .pref option {
              text-align: center;
            }
          }
          .time-select {
            ${"" /* padding: 0px 15px; */}
            outline: none;
            border: none;
            width: 100%;
          }
        }
        &.mal-4 {
          margin-left: 0;
        }
        .inputLabel {
          font-size: 1rem;
          font-weight: 600;
          color: #1d1c1d;
          margin-bottom: 4px;
          display: block;
        }
        .input,
        /*select*/
        .phone-container,
        .time-container,
        .textarea,
        .css-1s2u09g-control,
        .css-2b097c-container {
          width: 100%;
          border: 1px solid #a1a1a1;
          margin: 6px 0;
          padding: 8px 1rem;
          font-size: 15px;
          outline: none;
          background: none;
          border-radius: 5px;
          border-top-left-radius: 5px !important;
          border-bottom-left-radius: 5px !important;
          &:hover,
          &:focus,
          &:active {
            border: 1px solid #00b87c;
            transition: border 0.25s ease-in-out;
          }
        }
        .time-container {
          padding: 2px 1rem;
        }
        .input:-webkit-autofill,
        .input:-webkit-autofill:hover,
        .input:-webkit-autofill:focus,
        .input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
        }
        .PhoneInput {
          display: flex;
          align-items: center;
          .PhoneInputCountrySelect {
            width: 3rem;
          }
          .PhoneInputInput {
            outline: none;
            color: #000;
            font-size: 1rem;
            border: none;
          }
        }
        .css-2b097c-container {
          display: block;
          width: 100%;
          height: 100%;
          padding: 0;
          .css-yk16xz-control {
            background-color: none;
            border: none;
            height: 100%;
          }
        }
        .css-319lph-ValueContainer {
          padding: 0 1rem;
        }
        .css-7pwich-Input {
          padding: 0;
        }
        .css-1s2u09g-control {
          font-size: 1rem;
        }
        .textarea {
          height: 6.125rem;
        }
        .warning {
          font-size: 0.75rem;
          color: #fb9002;
          cursor: pointer;
        }
        .para {
          font-size: 0.9rem;
          font-weight: 400;
          color: #6a6a6a;
          line-height: 1.5;
          /* max-width: 307px; */
          text-align: left;
          margin: 0.25rem 0 0.8rem 0;
        }
      }
      .double-input {
        /* display: grid; */
        grid-template-columns: 2fr 1fr;
        grid-gap: 1rem;
        align-items: flex-start;
        @media (max-width: 768px) {
          grid-gap: 1rem;
        }
      }
    }
    .img-container {
      /* padding-right: 0.5rem; */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      @media (max-width: 768px) {
        display: none;
      }
      .avatar {
        width: 100%;
        height: 26rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        .avatar-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 192px;
          height: 192px;
          margin-bottom: 1.2rem;
          .profile__img-wrapper {
            height: 100%;
          }
          .pictureHeading {
            display: block;
            padding-bottom: 0.3rem;
            font-weight: bold;
          }
          .img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 4px;
            margin: 0 auto;
          }
        }
      }
    }
  }
  .mobileButton {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      font-weight: 700;
      color: #00b87c;
      position: fixed;
      top: 1rem;
      right: 2.5rem;
      z-index: 40000;
      cursor: pointer;
    }
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    /* padding-right: 1.75rem; */
    /* margin-top: 2.5rem; */
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .btns {
    font-size: 1rem;
    font-weight: 400;
    padding: 0.5rem 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    &.chgBtn {
      background: #00b87c;
      color: #fff;
      border-radius: 4px;
      text-align: center;
      width: 192px;
      padding: 0.5rem 1rem;
      margin-top: 1.3rem;
      &:hover {
        background: #029765;
        color: #fff;
        transition: all 0.3s ease-in-out;
      }
    }
    &.saveBtn {
      background: #00b87c;
      color: #fff;
      border-radius: 4px;
      text-align: center;
      &:hover {
        background: #029765;
        color: #fff;
        transition: all 0.3s ease-in-out;
      }
    }
  }
  .rmvBtn {
    background: none;
    color: #999;
    font-size: 1rem;
    margin-top: 0.5rem;
    text-align: center;
    &:hover {
      color: red;
      transition: all 0.3s ease-in-out;
    }
  }
  .cncBtn {
    background: none;
    color: #999;
    font-size: 1rem;
    margin-top: 0.3rem;
    &:hover {
      color: red;
      transition: all 0.3s ease-in-out;
    }
  }
`;
// border-radius: 50%;  // margin: 0 auto;  width: 24rem;
