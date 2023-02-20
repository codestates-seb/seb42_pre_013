import React from "react"
import styled from "styled-components";
import LogoutNav from '../components/nav/LogoutNav'


function Logout() {
    return (
        <>
            <LogoutNav />
            <Container>
                <H1>
                    Clicking "Log out" will log you out of the following domains on this device:
                </H1>
                <LogoutForm>
                    <ul>
                        <li>
                            <a href="https://askubuntu.com">
                                <img
                                    src='https://cdn.sstatic.net/Sites/askubuntu/Img/apple-touch-icon.png'
                                    alt='ask ubuntu'
                                />
                                <div>askubuntu.com</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://mathoverflow.net">
                                <img
                                    src='https://cdn.sstatic.net/Sites/mathoverflow/Img/apple-touch-icon.png?v=8c5ff8612fb4'
                                    alt='math overflow'
                                />
                                <div>mathoverflow.net</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://serverfault.com">
                                <img
                                    src='https://cdn.sstatic.net/Sites/serverfault/Img/apple-touch-icon.png'
                                    alt='server fault'
                                />
                                <div>serverfault.com</div>
                            </a>
                        </li>                        
                        <li>
                            <a href="https://stackapps.com">
                                <img
                                    src='https://cdn.sstatic.net/Sites/stackapps/Img/apple-touch-icon.png'
                                    alt='stack apps'
                                />
                                <div>stackapps.com</div>
                            </a>
                        </li>                     
                        <li>
                            <a href="https://stackexchange.com">
                                <img
                                    src='https://cdn.sstatic.net/Sites/stackexchange/Img/apple-touch-icon@2.png'
                                    alt='stack exchange'
                                />
                                <div>stackexchange.com</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://stackoverflow.com">
                                <img
                                    src='https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png'
                                    alt='stack overflow'
                                />
                                <div>stackoverflow.com</div>
                            </a>
                        </li>                        
                        <li>
                            <a href="https://superuser.com">
                                <img
                                    src='https://cdn.sstatic.net/Sites/superuser/Img/apple-touch-icon.png'
                                    alt='super user'
                                />
                                <div>superuser.com</div>
                            </a>
                        </li>
                    </ul>
                    <LogoutAll>
                        <CheckboxDiv>
                            <input type="checkbox" id="everywhere" />
                        </CheckboxDiv>
                        <div>
                            <label htmlFor="everywhere">Log out on all devices</label>
                        </div>
                    </LogoutAll>
                    <LogoutAndCancel>
                        <LogoutButton>Log out</LogoutButton>
                        <CancelButton href="https://stackoverflow.com/">Cancel</CancelButton>
                    </LogoutAndCancel>
                    <Caution>
                        If you’re on a shared computer, remember to log out of your Open ID provider (Facebook, Google, Stack Exchange, etc.) as well.
                    </Caution>
                </LogoutForm>
            </Container>
        </>
    )
}

export default Logout;

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f1f2f3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

const H1 = styled.div`
    max-width: 445.64px;
    text-align: center;
    margin-bottom: 24px;
    font-size: 19px;
    color: #232629;
`;

const LogoutForm = styled.form`
    box-sizing: border-box;
    max-width: 316px;
    min-height: 422.8px;
    margin: 0 auto;
    margin-bottom: 24px;
    padding: 24px;
    background-color: white;
    box-shadow: 1px 3px 3px #cccccc;
    border-radius: 8px;
    ul {
        padding-left: 0;
        margin-bottom: 16px;
        border-bottom: 1px solid;
        border-color: #d6d9dc;
        padding-bottom: 12px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        li {
            list-style: none;
        }
        a {
            display: flex;
            align-items: center;
            text-decoration-line: none;
            margin: 2px;
            color: #0074cc;
            font-size: 14.3px;
            &>div {
                &:hover {
                    color: #0a95ff;
                }
                &:visited {
                    color: #0063bf;
                }
            }
            img {
                width: 16px;
                height: 16px;
                margin-right: 5px;
            }
        }
    }
`;

const LogoutAll = styled.div`
    display: flex;
    font-size: 12px;
    color: #0c0d0e;
    margin-bottom: 16px;
    div {
        label {
            cursor: pointer;
        }
    }
`;

const CheckboxDiv = styled.div`
    margin-right: 4px;
    display: flex;
    input {
        cursor: pointer;
    }
`;

const LogoutAndCancel = styled.div`
    display: flex;
    button {
        width: 66.16px;
        height: 37.78px;
        font-size: 13px;
        margin: 2px;
        padding: 10.4px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`;

const LogoutButton = styled.button`
    color: #ffffff;
    background-color: #0a95ff;
    &:active {
        background-color: #0063bf;
        box-shadow: 0px 0px 0px 2px rgba(0, 84, 163, 0.4);
    }
    &:hover {
        background-color: #0074cc;
    }
`;

const CancelButton = styled.button`
    color: #0074cc;
    background-color: transparent;
    &:active {
        color: #0063bf;
        background-color: #cde9fe;
    }
    &:hover {
        color: #0063bf;
        background-color: #f0f8ff;
    }
`;

const Caution = styled.div`
    color: #6a737c;
    font-size: 12px;
    margin-top: 32px;
`;