import styled from "styled-components";

export const StyledProfileWrapper = styled.section`
    width: 100%;
    height: 100%;
    padding: 2rem;

    /* CSS variables. */
    :root {
        --PhoneInput-color--focus: #03b2cb;
        --PhoneInputInternationalIconPhone-opacity: 0.8;
        --PhoneInputInternationalIconGlobe-opacity: 0.65;
        --PhoneInputCountrySelect-marginRight: 0.35em;
        --PhoneInputCountrySelectArrow-width: 0.3em;
        --PhoneInputCountrySelectArrow-marginLeft: var(--PhoneInputCountrySelect-marginRight);
        --PhoneInputCountrySelectArrow-borderWidth: 1px;
        --PhoneInputCountrySelectArrow-opacity: 0.45;
        --PhoneInputCountrySelectArrow-color: inherit;
        --PhoneInputCountrySelectArrow-color--focus: var(--PhoneInput-color--focus);
        --PhoneInputCountrySelectArrow-transform: rotate(45deg);
        --PhoneInputCountryFlag-aspectRatio: 1.5;
        --PhoneInputCountryFlag-height: 1em;
        --PhoneInputCountryFlag-borderWidth: 1px;
        --PhoneInputCountryFlag-borderColor: rgba(0,0,0,0.5);
        --PhoneInputCountryFlag-borderColor--focus: var(--PhoneInput-color--focus);
        --PhoneInputCountryFlag-backgroundColor--loading: rgba(0,0,0,0.1);
    }

    .PhoneInput {
        /* This is done to stretch the contents of this component. */
        display: flex;
        align-items: center;
    }

    .PhoneInputInput {
        /* The phone number input stretches to fill all empty space */
        flex: 1;
        /* The phone number input should shrink
        to make room for the extension input */
        min-width: 0;
    }

    .PhoneInputCountryIcon {
        width: calc(var(--PhoneInputCountryFlag-height) * var(--PhoneInputCountryFlag-aspectRatio));
        height: var(--PhoneInputCountryFlag-height);
    }

    .PhoneInputCountryIcon--square {
        width: var(--PhoneInputCountryFlag-height);
    }

    .PhoneInputCountryIcon--border {
        background-color: var(--PhoneInputCountryFlag-backgroundColor--loading);
        box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor),
            inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor);
    }

    .PhoneInputCountryIconImg {
        display: block;
        width: 100%;
        height: 100%;
    }

    .PhoneInputInternationalIconPhone {
        opacity: var(--PhoneInputInternationalIconPhone-opacity);
    }

    .PhoneInputInternationalIconGlobe {
        opacity: var(--PhoneInputInternationalIconGlobe-opacity);
    }

    .PhoneInputCountry {
        position: relative;
        align-self: stretch;
        display: flex;
        align-items: center;
        margin-right: var(--PhoneInputCountrySelect-marginRight);
    }

    .PhoneInputCountrySelect {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1;
        border: 0;
        opacity: 0;
        cursor: pointer;
    }

    .PhoneInputCountrySelect[disabled] {
        cursor: default;
    }

    .PhoneInputCountrySelectArrow {
        display: block;
        content: '';
        width: var(--PhoneInputCountrySelectArrow-width);
        height: var(--PhoneInputCountrySelectArrow-width);
        margin-left: var(--PhoneInputCountrySelectArrow-marginLeft);
        border-style: solid;
        border-color: var(--PhoneInputCountrySelectArrow-color);
        border-top-width: 0;
        border-bottom-width: var(--PhoneInputCountrySelectArrow-borderWidth);
        border-left-width: 0;
        border-right-width: var(--PhoneInputCountrySelectArrow-borderWidth);
        transform: var(--PhoneInputCountrySelectArrow-transform);
        opacity: var(--PhoneInputCountrySelectArrow-opacity);
    }

    .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon + .PhoneInputCountrySelectArrow {
        opacity: 1;
        color: var(--PhoneInputCountrySelectArrow-color--focus);
    }

    .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
        box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor--focus),
            inset 0 0 0 var(--PhoneInputCountryFlag-borderWidth) var(--PhoneInputCountryFlag-borderColor--focus);
    }

    .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon .PhoneInputInternationalIconGlobe {
        opacity: 1;
        color: var(--PhoneInputCountrySelectArrow-color--focus);
    }

    .grid-container {
        display: flex;
        align-items: flex-start;

        .input-cage {
            flex-grow: 1;
            margin-right: 5rem;

            @media (max-width: 768px) {
                margin-right: 0;
            }

            .mobileCon {
                width: 100%;

                @media (max-width: 768px) {
                    display: flex;
                    align-items: flex-start;
                }

                .mobileAvataeCon {
                    display: none;

                    @media (max-width: 768px) {
                        display: block;
                        position: relative;
                        width: 10rem;
                        height: 10rem;
                        border-radius: 50%;

                        .icon-container {
                            position: absolute;
                            top: -.2rem;
                            left: -.2rem;
                            width: 2rem;
                            height: 2rem;
                            border-radius: 50%;
                            background: #F6F6F6;
                            border: 1px solid #FFF;
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
                        }
                    }
                }
            }

            .input-group {
                width: 100%;
                margin-bottom: 1.5rem;

                .inputLabel {
                    font-size: 1rem;
                    font-weight: 400;
                    color: #1D1C1D;
                    margin-bottom: .75rem;
                }

                .input, .select, .textarea, .PhoneInput, .css-2b097c-container {
                    width: 100%;
                    height: 3.8125rem;
                    border-radius: 5px;
                    border: 1px solid #A1A1A1;
                    padding: 0 1rem;
                    font-size: 1.4rem;
                    outline: none;
                    background: none;
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
                    font-size: .75rem;
                    color: #FB9002;
                    cursor: pointer;
                }

                .para {
                    font-size: .75rem;
                    font-weight: 400;
                    color: #6A6A6A;
                    line-height: 1.5;
                    max-width: 307px;
                    text-align: left;
                    margin-top: .75rem;
                }
            }

            .double-input {
                display: grid;
                grid-template-columns: 2fr 1fr;
                grid-gap: 2rem;
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
                height: 24rem;
                
                .img {
                    object-fit: cover;
                    width: 100%;
                    height: auto;
                    margin-bottom: 1.5rem;
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
            color: #00B87C;
            position: fixed;
            top: 2.5rem;
            right: 2.5rem;
            z-index: 40000;
        }
    }

    .button-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 4.5rem;
        
        @media (max-width: 768px) {
            display: none;
        }
    }
    .btns {
        font-size: 1rem;
        font-weight: 400;
        padding: .75rem 1.2rem;
        outline: none;
        border: none;
        
        &.chgBtn {
            background: #00B87C;
            color: #fff;

            &:hover {
                background: none;
                border: 4px solid #00B87C;
                color: #00B87C;
                transition: all .3s ease-in-out;
            }
        }

        &.rmvBtn {
            background: none;
            color: #999;

            &:hover {
                color: red;
                transition: all .3s ease-in-out;
            }
        }
    }
`