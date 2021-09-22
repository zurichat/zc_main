import styled from "styled-components";

export const StyledProfileWrapper = styled.section`
    width: 100%;
    height: 100%;
    padding: 2rem;

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
            height: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            @media (max-width: 768px) {
                display: none;
            }
            
            .avatar {
                width: 100%;
                
                .img {
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