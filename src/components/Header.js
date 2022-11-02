import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
const Header = () => {
    return (
        <Navbar
            className="my-2"
            color="warning"
            light
        >
            <NavbarBrand href="/">


                <h1>
                    <span class="material-symbols-outlined">
                        edit_location
                    </span>
                    gezi-yorum
                    <span class="material-symbols-outlined">
                        edit_location
                    </span>
                </h1>

            </NavbarBrand>
        </Navbar>
    )
}

export default Header