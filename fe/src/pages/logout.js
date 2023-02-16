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
                        </div>
                        <div></div>
                    </div>
                </form>
            </div>
        </div>
    )
}