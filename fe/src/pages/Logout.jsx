import React from "react"
import styled from "styled-components";

const Logout = () => {
    return (
        <div className="container">
            <div id="content">
                <div>
                    <h1>
                        Clicking "Log out" will log you out of the following domains on this device:
                    </h1>
                </div>
                <form>
                    <ul>
                        <li>
                            <DomainsList href="https://askubuntu.com">
                                <LogoImg 
                                    src='https://cdn.sstatic.net/Sites/askubuntu/Img/apple-touch-icon.png'
                                    alt='ask ubuntu'
                                />
                                <Link>askubuntu.com</Link>
                            </DomainsList>
                        </li>
                        <li>
                            <DomainsList href="https://mathoverflow.net">
                                <LogoImg
                                    src='https://cdn.sstatic.net/Sites/mathoverflow/Img/apple-touch-icon.png?v=8c5ff8612fb4'
                                    alt='math overflow'
                                />
                                <Link>mathoverflow.net</Link>
                            </DomainsList>
                        </li>
                        <li>
                            <DomainsList href="https://serverfault.com">
                                <LogoImg
                                    src='https://cdn.sstatic.net/Sites/serverfault/Img/apple-touch-icon.png'
                                    alt='server fault'
                                />
                                <Link>serverfault.com</Link>
                            </DomainsList>
                        </li>                        
                        <li>
                            <DomainsList href="https://stackapps.com">
                                <LogoImg
                                    src='https://cdn.sstatic.net/Sites/stackapps/Img/apple-touch-icon.png'
                                    alt='stack apps'
                                />
                                <Link>stackapps.com</Link>
                            </DomainsList>
                        </li>                     
                        <li>
                            <DomainsList href="https://stackexchange.com">
                                <LogoImg
                                    src='https://cdn.sstatic.net/Sites/stackexchange/Img/apple-touch-icon@2.png'
                                    alt='stack exchange'
                                />
                                <Link>stackexchange.com</Link>
                            </DomainsList>
                        </li>
                        <li>
                            <DomainsList href="https://stackoverflow.com">
                                <LogoImg
                                    src='https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png'
                                    alt='stack overflow'
                                />
                                <Link>stackoverflow.com</Link>
                            </DomainsList>
                        </li>                        <li>
                            <DomainsList href="https://superuser.com">
                                <LogoImg
                                    src='https://cdn.sstatic.net/Sites/superuser/Img/apple-touch-icon.png'
                                    alt='super user'
                                />
                                <Link>superuser.com</Link>
                            </DomainsList>
                        </li>
                    </ul>
                    <div>
                        <div>
                            <input type="checkbox" id="everywhere" />
                        </div>
                        <div>
                            <label for="everywhere">Log out on all devices</label>
                        </div>
                    </div>
                    <div>
                        <button>Log out</button>
                        <DomainsList href="https://stackoverflow.com/">Cancel</DomainsList>
                    </div>
                    <div>
                        If you’re on DomainsList shared computer, remember to log out of your Open ID provider (Facebook, Google, Stack Exchange, etc.) as well.
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Logout;

const DomainsList = styled.a`
    display: flex;
`

const LogoImg = styled.img`
    width: 16px;
    height: 16px;
`

const Link = styled.div`
    margin: 4px;
`