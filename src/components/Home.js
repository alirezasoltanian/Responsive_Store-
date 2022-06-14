import React, { Component } from 'react'
import Baner from './landing/baner';
import Cards from './landing/Cards';
import Search from './landing/Search';
import Logos from './landing/Logos';
export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Baner  />
        <Cards />
        <Search />
        <Logos  />
      </div>
    )
  }
}
