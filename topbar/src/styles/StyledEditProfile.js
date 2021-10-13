import styled from "styled-components"

export const StyledProfileWrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 2rem;
  .grid-container {
    display: flex;
    align-items: flex-start;
    .input-cage {
      flex-grow: 1;
      padding: 0 2rem;
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
              border-radius: 50%;
              width: 100%;
            }
          }
        }
      }
      .input-group {
        width: 100%;
        margin-bottom: 2.5rem;
        &.phone {
          flex-direction: column;
          align-items: flex-start;
          .phone-container {
            display: flex;
            align-items: center;
            width: 100%;
            border: 1px solid #a1a1a1;
            border-radius: 4px;
            &:hover {
              border: 1px solid #00b87c;
              transition: border 0.25s ease-in-out;
            }
            .pref,
            .phoneInput {
              height: 3rem;
              padding: 0 0.5rem;
              outline: none;
              border: none;
            }
            .pref {
              width: 72px;
              font-size: 1rem;
            }
            .phoneInput {
              flex-grow: 1;
              margin-left: 1rem;
              width: 100%;
            }
          }
        }
        &.mal-4 {
          margin-left: 0;
          @media (max-width: 768px) {
            /* margin-left: 1rem; */
            margin-top: 2rem;
          }
        }
        .inputLabel {
          font-size: 1.2rem;
          font-weight: 600;
          color: #1d1c1d;
          margin-bottom: 0.75rem;
          display: block;
        }
        .input,
        .select,
        .textarea,
        .PhoneInput,
        .css-2b097c-container {
          width: 100%;
          height: 3rem;
          border: 1.5px solid #a1a1a1;
          padding: 0 1rem;
          font-size: 1.4rem;
          outline: none;
          background: none;
          border-radius: 5px;
          border-top-left-radius: 5px !important;
          border-bottom-left-radius: 5px !important;
          &:hover,
          &:focus {
            border: 1px solid #00b87c;
            transition: border 0.25s ease-in-out;
          }
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
            outline: none;
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
          margin: 0.75rem 0;
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
      width: 24rem;
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
        .avatar-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 192px;
          height: 192px;
          margin-bottom: 1.2rem;
          .img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 4px;
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
      top: 2rem;
      right: 2.5rem;
      z-index: 40000;
    }
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 2.5rem;
    margin-bottom: 2rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .btns {
    font-size: 1rem;
    font-weight: 400;
    padding: 0.75rem 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    &.chgBtn {
      background: #00b87c;
      color: #fff;
      border-radius: 4px;
      text-align: center;
      width: 85%;
      margin: 0 auto;
      padding: 0.5rem 1rem;
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
    }
  }
  .rmvBtn {
    background: none;
    color: #999;
    font-size: 1rem;
    margin-top: 0.5rem;
    margin: 0 auto;
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
`
