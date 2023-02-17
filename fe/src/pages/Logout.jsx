import React from "react"
import styled from "styled-components";
import LogoutNav from '../components/nav/LogoutNav'


function Logout() {
    return (
        <>
            <LogoutNav />
            <Container>
                <FlexItem>
                    <H1>
                        Clicking "Log out" will log you out of the following domains on this device:
                    </H1>
                    <LogoutForm>
                        <Ul>
                            <Li>
                                <Link href="https://askubuntu.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/askubuntu/Img/apple-touch-icon.png'
                                        alt='ask ubuntu'
                                    />
                                    <Domain>askubuntu.com</Domain>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="https://mathoverflow.net">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/mathoverflow/Img/apple-touch-icon.png?v=8c5ff8612fb4'
                                        alt='math overflow'
                                    />
                                    <Domain>mathoverflow.net</Domain>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="https://serverfault.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/serverfault/Img/apple-touch-icon.png'
                                        alt='server fault'
                                    />
                                    <Domain>serverfault.com</Domain>
                                </Link>
                            </Li>                        
                            <Li>
                                <Link href="https://stackapps.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/stackapps/Img/apple-touch-icon.png'
                                        alt='stack apps'
                                    />
                                    <Domain>stackapps.com</Domain>
                                </Link>
                            </Li>                     
                            <Li>
                                <Link href="https://stackexchange.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/stackexchange/Img/apple-touch-icon@2.png'
                                        alt='stack exchange'
                                    />
                                    <Domain>stackexchange.com</Domain>
                                </Link>
                            </Li>
                            <Li>
                                <Link href="https://stackoverflow.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png'
                                        alt='stack overflow'
                                    />
                                    <Domain>stackoverflow.com</Domain>
                                </Link>
                            </Li>                        
                            <Li>
                                <Link href="https://superuser.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/superuser/Img/apple-touch-icon.png'
                                        alt='super user'
                                    />
                                    <Domain>superuser.com</Domain>
                                </Link>
                            </Li>
                        </Ul>
                        <LogoutAll>
                            <CheckboxDiv>
                                <input type="checkbox" id="everywhere" />
                            </CheckboxDiv>
                            <div>
                                <label for="everywhere">Log out on all devices</label>
                            </div>
                        </LogoutAll>
                        <LogoutAndCancel>
                            <LogoutButton>Log out</LogoutButton>
                            <Cancel href="https://stackoverflow.com/">Cancel</Cancel>
                        </LogoutAndCancel>
                        <Caution>
                            If you’re on a shared computer, remember to log out of your Open ID provider (Facebook, Google, Stack Exchange, etc.) as well.
                        </Caution>
                    </LogoutForm>
                </FlexItem>
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
    `
const FlexItem = styled.div`
    `

const H1 = styled.div`
    max-width: 445.64px;
    text-align: center;
    margin-bottom: 24px;
    font-size: 19px;
    color: #232629;
`

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
    `

const Ul = styled.ul`
    padding-left: 0;
    margin-bottom: 16px;
    border-bottom: 1px solid;
    border-color: #d6d9dc;
    padding-bottom: 12px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
const Li = styled.li`
    list-style: none;
`

const Link = styled.a`
    display: flex;
    align-items: center;
    text-decoration-line: none;
    margin: 2px;
`

const LogoImg = styled.img`
    width: 16px;
    height: 16px;
    margin-right: 5px;
`

const Domain = styled.div`
    color: #0074cc;
    font-size: 14.3px;
`

const LogoutAll = styled.div`
    display: flex;
    font-size: 12px;
    color: #0c0d0e;
    margin-bottom: 16px;
`

const CheckboxDiv = styled.div`
    margin-right: 4px;
`
const LogoutAndCancel = styled.div`
    display: flex;
`

const LogoutButton = styled.button`
    width: 66.16px;
    height: 37.78px;
    color: #ffffff;
    font-size: 13px;
    background-color: #0a95ff;
    margin: 2px;
    border: none;
    border-radius: 4px;
    padding: 10.4px;
`
const Cancel = styled.a`
    height: 37.78px;
    color: #0074cc;
    font-size: 13px;
    margin: 2px;
    padding: 10.4px;
    text-decoration-line: none;
`

const Caution = styled.div`
    color: #6a737c;
    font-size: 12px;
    margin-top: 32px;
`