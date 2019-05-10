import React, { Component } from 'react'
import axios from 'axios'

export default class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = { 
          orderstatus: []
          }
        };
        
    componentDidMount() {
      axios.get('http://localhost:8080/OnlineShopping/rest/orderstatus')
      .then(response => {
        console.log(response)
        this.setState({orderstatus: response.data});
      })
    }
    

  render() {
    return (
      <div>
        {/* <div className='checkout'>{orderstatus.orderstatus}</div> */}
        <h3>hello</h3>
      </div>
    )
  }
}
