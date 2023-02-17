import React from "react"
import styled from "styled-components";

function Logout() {
    return (
        <Container>
            <div>push 후 pull 테스트</div>
            <Content>
                <FlexItem>
                        <H1>
                            Clicking "Log out" will log you out of the following domains on this device:
                        </H1>
                    <form>
                        <ul>
                            <li>
                                <Link href="https://askubuntu.com">
                                    <LogoImg 
                                        src='https://cdn.sstatic.net/Sites/askubuntu/Img/apple-touch-icon.png'
                                        alt='ask ubuntu'
                                    />
                                    <Domain>askubuntu.com</Domain>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://mathoverflow.net">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/mathoverflow/Img/apple-touch-icon.png?v=8c5ff8612fb4'
                                        alt='math overflow'
                                    />
                                    <Domain>mathoverflow.net</Domain>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://serverfault.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/serverfault/Img/apple-touch-icon.png'
                                        alt='server fault'
                                    />
                                    <Domain>serverfault.com</Domain>
                                </Link>
                            </li>                        
                            <li>
                                <Link href="https://stackapps.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/stackapps/Img/apple-touch-icon.png'
                                        alt='stack apps'
                                    />
                                    <Domain>stackapps.com</Domain>
                                </Link>
                            </li>                     
                            <li>
                                <Link href="https://stackexchange.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/stackexchange/Img/apple-touch-icon@2.png'
                                        alt='stack exchange'
                                    />
                                    <Domain>stackexchange.com</Domain>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://stackoverflow.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png'
                                        alt='stack overflow'
                                    />
                                    <Domain>stackoverflow.com</Domain>
                                </Link>
                            </li>                        
                            <li>
                                <Link href="https://superuser.com">
                                    <LogoImg
                                        src='https://cdn.sstatic.net/Sites/superuser/Img/apple-touch-icon.png'
                                        alt='super user'
                                    />
                                    <Domain>superuser.com</Domain>
                                </Link>
                            </li>
                        </ul>
                        <LogoutAll>
                            <CheckboxDiv>
                                <input type="checkbox" id="everywhere" />
                            </CheckboxDiv>
                            <div>
                                <label for="everywhere">Log out on all devices</label>
                            </div>
                        </LogoutAll>
                        <div>
                            <button>Log out</button>
                            <Link href="https://stackoverflow.com/">Cancel</Link>
                        </div>
                        <div>
                            If you’re on Link shared computer, remember to log out of your Open ID provider (Facebook, Google, Stack Exchange, etc.) as well.
                        </div>
                    </form>
                </FlexItem>
            </Content>
        </Container>
    )
}

export default Logout;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f1f2f3;
    `
const Content = styled.div`
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
const FlexItem = styled.div`
    
    `

const H1 = styled.h1`
    text-align: center;
    margin-bottom: 24px;
    `

const Link = styled.a`
    display: flex;
    align-items: center;
`

const LogoImg = styled.img`
    width: 16px;
    height: 16px;
    margin: 4px;
`

const Domain = styled.div`
    margin: 4px;
`

const LogoutAll = styled.div`
    display: flex;
`

const CheckboxDiv = styled.div`
    margin-right: 4px;
`