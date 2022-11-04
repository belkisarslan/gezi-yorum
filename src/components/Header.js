import React from 'react'
import { Navbar, NavbarBrand, CardText } from 'reactstrap'
const Header = () => {
    return (
        <Navbar
            className="my-2"
            color="warning"
            light
        >
            <NavbarBrand href="/">
                <h1>
                    <span className="material-symbols-outlined">
                        edit_location
                    </span>
                    gezi-yorum
                    <span className="material-symbols-outlined">
                        edit_location
                    </span>
                </h1>
                <CardText>
                    <small className="text-muted">
                        "CTRL" tuşuna basın ve şehirlerdeki anılarınızı biriktirmeye başlayın!
                    </small>
                </CardText>

            </NavbarBrand>
        </Navbar>
    )
}

export default Header