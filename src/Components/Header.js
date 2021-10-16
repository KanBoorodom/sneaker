import React from 'react'
import style, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'

const HeaderWrapper = style.header`
    display:flex;
    justify-content:center;
    position:relative;
    height:100vh;
    min-height:500px;
    max-height:760px;

    &::after{
        content:'';
        position:absolute;
        background:#000;
        width:100%;
        height:100%;
        opacity:0.3;
        z-index:1;
    }
`
const HeaderImg = style.img`
    width:100%;
    object-fit:cover;
`

const TextWrapper = style.div`
    position:absolute;
    z-index:5;
    top:25%;
    width:100%;
    color: #e3ccb5;
    font-size:1.5rem;
`
const SmlText = style.p`
    padding:0.5em;

    @media screen and (min-width:425px){
        text-align:center;
        font-size:2.25rem;
    }
`
const BigText = style.p`
    color: #000;
    width:100%;
    max-width:450px;
    padding-left:.5em;
    margin-top:.25em;
    font-size: clamp(2.85rem,10vw,4rem);
    text-transform: uppercase;
    position: relative;
    z-index: 5;

    &::after{
        content: '';
        position: absolute;
        z-index: -1;
        color: #fff;
        background: #f2b414;
        opacity: .5;
        width: 90%;
        max-width:450px;
        height: 100%;
        left: 0;
        top: 0;
    }

    @media screen and (min-width:425px){
        width:80%;
        max-width:550px;
        padding-left:0;
        margin:auto;
        text-align:center;
        &::after{
            max-width:none;
            width:100%;
        }
    }
`
const absoluteBtn = css`
    position:absolute;
    z-index:10;
    bottom:10%;
    align-self:center;
    padding: .5em;
    border:3px solid #f2b414;
`

const Btn = style(Link)`
    color:#fff;
    cursor:pointer;
    transition:background .5s ease-in-out;
    ${ ( {toggle} ) => toggle && absoluteBtn}


    &:hover{
        background:#eac422;
        color:#000;
        transition:.5s ease-in-out;
    }
`
const Header = ()=>{
    let menuToggle = 'true'
    return (
        <HeaderWrapper  >
            <HeaderImg  
                src = 'https://images.unsplash.com/photo-1584386450584-c6d766612a45?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNuZWFrZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' 
                alt = 'header image'
            />
            <TextWrapper>
                <SmlText>Get ready for a</SmlText>
                <BigText>Brand new shoes...</BigText>
                {!menuToggle && <Btn>SHOP NOW</Btn>}
            </TextWrapper>
            <Btn toggle = {menuToggle}>SHOP NOW</Btn>
        </HeaderWrapper >
    )

}

export default Header