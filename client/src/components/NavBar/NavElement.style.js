import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   background: whitesmoke;
   height: 80px;
   /* margin-top: -80px; */
   z-index: 10;
   position: sticky;
   cursor:pointer;
`

export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width:100%;
padding: 0 30px;
max-width: 1200px;
`
export const NavLogo = styled(LinkR)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
`