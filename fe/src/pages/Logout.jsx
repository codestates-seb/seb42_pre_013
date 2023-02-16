<<<<<<< Updated upstream
import React from "react"
import styled from "styled-components";

const Logout = () => {
    return (
        <Container>
=======
const Logout = () => {
    return (
        <div className="container">
>>>>>>> Stashed changes
            <div id="content">
                <div>
                    <h1>
                        Clicking "Log out" will log you out of the following domains on this device:
                    </h1>
                </div>
                <form>
                    <ul>
                        <li>
<<<<<<< Updated upstream
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
            </div>
        </Container>
    )
}

export default Logout;

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
=======
                            <a href="https://askubuntu.com">
                                <div></div>
                                <div>askubuntu.com</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://mathoverflow.net">
                                <div></div>
                                <div>mathoverflow.net</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://serverfault.com">
                                <div></div>
                                <div>serverfault.com</div>
                            </a>
                        </li>                        <li>
                            <a href="https://stackapps.com">
                                <div></div>
                                <div>stackapps.com</div>
                            </a>
                        </li>                        <li>
                            <a href="https://stackexchange.com">
                                <div></div>
                                <div>stackexchange.com</div>
                            </a>
                        </li>                        <li>
                            <a href="https://stackoverflow.com">
                                <div></div>
                                <div>stackoverflow.com</div>
                            </a>
                        </li>                        <li>
                            <a href="https://superuser.com">
                                <div></div>
                                <div>superuser.com</div>
                            </a>
                        </li>
                    </ul>
                    <div>
                        <div>
                            <input type="checkbox"></input>
                        </div>
                        <div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Logout
>>>>>>> Stashed changes
