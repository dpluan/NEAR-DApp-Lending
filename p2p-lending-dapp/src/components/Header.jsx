import 'regenerator-runtime/runtime'
import React from "react";
import { Container } from "reactstrap";
import { login, logout } from '../utils'
import { Layout, Menu, Button, Dropdown } from "antd";


const Header = () => {

    return (
        <header className="header">
            <Container>
                <img  src="https://bafkreifwn45g2fkyvzkuoiqmcteqfxoo63xzhdl2bm5dqhbf5h2xx4aswe.ipfs.nftstorage.link/" alt="logo" style={{height: 80, marginBottom: 40}}/>
                {window.walletConnection.isSignedIn() ?  
                    <>
                        <button style={{background: "transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box", borderRadius: 40,  float: "right"}} onClick={logout}> {window.accountId} </button>
                    </>
                    :
                    <button style={{background: "transparent linear-gradient(270deg,#1b6dc1,#8b5bc5) 0 0 no-repeat padding-box", borderRadius: 40,  float: "right"}} onClick={login}>Wallet</button>
                }
            </Container>
        </header>
    )
}

export default Header;