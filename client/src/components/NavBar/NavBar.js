import React from 'react'
import {Nav, NavContainer, NavLogo} from './NavElement.style.js'

function NavBar() {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>Logo</NavLogo>
            <MobileIcon>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    {/* Router links */}
                    <NavLinks to='feed'>Feed</NavLinks> 
                    <NavLinks to='shortlist'>Shortlist</NavLinks>
                    {/* Scroll links */}
                    <NavLinks to='about'>About</NavLinks>
                    <NavLinks to='tech'>Tech</NavLinks>
                    <NavLinks to='contact'>Conatct</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default NavBar