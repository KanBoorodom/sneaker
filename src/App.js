import React from 'react'
import styled, {css} from 'styled-components/macro'

import Header from './Components/Header'
import GlobalStyle from './globalStyle'

import Navbar from './Components/Navbar'
function App() {

  const Test = styled.div`
    position:relative;
    color:black;
    font-weight:bolder;
    width:fit-content;
    margin:5em;
    padding:1em;
    transition:.25s ease;
    cursor:pointer;
    &:hover{
      transform:translateY(-5px);
      transition:.25s ease;
    }

    &::after{
      content:'';
      position:absolute;
      background:red;
      width:100%;
      height:5px;
      bottom:20%;
      left:0;
      opacity:0;
      transform:scaleX(0.5);
      transform-origin:center;
      transition:all 500ms ease-in;
    }

    &:hover::after{
      opacity:1;
      transform:scale(.7);
      transition:all 500ms ease-in;
    }
  `
  return (
    <div>
      <GlobalStyle />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
