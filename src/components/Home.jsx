import React, { Component } from 'react'
import iphone5 from './images/iphone5.jpg';
import '../css/Home.css';

export default class Home extends Component {
  render() {
        return (
         <center> <h3 className="app-name">Apple Online Shopping
        <div className="container mt-1">
         <center>
              <img src={iphone5} alt="phone" width="100%"  height="100%" />
            </center>
       </div></h3></center>
    );
  }
}