import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  /* background: rgba(0, 0, 0, 0.9); */
`;

export const Modalstyle = styled.div`
  width: 27rem;
  margin: 0 auto;
  border-radius: 1px solid 12px;
  z-index: 100;
  overflow: hidden;
  color: #2e2e2e;
  /* background-color: rgb(80,79,84); */

  font-size: 15px;
  font-variant-ligatures: common-ligatures;
  font-weight: 400;

  position: absolute;
  left: -10px;
  bottom: 35px;
  outline: none;
  line-height: 1.5;
  padding-bottom: 0.8rem;

  .card {
    max-height: calc(100vh - 30px);
    max-width: calc(100vw - 30px);
    overflow: hidden;
    display: flex;
    flex-direction: column;

    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgba(47, 46, 47, 0.3);
      width: 100%;
      padding: 20px;
      position: relative;

      img {
        height: 1rem;
        width: 1rem;
        position: absolute;
        top: 50%;
        left: 30px;
        transform: translateY(-50%);
      }

      input {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        border-radius: 8px;
        border: 1px solid #d0d5dd;
        outline: none;
        padding: 8px 36px;
        width: 100%;

        &::placeholder {
          color: rgba(92, 86, 92, 0.8);
        }
      }

      input:focus {
        border: 1px solid rgb(151, 214, 193);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05),
          0 0 0 5px rgb(151, 214, 193);
      }

      .line {
        border-bottom: 1px solid rgba(92, 86, 92, 0.3);
        height: 17px;
        left: 0px;
        position: absolute;
        top: 230px;
        width: 110rem;
      }

      .icon {
        padding-left: 35px;
        background-size: 15px;
        background-color: rgba(222, 217, 217, 0.35);
        background-position: 10px center;
      }
    }
  }

  .details {
    border-radius: 0;
    box-shadow: none;
    position: relative;
    user-select: none;
    outline: 0;
    height: 100%;
    overflow-y: auto;

    .detailsCard {
      box-sizing: content-box;
      direction: ltr;
      height: 245px;
      position: relative;
      width: 358px;
      will-change: transform;
      overflow: hidden;
      padding: 8px 24px !important;

      .detailsCard2 {
        width: auto;
        height: 245px;
        max-width: 358px;
        max-height: 245px;
        overflow: visible;
        position: relative;

        .firstDiv {
          height: 24px;
          left: 0px;
          position: absolute;
          top: 0px;
          width: 100%;
        }

        .secondDiv {
          height: 30px;
          left: 0px;
          position: absolute;
          top: 24px;
          width: 100%;

          &:hover {
            cursor: pointer;
            background-color: #97d6c1;
            border-radius: 4px;
          }

          div {
            padding: 3px;

            flex: 1;
            flex-shrink: 2;
            min-width: 0;

            display: flex;
            align-items: center;

            img {
              padding-right: 10px;
              height: 15px;
              background-position: 10px center;
              z-index: 1000;
            }
          }
        }

        .thirdDiv {
          height: 30px;
          left: 0px;
          position: absolute;
          top: 54px;
          width: 100%;

          &:hover {
            cursor: pointer;
            background-color: #97d6c1;
            border-radius: 4px;
          }

          div {
            padding: 3px;

            flex: 1;
            flex-shrink: 2;
            min-width: 0;

            display: flex;
            align-items: center;

            img {
              padding-right: 10px;
              height: 15px;
              background-position: 10px center;
              z-index: 1000;
            }
          }
        }

        .fourthDiv {
          height: 30px;
          left: 0px;
          position: absolute;
          top: 84px;
          width: 100%;

          &:hover {
            cursor: pointer;
            background-color: #97d6c1;
            border-radius: 4px;
          }

          div {
            padding: 3px;

            flex: 1;
            flex-shrink: 2;
            min-width: 0;

            display: flex;
            align-items: center;

            img {
              padding-right: 10px;
              height: 15px;
              background-position: 10px center;
              z-index: 1000;
            }
          }
        }

        .fifthDiv {
          height: 30px;
          left: 0px;
          position: absolute;
          top: 114px;
          width: 100%;

          &:hover {
            cursor: pointer;
            background-color: #97d6c1;
            border-radius: 4px;
          }

          div {
            padding: 3px;

            flex: 1;
            flex-shrink: 2;
            min-width: 0;

            display: flex;
            align-items: center;

            img {
              padding-right: 10px;
              height: 15px;
              background-position: 10px center;
              z-index: 1000;
            }
          }
        }

        .firstyDiv {
          height: 24px;
          left: 0px;
          position: absolute;
          top: 161px;
          width: 100%;
        }

        .secondyDiv {
          height: 30px;
          left: 0px;
          position: absolute;
          top: 185px;
          width: 100%;

          &:hover {
            cursor: pointer;
            background-color: #97d6c1;
            border-radius: 4px;
          }

          div {
            padding: 3px;

            flex: 1;
            flex-shrink: 2;
            min-width: 0;

            display: flex;
            align-items: center;

            img {
              padding-right: 10px;
              height: 15px;
              background-position: 10px center;
              z-index: 1000;
            }
          }
        }

        .thirdyDiv {
          height: 30px;
          left: 0px;
          position: absolute;
          top: 215px;
          width: 100%;
          padding-top: 3px;

          &:hover {
            cursor: pointer;
            background-color: #97d6c1;
            border-radius: 4px;
          }

          div {
            flex: 1;
            flex-shrink: 2;
            min-width: 0;

            display: flex;
            align-items: center;

            div {
              display: flex;
              align-items: center;
              box-sizing: border-box;
              width: 100%;
              margin-right: 0;

              .top {
                display: flex;
                align-items: center;
                box-sizing: border-box;
                width: 100%;
                padding-left: 3px;

                img {
                  padding-right: 8px;
                  margin-left: 0;
                  height: 15px;
                  background-position: 10px center;
                  z-index: 1000;
                }
              }

              .bottom {
                padding: 0;
                flex: 0;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
`;
