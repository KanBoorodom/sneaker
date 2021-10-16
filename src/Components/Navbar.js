import React from 'react'
import style from 'styled-components/macro'
import {Link} from 'react-router-dom'

const Nav = style.nav`
    display:flex;
    align-items:center;
    justify-content:space-between;
    position:absolute;
    padding:.5em;
    width:100%;
    height:fit-content;

    @media screen and (min-width:425px){
        padding-left:2.25em;
    }
`

const Logo = style(Link)`
    position:relative;
    font-style:italic;
    font-weight:800;
    font-size:1.5rem;
    color: #eac422;
    z-index:10;
    &::after{
        content:'';
        position:absolute;
        height:6px;
        width:100%;
        background: linear-gradient(to right, #FF0080, #FF8C00, #40E0D0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        top:40%;
        left:0;
        transform:scale(0.8);
        opacity:0.8;
    }
`

const Menu = style.div``

const MenuItem = style.a``

const Hamburger = style.div`
    display:flex;
    position:fixed;
    top:15px;
    right:10px;
    flex-direction:column;
    align-items:flex-end;
    gap:3px;
    z-index:10;

    @media screen and (min-width:425px){
        right:20px;
    }
`
const HamburgerBar = style.div`
    width:15px;
    height:3px;
    background:#fff;

    &:nth-child(2){
        width:20px;
    }
`

const Navbar = () => {
    return (
    <Nav>
        <Logo>SNEAKER</Logo>
        <Menu>
        </Menu>
        <Hamburger>
            <HamburgerBar />
            <HamburgerBar />
            <HamburgerBar />
        </Hamburger>
    </Nav>
    )
}

export default Navbar
