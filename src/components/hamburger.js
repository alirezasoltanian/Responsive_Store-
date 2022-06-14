import React, { Component } from 'react';
import Navbar from './Navbar'

import styled from 'styled-components';
const Div = styled.div`
  width 2rem;
  height: 2rem;
  position: fixed;
  top : 20px;
  left : 20px;
  z-index:25;
  display: none;
  cursor: pointer;
  @media (max-width:765px){
    display: flex; 
    justify-content: space-around;
    flex-direction: column ;
  }
  div { 
    width : 2rem;
    height : 0.25rem;
    background: #D7A86E;
    border-radius:10px;
    transform-origin: 1px;
    transition : all 0.3s linear;
    &:nth-child(1){
      transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate0(0)') }
    }
    &:nth-child(2){
      transform: ${(props) => (props.open ? 'translateX(-100%)' : 'translateX(0)') } ;
      opacity : ${(props) => (props.open ? 0 :1) };

    }
    &:nth-child(3){
      transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'rotate0(0)') }
    }
  }

`
;

class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      open : false
    }
  }

  openHandler = () => {
    this.setState({
      open: !this.state.open
    })
    console.log(this.state.open)
  }
  state = {  } 
  render() { 
    return (
      <>
        <Div open = {this.state.open } onClick={this.openHandler}>
          <div></div>
          <div></div>
          <div></div>
        </Div>
        <Navbar Open={this.state.open} />
      </>
    );
  }
}
 
export default Hamburger ;