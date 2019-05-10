import React, { Component } from 'react'
import iphone2 from './images/iphone2.jpg';
import '../css/Home.css';

export default class Home extends Component {
  render() {
        return (
         <center>
        
              <img src={iphone2} alt="phone" width="100%"  height="100%" />
              <h4 className="home-title">Apple Online Shop</h4>
      </center>
    );
  }
}